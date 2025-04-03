import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Building, CheckCircle, Globe, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Testimonials } from "@/components/testimonials"
import { StatsSection } from "@/components/stats-section"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-8 md:py-16 lg:py-20 bg-gradient-surface">
          <div className="container px-4 md:px-6">
            <div className="grid gap-0 lg:grid-cols-[1fr_560px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="hero-heading max-w-[800px]">
                    Expert IPO Advisory for{" "}
                    <span className="inline-block">NASDAQ & NYSE Listings</span>
                  </h1>
                  <p className="hero-subtext">
                    Guiding companies through every step of the IPO process with personalized, strategic advisory
                    services.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="border-primary/20 bg-white/50 backdrop-blur-sm text-primary hover:bg-primary/10">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-center">
                <div className="relative w-full max-w-[400px] lg:w-[520px] aspect-square">
                  <Image
                    src="/images/headshot.jpg"
                    fill
                    alt="Professional headshot of the IPO advisor"
                    className="rounded-2xl object-cover shadow-xl"
                    sizes="(max-width: 768px) 400px, 520px"
                    priority
                    quality={100}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 bg-gradient-to-b from-black/[0.01] to-black/[0.075]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatsSection />

        <section className="w-full py-8 md:py-16 bg-white" id="services">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Services
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Full-Service IPO Advisory
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed">
                  Comprehensive guidance through every phase of the IPO journey, from preparation to post-listing
                  support.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-8">
              <Card className="glass-effect border-0 shadow-subtle hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">IPO Readiness Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Comprehensive evaluation of your company's financial, operational, and governance readiness for
                    public markets.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="glass-effect border-0 shadow-subtle hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Exchange Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Strategic guidance on choosing between NASDAQ and NYSE based on your company's profile and
                    objectives.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="glass-effect border-0 shadow-subtle hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Valuation & Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Expert analysis to determine optimal valuation and pricing strategies for your public offering.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="glass-effect border-0 shadow-subtle hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Investor Relations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Development of compelling investor narratives and roadshow preparation to attract the right
                    investors.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="glass-effect border-0 shadow-subtle hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Navigation of SEC requirements and exchange listing standards to ensure full compliance.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="glass-effect border-0 shadow-subtle hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Post-IPO Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Ongoing advisory services to help your company thrive as a public entity and meet market
                    expectations.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-6">
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-primary/20 bg-white/50 backdrop-blur-sm text-primary hover:bg-primary/10">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  The IPO Journey
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed">
                  A strategic roadmap to navigate the complexities of taking your company public.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl pt-8">
              <Tabs defaultValue="preparation" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-muted">
                  <TabsTrigger
                    value="preparation"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Preparation
                  </TabsTrigger>
                  <TabsTrigger
                    value="execution"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Execution
                  </TabsTrigger>
                  <TabsTrigger
                    value="post-ipo"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Post-IPO
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="preparation"
                  className="p-4 bg-white rounded-lg mt-4 shadow-sm border border-border"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Strategic Preparation</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Financial statement preparation and audit readiness</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Corporate governance structure optimization</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Preliminary valuation analysis</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Regulatory compliance assessment</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/preparation-main.jpg"
                        width={400}
                        height={300}
                        alt="IPO Preparation Phase"
                        className="rounded-lg object-cover shadow-md"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="execution" className="p-4 bg-white rounded-lg mt-4 shadow-sm border border-border">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Flawless Execution</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">SEC filing preparation and submission</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Investor roadshow coordination</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Pricing strategy implementation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Underwriter and exchange coordination</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/execution-main.jpg"
                        width={400}
                        height={300}
                        alt="IPO Execution Phase"
                        className="rounded-lg object-cover shadow-md"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="post-ipo" className="p-4 bg-white rounded-lg mt-4 shadow-sm border border-border">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Sustained Success</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Investor relations program development</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Financial reporting and disclosure guidance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Market performance analysis</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Strategic growth planning</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/images/post-ipo-main.jpg"
                        width={400}
                        height={300}
                        alt="Post-IPO Phase"
                        className="rounded-lg object-cover shadow-md"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="w-full py-8 md:py-16 bg-white" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Ready to Go Public?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed">
                  Schedule a consultation to discuss your company's IPO strategy and how I can help guide you through
                  the process.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl pt-8">
              <div className="bg-background p-6 rounded-xl shadow-md border border-border">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

