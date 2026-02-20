import { Briefcase, TrendingUp, ArrowUpRight } from "lucide-react"

const experiences = [
  {
    title: "Python Developer",
    company: "Sterling Lariat Ventures",
    period: "Mar 2025 - Jun 2025",
    impact: "15% Revenue Increase",
    highlights: [
      "Deployed production-grade FastAPI microservice for Stripe payment processing",
      "Migrated invoice generation from Pandas to Polars for parallelized data pipelines",
      "Built Polars-powered reporting engine for structured monthly financial summaries",
      "Implemented async webhook handlers with PostgreSQL via SQLAlchemy ORM",
    ],
    tags: ["FastAPI", "Polars", "Stripe", "PostgreSQL", "Docker"],
    accent: "primary",
  },
  {
    title: "Python Developer",
    company: "EOG Resources",
    period: "Mar 2024 - Sep 2024",
    impact: "$50M Investment Decisions",
    highlights: [
      "Developed Oil & Gas economic models for cost recovery and profit split analysis",
      "Created DDA functions enhancing cash flow models with Polars parallelization",
      "Implemented NPVI and Profitability Index calculations for accurate cash flow analysis",
      "Designed FastAPI endpoints for advanced scenario sensitivity analysis",
    ],
    tags: ["Polars", "FastAPI", "Energy Economics", "Python"],
    accent: "secondary",
  },
  {
    title: "Python Developer",
    company: "Compbuss",
    period: "Aug 2023 - Present",
    impact: "RAG Systems in Production",
    highlights: [
      "Built RAG system using Dolphin LLaMA with Dspy and Weaviate vector DB",
      "Designed AI services including image classifiers using natural evolution methods",
      "Maintained CI/CD pipelines with test-driven development practices",
    ],
    tags: ["RAG", "Weaviate", "Dspy", "FastAPI", "LLM"],
    accent: "primary",
  },
  {
    title: "Python Developer",
    company: "University of Virginia",
    period: "Mar 2022 - Dec 2022",
    impact: "40% Faster Grant Reporting",
    highlights: [
      "Engineered ETL pipelines for Office of Sponsored Programs using Pandas & SQLAlchemy",
      "Built web crawlers for frontend data quality verification",
      "Leveraged multiprocessing and asyncio for parallelized performance",
    ],
    tags: ["Pandas", "SQLAlchemy", "ETL", "AsyncIO"],
    accent: "secondary",
  },
  {
    title: "Python Developer",
    company: "Kinstone Investment Properties",
    period: "Jul 2019 - Mar 2022",
    impact: "12% Portfolio ROI",
    highlights: [
      "Built ML valuation models using Pandas, NumPy and Scikit-learn",
      "Scraped Freddie Mac & Case Shiller data with BeautifulSoup & Selenium",
      "Applied Monte Carlo Analysis for Levered and Unlevered IRR prediction",
    ],
    tags: ["Scikit-learn", "Monte Carlo", "Selenium", "NumPy"],
    accent: "primary",
  },
  {
    title: "Python Engineer",
    company: "Occidental Petroleum",
    period: "Jan 2017 - Jul 2019",
    impact: "Drilling Risk Analysis",
    highlights: [
      "Built Anti-Collision Risk Analysis app using Django Framework",
      "Created neural network-based document extraction pipeline",
      "Developed ML models for production drawdown using Scikit-learn",
    ],
    tags: ["Django", "Scikit-learn", "ArcGIS", "Python"],
    accent: "secondary",
  },
  {
    title: "Drilling Engineer",
    company: "BP Alaska",
    period: "2013 - 2016",
    impact: "Field Operations",
    highlights: [
      "Managed drilling operations on the North Slope of Alaska",
      "Foundation in energy sector operations and engineering economics",
    ],
    tags: ["Drilling", "Operations", "Energy"],
    accent: "primary",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Career Path
          </span>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Work Experience
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            A decade of building ML solutions across energy, fintech, real
            estate, and enterprise — each role compounding domain expertise with
            engineering depth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent md:left-8 md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => {
              const accentColor =
                exp.accent === "primary" ? "text-primary" : "text-secondary"
              const borderColor =
                exp.accent === "primary"
                  ? "border-primary/20 hover:border-primary/40"
                  : "border-secondary/20 hover:border-secondary/40"

              return (
                <div key={i} className="group relative flex gap-6 md:gap-10">
                  {/* Timeline dot */}
                  <div className="relative z-10 hidden md:block">
                    <div
                      className={`mt-6 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                        exp.accent === "primary"
                          ? "border-primary bg-primary/20"
                          : "border-secondary bg-secondary/20"
                      } transition-all group-hover:scale-125`}
                    >
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${
                          exp.accent === "primary"
                            ? "bg-primary"
                            : "bg-secondary"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`glass-card flex-1 rounded-xl border ${borderColor} p-6 transition-all duration-300`}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Briefcase size={14} className="text-muted-foreground" />
                          <span className="text-sm font-medium text-muted-foreground">
                            {exp.company}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-1 sm:items-end">
                        <span className="font-mono text-xs text-muted-foreground">
                          {exp.period}
                        </span>
                        <span
                          className={`flex items-center gap-1 text-xs font-semibold ${accentColor}`}
                        >
                          <TrendingUp size={12} />
                          {exp.impact}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-4 flex flex-col gap-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <ArrowUpRight
                            size={14}
                            className={`mt-0.5 shrink-0 ${accentColor}`}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
