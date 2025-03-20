"use client";
import HeaderSection from "@/components/HeaderSection";
import Head from "next/head";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Design from "../homepage1/components/Design";
import { CheckCircle, XCircle } from "lucide-react"
export const dynamic = "force-dynamic";

export default function Register() {
    const searchParams = useSearchParams();
    const [countries, setCountries] = useState([]);
    const [slug, setSlug] = useState("");
    const [detail, setDetail] = useState("");
    const [category, setCategory] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [city, setCity] = useState("");
    const [language, setLanguage] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [modal, setModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const [participantType, setParticipantType] = useState("Company");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [jobtitle, setJobTitle] = useState("");
    const [phone, setPhone] = useState("");
    const [mobile, setMobile] = useState("");
    const [company, setCompany] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [loading , setLoading] = useState(false)
  
    // Regex for valid phone number format (allowing + and digits only)
    const phoneRegex = /^[+]?[0-9]{10,15}$/; // Valid phone number
    const mobileRegex = /^[+]?[0-9]{10,15}$/; // Same for mobile number
  
    // Handle phone number input change
    const handlePhoneChange = (e) => {
      setPhone(e.target.value); // Allow any input
    };
  
    // Handle mobile number input change
    const handleMobileChange = (e) => {
      setMobile(e.target.value); // Allow any input
    };
  
    // Validate phone and mobile number before form submission
    const validatePhone = () => phoneRegex.test(phone);
    const validateMobile = () => mobileRegex.test(mobile);
  
  const [participants, setParticipants] = useState([
    {
      fullName: "",
      email: "",
      jobTitle: "",
      phone: "",
      mobile: "",
    },
  ]);

  const handleParticipantTypeChange = (type) => {
    setParticipantType(type);
  };

  const handleInputChange = (index, field, value) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][field] = value;
    setParticipants(updatedParticipants);
  };

  const addParticipant = () => {
    setParticipants([
      ...participants,
      {
        fullName: "",
        email: "",
        jobTitle: "",
        phone: "",
        mobile: "",
      },
    ]);
  };

  useEffect(() => {
    setSlug(searchParams.get("course") || "");
    setSelectedDate(searchParams.get("date") || "");
    setCity(searchParams.get("city") || "");
  }, [searchParams]);

  useEffect(() => {
    setSlug(searchParams.get("course") || "");
    const initialCitySlug = searchParams.get("city"); // Get the city slug from the URL

    // Fetch the course details after slug is set
    const getDetail = async () => {
      if (slug) {
        try {
          const res = await fetch(
            `https://backendbatd.clinstitute.co.uk/api/courses/${slug}`,
            {
              method: "GET",
              next: { revalidate: 60 },
              headers: {
                "Content-Type": "application/json",
                "Accept-Language": "en",
              },
            }
          );
          if (!res.ok) throw new Error(`Failed to fetch details`);
          const d = await res.json();
          setDetail(d);

          // Automatically select the city based on the slug
          if (d?.data?.available_cities && initialCitySlug) {
            const cityFromSlug = d.data.available_cities.find(
              (cityOption) => cityOption.slug === initialCitySlug
            );
            if (cityFromSlug) {
              setCity(cityFromSlug.id); // Set city ID based on the slug
            }
          }

          return d;
        } catch (error) {
          console.error(error.message);
        }
      }
    };

    getDetail();
  }, [slug, searchParams]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const sortedCountries = data.sort((a, b) => {
          const nameA = a.name.common.toUpperCase();
          const nameB = b.name.common.toUpperCase();
          return nameA.localeCompare(nameB);
        });

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSubmit = async (e) => {
    if (!validatePhone() || !validateMobile()) {
        alert("Please enter valid phone and mobile numbers.");
        return;
      }
  
      e.preventDefault();
      setLoading(true)
      // Create a new FormData object
      const formData = new FormData();
  
      // Append fields to FormData
      formData.append("course_id", detail?.data?.id || "");
      formData.append("participant_type", participantType.toLowerCase());
      formData.append("city_id", city || "");
      formData.append("date", selectedDate || "");
      formData.append("full_name", fullname || "");
      formData.append("language", language || "English");
      formData.append("email", email || "");
      formData.append("job_title", jobtitle || "");
      formData.append("phone", phone || "");
      formData.append("mobile", mobile || "");
      formData.append("company", company || "");
      formData.append("address", address || "");
      formData.append("country", country || "");
  
      // Append participants only if it's a company
      if (participantType.toLowerCase() === "company") {
        participants.forEach((participant, index) => {
          formData.append(
            `participants[${index}][full_name]`,
            participant.fullName
          );
          formData.append(`participants[${index}][email]`, participant.email);
          formData.append(
            `participants[${index}][job_title]`,
            participant.jobTitle
          );
          formData.append(`participants[${index}][phone]`, participant.phone);
          formData.append(`participants[${index}][mobile]`, participant.mobile);
        });
      }
    try {
      const response = await fetch(
        "https://backendbatd.clinstitute.co.uk/api/course-register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Accept-Language": "en",
          },
          body: formData,
        }
      );

      const responseData = await response.json(); // Parse JSON response
      setLoading(false)

      // Handle success based on `status`
      if (responseData.status === "success") {
        setModal(true);
        setSuccess(true);
      } else {
        setModal(true);
        setSuccess(false);
        console.error("Unexpected status:", responseData.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Handle network or other errors
    }
  };

  return (
    <>
      <Head>
        <meta name="csrf-token" content="{{ csrf_token() }}"></meta>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Design secondary={true} bg></Design>
      <div className="min-h-screen py-10 mt-10 bg-gray-100 flex items-center justify-center text-base">
        <div className="bg-white shadow-md rounded-lg md:p-6 p-4 w-full max-w-3xl">
          <h1 className="text-2xl font-semibold mb-6 text-center text-primary">
            Register Course
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              <div>
                <label className="block text-sm font-medium sm:mb-2 mt-2 sm:mt-0">
                  Course Title
                </label>
                <input
                  type="text"
                  value={detail?.data?.title || ""}
                  readOnly
                  className="w-full text-primary cursor-not-allowed   border border-gray-300 rounded-lg p-2 bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-primary text-sm font-medium sm:mb-2 mt-2 sm:mt-0">
                  Category
                </label>
                <select
                  value={category}
                  required
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-primary border border-gray-300 rounded-lg p-2"
                >
                  <option>{detail?.data?.category || "Select Category"}</option>
                </select>
              </div>

              <div>
                <label className="block text-primary text-sm font-medium sm:mb-2 mt-2 sm:mt-0">
                  Specialization
                </label>
                <select
                  value={specialization}
                  required
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full text-primary border border-gray-300 rounded-lg p-2"
                >
                  <option>
                    {detail?.data?.specialization || "Select Specialization"}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-primary text-sm font-medium sm:mb-2 mt-2 sm:mt-0">
                  City
                </label>
                <select
                  value={city} // This binds the selected city to the state
                  required
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full text-primary border border-gray-300 rounded-lg p-2"
                >
                  {!city && <option>Select City</option>}
                  {detail?.data?.available_cities?.map((cityOption) => (
                    <option key={cityOption.id} value={cityOption.id}>
                      {cityOption.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-primary text-sm font-medium sm:mb-2 mt-2 sm:mt-0">
                  Language
                </label>
                <select
                  value={language}
                  required
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full text-primary border border-gray-300 rounded-lg p-2"
                >
                  <option value={'English'}>English</option>
                  <option value={'Arabic'}>Arabic</option>
                </select>
              </div>

              {/*<div>
                <label className="block text-sm font-medium mb-2">
                  Number of Attendees
                </label>
                <select
                  value={attendees}
                  required
                  onChange={(e) => setAttendees(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option>Select Participant</option>
                  <option>1</option>
                  <option>2 - 3</option>
                  <option>3+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Duration
                </label>
                <select
                  value={duration}
                  required
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option>Week</option>
                  <option>Two Weeks</option>
                  <option>3 Weeks</option>
                </select>
              </div>*/}

              <div className="col-span-2">
                <label className="block text-primary text-sm font-medium sm:mb-2 mt-2 sm:mt-0">
                  Available Dates
                </label>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">
                          #
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {detail?.data?.available_dates?.map((dateObj) => (
                        <tr key={dateObj.id} className="hover:bg-gray-100">
                          <td className="px-4 py-2 text-sm text-gray-700 border-b">
                            <input
                              type="radio"
                              name="date"
                              value={dateObj.date}
                              checked={selectedDate === dateObj.date}
                              onChange={(e) => setSelectedDate(e.target.value)} // Update state directly
                              onClick={() => setSelectedDate(dateObj.date)} // Handle click directly
                              className="focus:ring-blue-500 text-primary"
                            />
                          </td>
                          <td
                            className="px-4 py-2 text-primary text-sm  border-b cursor-pointer"
                            onClick={() => setSelectedDate(dateObj.date)} // Clicking on the row updates the date
                          >
                            {dateObj.date}
                          </td>
                        </tr>
                      ))}
                      <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 text-sm text-primary border-b">
                          <input
                            type="radio"
                            name="date"
                            value={selectedDate}
                            checked={
                              !detail?.data?.available_dates?.some(
                                (dateObj) => dateObj.date === selectedDate
                              )
                            }
                            onChange={(e) => setSelectedDate(e.target.value)}
                            onClick={() => setSelectedDate(selectedDate)} // Ensure custom date selection
                            className="focus:ring-blue-500"
                          />
                        </td>
                        <td className="px-4 py-2 text-sm text-primary border-b">
                          <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)} // Handle custom date change
                            className="w-full border border-gray-300 text-primary rounded-md p-2"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-6">Participant Form</h2>
              <div className="mb-4">
                <label className="block text-sm text-primary font-medium mb-2">
                  Participant Type
                </label>
                <div className="flex space-x-4 text-primary">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="participantType"
                      value="Company"
                      checked={participantType === "Company"}
                      onChange={() => handleParticipantTypeChange("Company")}
                      className="text-primary"
                    />
                    <span>Company</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="participantType"
                      value="Person"
                      checked={participantType === "Person"}
                      onChange={() => handleParticipantTypeChange("Person")}
                      className="text-primary"

                    />
                    <span>Person</span>
                  </label>
                </div>
              </div>

              <div className="mb-6 border-t pt-4 text-primary">
                <h3 className="text-lg font-medium mb-4">
                  {participantType === "Company" ? (
                    <h1>Company Details</h1>
                  ) : (
                    <h1>Participant </h1>
                  )}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full border text-primary border-gray-300 rounded-lg p-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border text-primary border-gray-300 rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Job Title"
                    required
                    value={jobtitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full border text-primary border-gray-300 rounded-lg p-2"
                  />
                  <div className='flex flex-col gap-2'>
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    value={phone}
                    onChange={(e)=>handlePhoneChange(e)}
                    className="w-full border text-primary border-gray-300 rounded-lg p-2"
                  />
                  {!phoneRegex.test(phone) && phone && (
                  <p className="text-xs text-red-500">Please enter a valid phone number.</p>
                )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="tel"
                    placeholder="Mobile"
                    required
                    value={mobile}
                    onChange={handleMobileChange}
                    className="w-full border text-primary border-gray-300 rounded-lg p-2"
                  />
                  {!mobileRegex.test(mobile) && mobile && (
                  <p className="text-xs text-red-500">Please enter a valid mobile number.</p>
                )}
                </div>
                  <input
                    type="text"
                    placeholder="Company"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full border text-primary border-gray-300 rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border text-primary border-gray-300 rounded-lg p-2"
                  />
                  <select
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border text-primary border-gray-300 rounded-lg p-2"
                  >
                    <option>Select Country</option>
                    {countries.map((country) => (
                      <option key={country.cca2} value={country.name.common}>
                        {country.name.common}
                      </option>
                    ))}
                  </select>
                </div>
                {participants.map(
                  (participant, index) =>
                    participantType === "Company" && (
                      <div key={index} className="mb-6 border-t my-10 pt-4">
                        <h3 className="text-lg font-medium mb-4">
                          Participant {index + 1}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={participant.fullName}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "fullName",
                                e.target.value
                              )
                            }
                            className="w-full text-primary border border-gray-300 rounded-lg p-2"
                          />
                          <input
                            type="email"
                            placeholder="Email"
                            value={participant.email}
                            onChange={(e) =>
                              handleInputChange(index, "email", e.target.value)
                            }
                            className="w-full text-primary border border-gray-300 rounded-lg p-2"
                          />
                          <input
                            type="text"
                            placeholder="Job Title"
                            value={participant.jobTitle}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "jobTitle",
                                e.target.value
                              )
                            }
                            className="w-full text-primary border border-gray-300 rounded-lg p-2"
                          />
                          <input
                            type="tel"
                            placeholder="Phone"
                            value={participant.phone}
                            onChange={(e) =>
                              handleInputChange(index, "phone", e.target.value)
                            }
                            pattern="^\+?[1-9]\d{1,14}$"
                            className="w-full text-primary border border-gray-300 rounded-lg p-2"
                          />
                          <input
                            type="tel"
                            placeholder="Mobile"
                            required
                            value={participant.mobile}
                            onChange={(e) =>
                              handleInputChange(index, "mobile", e.target.value)
                            }
                            pattern="^\+?[1-9]\d{1,14}$"
                            className="w-full text-primary border border-gray-300 rounded-lg p-2"
                          />
                        </div>
                      </div>
                    )
                )}
              </div>

              {participantType === "Company" && (
                <button
                  type="button"
                  onClick={addParticipant}
                  className="text-blue-500"
                >
                  + Add Another Participant
                </button>
              )}
            </div>

            <div className="mt-8 text-start">
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg"
              >
                {loading ? 'Loading ...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-[100%] sm:max-w-[540px] overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8">
              {success ? (
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Registration Successful
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    Your registration has been submitted successfully. You will
                    be notified via email or phone shortly.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Registration Error
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    We apologize, but there was an error submitting your
                    registration. Please try again later or contact{" "}
                    <Link
                      href="/customer_service"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Customer Support
                    </Link>
                    .
                  </p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setModal(false)}
                  className="w-full sm:w-1/2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-sm sm:text-base"
                >
                  Close
                </button>
                <Link
                  href="/diploma"
                  className="w-full sm:w-1/2 text-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/70 transition-colors text-sm sm:text-base"
                >
                  Discover New Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}