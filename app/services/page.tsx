import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Building,
  CheckCircle,
  FileText,
  Globe,
  Handshake,
  LineChart,
  ListChecks,
  Presentation,
  TrendingUp,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Comprehensive IPO Advisory Services
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Expert guidance through every phase of the IPO journey, tailored to your company's unique needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Core Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Full-Service IPO Advisory</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive suite of services to guide your company through the entire IPO process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <ListChecks className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>IPO Readiness Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Comprehensive financial statement evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Corporate governance structure assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Operational readiness review</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Gap analysis and remediation planning</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Exchange Selection & Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>NASDAQ vs. NYSE comparative analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Listing requirements evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Exchange relationship management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Strategic positioning recommendations</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>SEC Filing Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>S-1 registration statement development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Financial disclosure optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Risk factor analysis and presentation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>SEC comment response management</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Valuation & Pricing Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Comprehensive valuation analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Peer group benchmarking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Pricing strategy development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Share allocation recommendations</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Presentation className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Investor Roadshow Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Compelling investor presentation development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Management team coaching</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Q&A preparation and rehearsal</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Roadshow logistics coordination</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Post-IPO Investor Relations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>IR program development and implementation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Earnings release and call preparation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Analyst and investor meeting coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Shareholder communication strategy</span>
                      </li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Specialized Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Advisory Offerings</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Specialized services to address specific needs throughout your IPO journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex items-start space-x-4">
                <Handshake className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Underwriter Selection & Management</h3>
                  <p className="mt-2 text-gray-500">
                    Strategic guidance on selecting the optimal underwriting team, negotiating favorable terms, and
                    managing the banking relationship throughout the IPO process.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Board & Governance Optimization</h3>
                  <p className="mt-2 text-gray-500">
                    Assessment and enhancement of board composition, committee structures, and governance policies to
                    meet public company requirements and investor expectations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <LineChart className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Financial Reporting Readiness</h3>
                  <p className="mt-2 text-gray-500">
                    Preparation for the rigorous financial reporting demands of a public company, including SOX
                    compliance, audit committee protocols, and disclosure controls.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Growth Strategy Development</h3>
                  <p className="mt-2 text-gray-500">
                    Creation of a compelling growth narrative and strategic roadmap to attract investors and position
                    your company for long-term success in the public markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="contact">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Contact</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Discuss Your IPO?</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Schedule a confidential consultation to discuss your company's IPO plans and how my advisory
                    services can help you achieve a successful public offering.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Phone</p>
                      <p className="text-sm text-gray-500">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Email</p>
                      <p className="text-sm text-gray-500">contact@ipoadvisor.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Location</p>
                      <p className="text-sm text-gray-500">New York, NY</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md space-y-2 p-4 sm:p-6 lg:p-8 bg-gray-50 rounded-xl">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

