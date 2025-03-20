"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

const Apply = () => {
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  
  // Form data state
  const [formData, setFormData] = useState({
    job_id: "2",
    name: "",
    email: "",
    contact_number: "",
    resume: null,
  })

  // Other fields (shown but not sent)
  const [extraFields, setExtraFields] = useState({
    currentPosition: "",
    expectedSalary: "",
    coverLetter: "",
  })

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target
    if (["currentPosition", "expectedSalary", "coverLetter"].includes(name)) {
      setExtraFields((prevData) => ({ ...prevData, [name]: value }))
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "file" ? files[0] : value,
      }))
    }
  }

  // Validation for required fields
  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.contact_number
      case 2:
        return formData.resume
      case 3:
        return true
      default:
        return false
    }
  }

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formDataToSend = new FormData()
    formDataToSend.append("job_id", formData.job_id)
    formDataToSend.append("name", formData.name)
    formDataToSend.append("email", formData.email)
    formDataToSend.append("contact_number", formData.contact_number)
    formDataToSend.append("resume", formData.resume)

    try {
      const response = await fetch("https://backendbatd.clinstitute.co.uk/api/job-application", {
        method: "POST",
        headers: {
          "Accept-Language": "en",
        },
        body: formDataToSend,
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "Your application has been sent successfully!",
          variant: "success",
        })

        // Reset Form
        setIsOpen(false)
        setStep(1)
        setFormData({
          job_id: "2",
          name: "",
          email: "",
          contact_number: "",
          resume: null,
        })
        setExtraFields({
          currentPosition: "",
          expectedSalary: "",
          coverLetter: "",
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

  const nextStep = () => {
    if (isStepValid()) {
      setStep(step + 1)
    }
  }

  const prevStep = () => setStep(step - 1)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} className="overflow-hidden">
      <DialogTrigger asChild>
        <Button className="w-full bg-amber-200 hover:bg-amber-300 text-gray-800 my-2">
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary">Job Application</DialogTitle>
          <DialogDescription>Fill out the form below to apply for the position.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <div className="space-y-4 text-primary">
              <div>
                <Label htmlFor="name" className="text-primary">Name</Label>
                <Input id="name" name="name" className="text-primary" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="email" className="text-primary">Email</Label>
                <Input id="email" name="email" className="text-primary" type="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="contact_number" className="text-primary">Contact Number</Label>
                <Input id="contact_number" className="text-primary" name="contact_number" type="tel" value={formData.contact_number} onChange={handleInputChange} required />
              </div>
              <Button type="button" onClick={nextStep} disabled={!isStepValid()} className="w-full text-white bg-primary hover:bg-primary-dark">
                Next
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 text-primary">
              <div>
                <Label htmlFor="resume" className="text-primary">Upload Resume (PDF, DOC)</Label>
                <Input className="text-primary" id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleInputChange} required />
              </div>
              <div className="flex justify-between">
                <Button type="button" onClick={prevStep} className="w-[48%] text-white bg-secondary hover:bg-secondary-dark">
                  Previous
                </Button>
                <Button type="button" onClick={nextStep} disabled={!isStepValid()} className="w-[48%] text-white bg-primary hover:bg-primary-dark">
                  Next
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 overflow-y-hidden text-primary">
              <div>
                <Label htmlFor="currentPosition"  className="text-primary">Current Position</Label>
                <Input id="currentPosition"  className="text-primary" name="currentPosition" value={extraFields.currentPosition} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="expectedSalary" className="text-primary">Expected Salary</Label>
                <Input id="expectedSalary"  className="text-primary" name="expectedSalary" type="text" value={extraFields.expectedSalary} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="coverLetter" className="text-primary">Cover Letter</Label>
                <Textarea id="coverLetter"  className="text-primary h-40" name="coverLetter" value={extraFields.coverLetter} onChange={handleInputChange} placeholder="Tell us why you're a great fit for this position..."  />
              </div>
              <div className="flex justify-between">
                <Button type="button" onClick={prevStep} className="w-[48%] text-white bg-secondary hover:bg-secondary-dark">
                  Previous
                </Button>
                <Button type="submit" disabled={!isStepValid() || loading} className="w-[48%] text-white bg-primary ">
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Apply
