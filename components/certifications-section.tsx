import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "IBM AI Engineering Professional",
    issuer: "IBM via Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XJ95RYV4Z5TC",
  },
  {
    title: "Google Machine Learning",
    issuer: "Google via Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/P57BYGZPYANV",
  },
  {
    title: "Google Reinforcement Learning",
    issuer: "Google via Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/AGP9TE8AFPSC",
  },
  {
    title: "Databricks Generative AI",
    issuer: "Databricks",
    link: "https://credentials.databricks.com/3177ab6f-1676-4b64-ba17-ef057a259eaf#acc.0jAGLJBc",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Credentials
          </span>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Certifications
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award size={20} />
              </div>
              <div className="flex flex-1 flex-col gap-0.5">
                <span className="text-sm font-bold text-foreground">
                  {cert.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {cert.issuer}
                </span>
              </div>
              <ExternalLink
                size={14}
                className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
