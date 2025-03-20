"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "./context/AuthContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

// Validation schema for login
const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

// Validation schema for Forgot Password
const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const AuthForm = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const {
    register: registerForgotPassword,
    handleSubmit: handleForgotPasswordSubmit,
    formState: { errors: forgotPasswordErrors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await login(data.username, data.password, "en");

      if (response) {
        setErrorMessage(response);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      setErrorMessage("Invalid Email or Password");
    }

    setLoading(false);
  };

  const handleForgotPassword = async (data) => {
    setForgotPasswordMessage("");

    try {
      const response = await fetch(
        "https://backendbatd.clinstitute.co.uk/api/customer/password/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            locale: "en",
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setForgotPasswordMessage("Password reset email sent successfully.");
      } else {
        setForgotPasswordMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setForgotPasswordMessage("Failed to send reset email.");
    }
  };

  return (
    <Card className="md:p-6 p-3 shadow-lg w-[400px] -mt-10">
      <CardContent>
        <h1 className="text-xl font-semibold text-center text-gray-700">
          Welcome Back!
        </h1>
        <p className="mt-2 text-sm text-gray-500 text-center">
          Login to access your account.
        </p>

        <form className="flex flex-col gap-2 mt-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Username Input */}
          <div>
            <Label className="text-sm">User Name</Label>
            <Input
              type="text"
              {...register("username")}
              placeholder="Enter your Email"
              className="text-sm text-primary"
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <Label className="text-sm">Password</Label>
            <Input
              type="password"
              {...register("password")}
              placeholder="Enter your Password"
              className="text-sm text-primary"

            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between text-xs text-gray-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" />
              Remember me
            </label>
            <button
              type="button"
              className="hover:text-primary"
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={loading} className="mt-4 text-white">
            {loading ? "Logging in..." : "Login"}
          </Button>

          {/* Display Error Message Below Form */}
          {errorMessage && (
            <p className="text-red-500 text-xs text-start mt-3">
              {errorMessage}
            </p>
          )}
        </form>
      </CardContent>

      {/* Forgot Password Dialog */}
      <Dialog open={showForgotPassword} onOpenChange={setShowForgotPassword}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Forgot Password</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleForgotPasswordSubmit(handleForgotPassword)}>
            {/* Email Input */}
            <div>
              <Label className="text-sm">Enter your email</Label>
              <Input
                type="email"
                {...registerForgotPassword("email")}
                placeholder="Your Email"
                className="text-primary"
              />
              {forgotPasswordErrors.email && (
                <p className="text-red-500 text-xs">
                  {forgotPasswordErrors.email.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="mt-4 text-white w-full">
              Confirm
            </Button>

            {/* Display Success/Error Message */}
            {forgotPasswordMessage && (
              <p className="text-center mt-2 text-sm text-primary">
                {forgotPasswordMessage}
              </p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default AuthForm;
