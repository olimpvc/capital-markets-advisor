"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      
      // Google Form submission URL
      const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe19ZzsyuLsyhd0knoHDui3o8vOLv3ooGQ0N60-WxKuL7NEhQ/formResponse'
      
      // Create URL with parameters
      const formUrl = new URL(googleFormUrl)
      formUrl.searchParams.append('entry.71619845', formData.get('name') as string)
      formUrl.searchParams.append('entry.101981237', formData.get('company') as string)
      formUrl.searchParams.append('entry.72098565', formData.get('email') as string)
      formUrl.searchParams.append('entry.159268629', formData.get('phone') as string)
      formUrl.searchParams.append('entry.141120671', formData.get('message') as string)

      // Submit using GET method instead of POST to avoid CORS issues
      await fetch(formUrl.toString(), {
        method: 'GET',
        mode: 'no-cors'
      })

      toast({
        title: "Form submitted",
        description: "Thank you for your inquiry. We'll be in touch shortly.",
      })

      // Reset form
      e.currentTarget.reset()
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
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-3">
        <Label htmlFor="name" className="text-foreground">
          Name
        </Label>
        <Input 
          id="name" 
          name="name"
          placeholder="John Smith" 
          required 
          className="border-border focus:border-accent" 
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="company" className="text-foreground">
          Company
        </Label>
        <Input 
          id="company" 
          name="company"
          placeholder="Your Company, Inc." 
          required 
          className="border-border focus:border-accent" 
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email" className="text-foreground">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="john@example.com"
          type="email"
          required
          className="border-border focus:border-accent"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="phone" className="text-foreground">
          Phone
        </Label>
        <Input 
          id="phone" 
          name="phone"
          placeholder="+1 (555) 000-0000" 
          type="tel" 
          className="border-border focus:border-accent" 
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="message" className="text-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
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

