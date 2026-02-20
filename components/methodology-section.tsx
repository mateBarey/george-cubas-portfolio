import { Search, Layers, Zap, RefreshCw } from "lucide-react"

const methods = [
  {
    icon: <Search size={20} />,
    title: "Discovery & Analysis",
    description:
      "Understanding business objectives and data landscapes before writing a single line of code.",
  },
  {
    icon: <Layers size={20} />,
    title: "Scalable Architecture",
    description:
      "Building modular, maintainable ML pipelines and APIs designed to handle production traffic.",
  },
  {
    icon: <Zap size={20} />,
    title: "Rapid Iteration",
    description:
      "Fast experiment cycles with clear metrics, moving from prototype to production efficiently.",
  },
  {
    icon: <RefreshCw size={20} />,
    title: "Continuous Optimization",
    description:
      "Performance tuning, model retraining, and infrastructure improvements as standard practice.",
  },
]

export function MethodologySection() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Approach
          </span>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Work Methodology
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            How I approach building ML systems that deliver measurable business
            impact.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method, i) => (
            <div
              key={method.title}
              className="glass-card group flex flex-col gap-4 rounded-xl p-6 transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                {method.icon}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                {method.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
