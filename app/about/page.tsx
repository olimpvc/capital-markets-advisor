import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, BriefcaseBusiness, Calendar, CheckCircle, GraduationCap, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                    About Me
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    With over 25 years of experience in capital markets, I've guided dozens of companies through
                    successful IPOs on NASDAQ and NYSE.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                      Schedule a Meeting
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                      View Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=450"
                  width={550}
                  height={450}
                  alt="Professional headshot of the advisor"
                  className="rounded-lg object-cover shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground">My Background</h2>
                <p className="text-muted-foreground md:text-lg">
                  As a seasoned capital markets advisor, I bring extensive experience in guiding companies through the
                  complex process of going public. My career spans over two decades working with leading investment
                  banks, exchanges, and regulatory bodies.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Prior to establishing my independent advisory practice, I served as a senior executive at several
                  top-tier investment banks, where I led numerous successful IPOs across various sectors including
                  technology, healthcare, consumer goods, and financial services.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  My approach combines deep technical knowledge with strategic insight, ensuring that each client
                  receives personalized guidance tailored to their specific needs and goals. I work closely with
                  management teams to optimize every aspect of the IPO process, from initial preparation to post-listing
                  success.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="border-border hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <GraduationCap className="mr-2 h-5 w-5 text-accent" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <p className="font-medium text-foreground">MBA, Finance</p>
                      <p className="text-sm text-muted-foreground">Harvard Business School</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">BS, Economics</p>
                      <p className="text-sm text-muted-foreground">Wharton School, University of Pennsylvania</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <Award className="mr-2 h-5 w-5 text-accent" />
                      Certifications & Licenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <p className="font-medium text-foreground">Series 79 - Investment Banking Representative</p>
                      <p className="text-sm text-muted-foreground">FINRA</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Series 63 - Uniform Securities Agent</p>
                      <p className="text-sm text-muted-foreground">NASAA</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Chartered Financial Analyst (CFA)</p>
                      <p className="text-sm text-muted-foreground">CFA Institute</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Why Work With Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My unique approach to IPO advisory delivers exceptional results for clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
              <Card className="border-border hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <BriefcaseBusiness className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-foreground">Industry Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Deep understanding of sector-specific market dynamics and investor expectations across technology,
                    healthcare, consumer, and financial industries.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-border hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <Users className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-foreground">Extensive Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Strong relationships with investment banks, institutional investors, analysts, and exchange
                    officials to optimize your IPO positioning.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-border hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <Calendar className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-foreground">End-to-End Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Comprehensive guidance from initial readiness assessment through post-IPO transition, ensuring
                    continuity throughout the process.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-border hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <BookOpen className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-foreground">Regulatory Insight</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Up-to-date knowledge of SEC requirements and exchange listing standards to navigate compliance
                    efficiently.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-border hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <CheckCircle className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-foreground">Proven Track Record</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Successfully guided over 50 companies through IPOs, with a consistent history of meeting or
                    exceeding valuation targets.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-border hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <Award className="h-6 w-6 text-accent mb-2" />
                  <CardTitle className="text-foreground">Personalized Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Tailored advisory services that address your company's unique needs, challenges, and strategic
                    objectives.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

