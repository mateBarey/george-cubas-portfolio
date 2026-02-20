import { ExternalLink, Github, Database, Brain, BarChart3 } from "lucide-react"

const projects = [
  {
    title: "RAG Pipeline",
    subtitle: "Generative AI with Weaviate & Dspy",
    description:
      "A production RAG framework integrating multiple data sources with Weaviate vector DB and Dspy for enriching LLM knowledge bases and enhancing contextual accuracy.",
    role: "Full-Stack ML Developer",
    stack: ["Python", "Weaviate", "Dspy", "Ollama", "FastAPI"],
    impact: "Multi-source retrieval with context-aware generation",
    icon: <Brain size={20} />,
    github: "https://github.com/mateBarey/Rag-GEN-AI",
    accent: "primary",
  },
  {
    title: "Apache Spark Prediction Pipeline",
    subtitle: "IoT Data & Pressure Prediction",
    description:
      "End-to-end Spark pipeline using IoT sensor data for real-time pressure prediction with distributed computing for high-throughput data processing.",
    role: "Data Engineer",
    stack: ["Apache Spark", "Python", "IoT", "Databricks"],
    impact: "Real-time prediction at scale with IoT data",
    icon: <BarChart3 size={20} />,
    github: "https://github.com/mateBarey/Apache-Spark-IOT-Prediction-Pipeline",
    accent: "secondary",
  },
  {
    title: "Reinforcement Learning NN",
    subtitle: "Actor-Critic for CartPole",
    description:
      "An Actor-Critic reinforcement learning algorithm that uses an actor network for optimal policy discovery and a critic network for action probability evaluation to solve the CartPole problem.",
    role: "ML Researcher",
    stack: ["Python", "PyTorch", "OpenAI Gym", "RL"],
    impact: "Convergent policy with optimized reward function",
    icon: <Database size={20} />,
    github: "https://github.com/mateBarey/Reinforcement-Learning",
    accent: "primary",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Selected Work
          </span>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Open-source projects showcasing ML engineering, distributed systems,
            and applied AI research.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isSecondary = project.accent === "secondary"
            return (
              <div
                key={project.title}
                className={`glass-card group flex flex-col gap-5 rounded-xl p-6 transition-all duration-300 ${
                  isSecondary
                    ? "hover:border-secondary/30"
                    : "hover:border-primary/30"
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      isSecondary
                        ? "bg-secondary/10 text-secondary"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {project.icon}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={14} />
                    Source
                    <ExternalLink size={10} />
                  </a>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isSecondary ? "text-secondary/70" : "text-primary/70"
                    }`}
                  >
                    {project.subtitle}
                  </p>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="rounded-lg bg-muted/50 px-4 py-3">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Impact:
                    </span>{" "}
                    {project.impact}
                  </p>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
