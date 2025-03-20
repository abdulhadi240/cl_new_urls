'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

// 🎯 Validation Schema
const schema = yup.object().shape({
  name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  username: yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

const AuthFormSignup = () => {
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState({});

  // 🚀 Form Submission
  const onSubmit = async (formData) => {
    setApiError(null);
    setServerErrors({});
    setIsLoading(true);

    try {
      const response = await axios.post("https://backendbatd.clinstitute.co.uk/api/register", {
        ...formData,
        locale: "en",
      });
      
      navigate.push("/sign-in"); // ✅ Redirect to the login page after successful signup
    } catch (error) {
      if (error.response && error.response.data) {
        const { message, errors: validationErrors } = error.response.data;
        
        setApiError(message || "An error occurred during registration.");
        
        // Handle validation errors from the server
        if (validationErrors) {
          setServerErrors(validationErrors);
          
          // Set form errors for each field with validation error
          Object.keys(validationErrors).forEach(field => {
            if (field in formData) {
              setError(field, {
                type: "server",
                message: validationErrors[field][0]
              });
            }
          });
        }
      } else if (error.request) {
        setApiError("Network error. Please check your internet connection.");
      } else {
        setApiError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 text-sm md:w-[500px] min-w-[350px] -mt-10">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-primary">Create an Account</h2>
        
        {apiError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
            <p className="font-medium">Registration failed</p>
            <p>{apiError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full text-primary p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              {...register("username")}
              className={`w-full text-primary p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 ${
                errors.username || serverErrors.username ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Choose a username"
            />
            {(errors.username || serverErrors.username) && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username?.message || (serverErrors.username && serverErrors.username[0])}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              {...register("email")}
              className={`w-full text-primary p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 ${
                errors.email || serverErrors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {(errors.email || serverErrors.email) && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message || (serverErrors.email && serverErrors.email[0])}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              className={`w-full text-primary p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 ${
                errors.password || serverErrors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter a strong password"
            />
            {(errors.password || serverErrors.password) && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message || (serverErrors.password && serverErrors.password[0])}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              {...register("password_confirmation")}
              className={`w-full text-primary p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 ${
                errors.password_confirmation ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Confirm your password"
            />
            {errors.password_confirmation && (
              <p className="text-red-500 text-sm mt-1">{errors.password_confirmation.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full p-3 text-white font-bold rounded-md transition duration-200 ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary/80"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link href={'/sign-in'}
            className="text-secondary cursor-pointer hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthFormSignup;