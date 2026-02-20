"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  suffix?: string
  label: string
}

function Counter({ end, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const start = performance.now()

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-4 py-3">
      <span className="font-sans text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
        {count}
        <span className="text-primary">{suffix}</span>
      </span>
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function StatsBar() {
  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-5xl px-4">
      <div className="glass-card glow-purple flex flex-wrap items-center justify-center rounded-2xl py-4 md:justify-between md:px-8">
        <Counter end={10} suffix="+" label="Years Experience" />
        <div className="stat-divider hidden h-12 md:block" />
        <Counter end={7} suffix="+" label="Years ML/AI" />
        <div className="stat-divider hidden h-12 md:block" />
        <Counter end={50} suffix="M+" label="Investment Decisions" />
        <div className="stat-divider hidden h-12 md:block" />
        <Counter end={8} suffix="+" label="ML Models Shipped" />
      </div>
    </section>
  )
}
