import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="about"
      className="noise-bg relative flex min-h-screen flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column: content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
                Available for Work
              </span>
            </div>

            <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              George
              <br />
              <span className="text-primary">Cubas</span>
            </h1>

            <p className="text-lg font-medium text-primary/80">
              Machine Learning Engineer
            </p>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Machine Learning Engineer with 10+ years of combined experience in
              tech and energy. I build scalable AI solutions that drive
              revenue — from oil & gas economics to fintech analytics and
              real estate valuation models.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                United States
              </span>
              <span className="text-border">|</span>
              <span>Python / ML / Energy</span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:georgeraulc@email.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                <Mail size={16} />
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-muted"
              >
                View Projects
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/george-cubas-55113a29/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/mateBarey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://credentials.databricks.com/3177ab6f-1676-4b64-ba17-ef057a259eaf#acc.0jAGLJBc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-all hover:border-secondary/40 hover:text-foreground"
                aria-label="Databricks Certification"
              >
                <ExternalLink size={16} />
                Databricks Cert
              </a>
            </div>
          </div>

          {/* Right column: visual element */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative h-80 w-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="absolute inset-4 rounded-full border border-secondary/15" />
              <div className="absolute inset-8 rounded-full border border-primary/10" />

              {/* Central element */}
              <div className="absolute inset-12 flex items-center justify-center rounded-full bg-primary/5 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-mono text-5xl font-bold text-primary">
                    ML
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    Engineer
                  </span>
                </div>
              </div>

              {/* Floating skill badges */}
              <div className="absolute -right-4 top-8 rounded-lg border border-border bg-card/80 px-3 py-2 text-xs font-medium text-foreground backdrop-blur-sm">
                PyTorch
              </div>
              <div className="absolute -left-4 top-1/3 rounded-lg border border-border bg-card/80 px-3 py-2 text-xs font-medium text-foreground backdrop-blur-sm">
                FastAPI
              </div>
              <div className="absolute -right-8 bottom-1/3 rounded-lg border border-secondary/20 bg-card/80 px-3 py-2 text-xs font-medium text-secondary backdrop-blur-sm">
                AWS
              </div>
              <div className="absolute -left-2 bottom-12 rounded-lg border border-primary/20 bg-card/80 px-3 py-2 text-xs font-medium text-primary backdrop-blur-sm">
                Spark
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
