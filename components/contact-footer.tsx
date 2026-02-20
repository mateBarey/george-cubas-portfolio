import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

export function ContactFooter() {
  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* CTA Block */}
        <div className="glass-card glow-purple relative overflow-hidden rounded-2xl p-10 text-center sm:p-16">
          {/* Background glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-secondary/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Open for Opportunities
            </span>
            <h2 className="max-w-xl font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {"Let's build something impactful together"}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Full-Time / Contract / Consulting — available for ML engineering,
              data pipeline architecture, and AI product development.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="mailto:georgeraulc@email.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/george-cubas-55113a29/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-muted"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

            {/* Contact details */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="mailto:georgeraulc@email.com"
                className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Mail size={14} />
                georgeraulc@email.com
              </a>
              <a
                href="https://github.com/mateBarey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Github size={14} />
                github.com/mateBarey
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            George Cubas {new Date().getFullYear()}. Built with Next.js &
            Tailwind.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/george-cubas-55113a29/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/mateBarey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:georgeraulc@email.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}
