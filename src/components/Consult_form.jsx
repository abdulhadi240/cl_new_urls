"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

const ConsultForm = ({ title }) => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    consultation_id: "2",
    name: "",
    email: "",
    contact_number: "",
    message: "",
  })

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Validate Form
  const isFormValid = () => {
    return formData.name && formData.email && formData.contact_number && formData.message
  }

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFormValid()) {
      toast({ title: "Error", description: "All fields are required!", variant: "destructive" })
      return
    }

    setLoading(true)
    const formDataToSend = new FormData()
    formDataToSend.append("consultation_id", formData.consultation_id)
    formDataToSend.append("name", formData.name)
    formDataToSend.append("email", formData.email)
    formDataToSend.append("contact_number", formData.contact_number)
    formDataToSend.append("message", formData.message)

    try {
      const response = await fetch("https://backendbatd.clinstitute.co.uk/api/consultation_query", {
        method: "POST",
        headers: {
          "Accept-Language": "en",
        },
        body: formDataToSend,
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your consultation request has been submitted successfully!",
          variant: "success",
        })
        setFormData({
          consultation_id: "2",
          name: "",
          email: "",
          contact_number: "",
          message: "",
        })
      } else {
        throw new Error(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="md:flex md:justify-center overflow-hidden">
      <form onSubmit={handleSubmit} className="max-w-4xl md:mx-auto p-6 bg-white shadow-md mx-2 rounded">
        <div className="flex flex-col md:flex-row justify-between md:gap-6">
          <div className="mb-4">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              className="text-primary"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="text-primary"

            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between md:gap-6">
          <div className="mb-4 md:w-1/2">
            <Label htmlFor="consultation">Consultation for</Label>
            <Input id="consultation" type="text" value={title} readOnly className="bg-gray-200 text-primary cursor-not-allowed" />
          </div>
          <div className="mb-4 md:w-1/2">
            <Label htmlFor="contact_number">Mobile Number</Label>
            <Input
              id="contact_number"
              name="contact_number"
              type="text"
              value={formData.contact_number}
              onChange={handleInputChange}
              placeholder="Enter Your Number"
              required
              className="text-primary"

            />
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            required
            className="text-primary"

          />
        </div>

        <div className="flex justify-center">
          <Button type="submit" disabled={loading} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-full py-2">
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ConsultForm
