export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-foreground text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2 border-white/10 p-6 rounded-xl bg-foreground/80 hover:bg-foreground/90 transition-all">
            <div className="text-4xl font-bold text-accent">15+</div>
            <div className="text-sm font-medium text-white/70">Years of Experience</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border-white/10 p-6 rounded-xl bg-foreground/80 hover:bg-foreground/90 transition-all">
            <div className="text-4xl font-bold text-accent">$5B+</div>
            <div className="text-sm font-medium text-white/70">Capital Raised</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border-white/10 p-6 rounded-xl bg-foreground/80 hover:bg-foreground/90 transition-all">
            <div className="text-4xl font-bold text-accent">25+</div>
            <div className="text-sm font-medium text-white/70">Successful IPOs</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border-white/10 p-6 rounded-xl bg-foreground/80 hover:bg-foreground/90 transition-all">
            <div className="text-4xl font-bold text-accent">100%</div>
            <div className="text-sm font-medium text-white/70">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

