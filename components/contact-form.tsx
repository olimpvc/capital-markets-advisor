"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    // Updated phone number validation
    const phone = formData.get('entry.1592688629') as string;
    const phoneRegex = /^[0-9+\-.\s()]+$/;

    if (!phoneRegex.test(phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number using numbers.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    console.log('Phone:', phone);

    // Proceed with form submission
    try {
      // Create a URL with the form data
      const url = new URL('https://docs.google.com/forms/u/2/d/11qO_XyP929--QbLP9rXj9zzDPDlinZ9Nd051klkJlj8/formResponse')
      
      // Add all form fields to the URL
      formData.forEach((value, key) => {
        url.searchParams.append(key, value as string)
      })

      // Log the form data for debugging
      console.log('Form data:', Object.fromEntries(formData))
      console.log('Final URL:', url.toString())

      // Submit the form using fetch
      const response = await fetch(url.toString(), {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      // Show success message
      toast({
        title: "Form submitted",
        description: "Thank you for your inquiry. We'll be in touch shortly.",
      })

      // Reset the form
      form.reset()
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form 
      ref={formRef} 
      onSubmit={handleSubmit} 
      className="grid gap-6"
    >
      <div className="grid gap-3">
        <Label htmlFor="name-input" className="text-foreground">
          Name
        </Label>
        <Input 
          id="name-input"
          name="entry.71619845"
          placeholder="John Smith" 
          required 
          className="border-border focus:border-accent" 
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="company-input" className="text-foreground">
          Company
        </Label>
        <Input 
          id="company-input"
          name="entry.1019817237"
          placeholder="Your Company, Inc." 
          required 
          className="border-border focus:border-accent" 
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email-input" className="text-foreground">
          Email
        </Label>
        <Input
          id="email-input"
          name="entry.720989565"
          type="email"
          placeholder="john@example.com"
          required
          className="border-border focus:border-accent"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="phone-input" className="text-foreground">
          Phone
        </Label>
        <Input 
          id="phone-input"
          name="entry.1592688629"
          type="tel"
          placeholder="+1 (555) 000-0000" 
          className="border-border focus:border-accent" 
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="message-input" className="text-foreground">
          Message
        </Label>
        <Textarea
          id="message-input"
          name="entry.1411207671"
          placeholder="Tell us about your IPO plans and how we can help..."
          className="min-h-[150px] border-border focus:border-accent"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  )
}

