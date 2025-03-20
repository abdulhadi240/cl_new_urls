import Image from "next/image";
import React from "react";
import Design from "./homepage1/components/Design";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
// Define metadata for the page
export const metadata = {
  title: '404 Page Not Found',
  description: 'Oops! The page you are looking for does not exist.',
  robots: 'noindex, follow',
};

export default function NotFound() {
  return (
    <><Design secondary /><main className="flex h-screen overflow-hidden flex-col items-center justify-center p-4 text-center bg-[#12283E] text-white">
      <div className="max-w-md space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Oops! Page not found</h1>
          <p className="text-gray-300">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="bg-white text-[#12283E] hover:bg-gray-100">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="border-white text-black hover:bg-secondary hover:text-white">
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </main></>
  )
}

 

