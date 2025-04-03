import Image from "next/image"
import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-foreground text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground/80 px-3 py-1 text-sm text-white/80">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from companies that have successfully navigated the IPO process with my guidance.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          <Card className="bg-foreground/90 border-white/10 text-white">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-accent mb-4 opacity-70" />
              <p className="mb-4 italic text-white/90">
                "The strategic guidance provided throughout our IPO journey was invaluable. The deep understanding of
                NASDAQ requirements and investor expectations helped us achieve a successful listing that exceeded our
                expectations."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  width={50}
                  height={50}
                  alt="CEO portrait"
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-white/70">CEO, TechInnovate Inc.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-foreground/90 border-white/10 text-white">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-accent mb-4 opacity-70" />
              <p className="mb-4 italic text-white/90">
                "The expertise in navigating the complexities of NYSE listing requirements was exceptional. Our company
                was well-prepared for every step of the process, resulting in a smooth transition to being publicly
                traded."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  width={50}
                  height={50}
                  alt="CFO portrait"
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-white/70">CFO, Global Health Solutions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-foreground/90 border-white/10 text-white">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-accent mb-4 opacity-70" />
              <p className="mb-4 italic text-white/90">
                "The personalized approach to our IPO preparation made all the difference. The advisor's deep
                connections in the capital markets and strategic insights helped us secure ideal investors for our
                long-term growth."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  width={50}
                  height={50}
                  alt="Founder portrait"
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">David Rodriguez</p>
                  <p className="text-sm text-white/70">Founder, Sustainable Energy Corp</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

