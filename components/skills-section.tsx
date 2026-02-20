"use client"

import { useEffect, useRef, useState } from "react"

interface SkillBarProps {
  name: string
  level: number
  color?: "primary" | "secondary"
}

function SkillBar({ name, level, color = "primary" }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const bgClass = color === "primary" ? "bg-primary" : "bg-secondary"

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full rounded-full ${bgClass} transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  )
}

const skillGroups = [
  {
    title: "ML & Data Science",
    color: "primary" as const,
    skills: [
      { name: "Python", level: 96 },
      { name: "PyTorch & Scikit-learn", level: 92 },
      { name: "Polars & Pandas", level: 94 },
      { name: "Causal Inference & Stats", level: 88 },
    ],
  },
  {
    title: "Backend & Cloud",
    color: "secondary" as const,
    skills: [
      { name: "FastAPI & Django", level: 93 },
      { name: "Apache Spark & Databricks", level: 90 },
      { name: "AWS & Docker", level: 88 },
      { name: "PostgreSQL & Weaviate", level: 91 },
    ],
  },
  {
    title: "Engineering & Domain",
    color: "primary" as const,
    skills: [
      { name: "Energy Economics", level: 92 },
      { name: "ETL & Data Pipelines", level: 94 },
      { name: "REST APIs & Microservices", level: 91 },
      { name: "Git & CI/CD", level: 89 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Tech Stack
          </span>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Deep specialization in Python/ML with strong engineering fundamentals
            spanning backend systems, cloud infrastructure, and energy domain expertise.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card flex flex-col gap-6 rounded-xl p-6 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h3>
              <div className="flex flex-col gap-5">
                {group.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="mt-12 flex flex-wrap items-center gap-2">
          {[
            "Python",
            "PyTorch",
            "FastAPI",
            "Polars",
            "Spark",
            "Databricks",
            "AWS",
            "Weaviate",
            "PostgreSQL",
            "Django",
            "Docker",
            "Scikit-learn",
            "NumPy",
            "SQLAlchemy",
            "Rust",
            "R",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-muted/50 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
