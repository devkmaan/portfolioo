import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  ExternalLink,
  GitBranch,
  LockKeyhole,
} from "lucide-react"
import {
  archiveProjects,
  featuredProjects,
  type CodeStatus,
  type ProjectEntry,
} from "@/content/projects"
import { siteConfig } from "@/content/site"
import { ProjectVisual } from "./project-visual"
import { SectionHeading } from "./section-heading"

function CodeCta({ status, url }: { status: CodeStatus; url?: string }) {
  if (status === "available" && url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-line bg-panel px-3 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal"
      >
        <GitBranch size={16} aria-hidden="true" />
        Code
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    )
  }

  if (status === "coming-soon") {
    return (
      <span className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-panel-strong px-3 text-sm font-semibold text-muted">
        <Clock3 size={16} aria-hidden="true" />
        Code coming soon
      </span>
    )
  }

  return (
    <span className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-panel-strong px-3 text-sm font-semibold text-muted">
      <LockKeyhole size={16} aria-hidden="true" />
      Private code
    </span>
  )
}

function FeaturedProjectCard({ project }: { project: ProjectEntry }) {
  const visibleTech = project.tech.slice(0, 7)
  const remainingTech = project.tech.length - visibleTech.length

  return (
    <article
      data-testid="featured-project-card"
      className="flex h-full flex-col rounded-lg border border-line bg-panel p-5"
    >
      <ProjectVisual project={project} />

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-sm bg-panel-strong px-2 py-1 text-xs font-semibold uppercase text-teal">
            {project.category}
          </span>
          {project.slug === "scamshield" ? (
            <span className="rounded-sm bg-action px-2 py-1 text-xs font-semibold uppercase text-action-text">
              New flagship
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-xl font-semibold text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>

        <ul className="mt-5 space-y-3">
          {project.impact.slice(0, 2).map(item => (
            <li
              key={item}
              className="border-l-2 border-teal pl-4 text-sm leading-6 text-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleTech.map(tech => (
            <span
              key={tech}
              className="rounded-sm border border-line bg-paper px-2 py-1 text-xs font-semibold text-muted"
            >
              {tech}
            </span>
          ))}
          {remainingTech > 0 ? (
            <span className="rounded-sm border border-line bg-paper px-2 py-1 text-xs font-semibold text-muted">
              +{remainingTech}
            </span>
          ) : null}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <CodeCta status={project.codeStatus} url={project.githubUrl} />
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-action px-3 text-sm font-semibold text-action-text transition hover:bg-action-hover"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

const archiveCategories = Array.from(
  new Set(archiveProjects.map(project => project.category)),
)

const archiveGroups = archiveCategories.map(category => ({
  category,
  projects: archiveProjects.filter(project => project.category === category),
}))

function archiveHeadingId(category: string) {
  return `archive-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
}

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-line bg-paper py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Featured fintech, AI, and applied ML projects"
            description={`${featuredProjects.length} featured projects show systems thinking, product ownership, applied AI, and practical full-stack execution. ${archiveProjects.length} additional public repos are grouped below.`}
          />
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mb-8 inline-flex h-11 items-center justify-center gap-2 rounded-md border border-line bg-panel px-4 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal lg:shrink-0"
          >
            <GitBranch size={17} aria-hidden="true" />
            All GitHub repos
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map(project => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-ink">Project archive</h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            Additional public repositories are grouped by theme for a quick scan
            of product, AI/ML, frontend, and exploratory work.
          </p>

          <div className="mt-6 grid gap-4">
            {archiveGroups.map(({ category, projects }) => (
              <details
                key={category}
                data-testid="archive-group"
                className="group rounded-lg border border-line bg-panel"
              >
                <summary className="archive-summary focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg p-5">
                  <span>
                    <span className="block text-lg font-semibold text-ink">
                      {category}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-muted">
                      {projects.length} repos
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-2 text-sm font-semibold text-muted">
                    <span className="group-open:hidden">Expand</span>
                    <span className="hidden group-open:inline">Collapse</span>
                    <ChevronDown
                      className="transition group-open:rotate-180"
                      size={16}
                      aria-hidden="true"
                    />
                  </span>
                </summary>

                <section
                  aria-labelledby={archiveHeadingId(category)}
                  className="border-t border-line p-5"
                >
                  <h4 id={archiveHeadingId(category)} className="sr-only">
                    {category}
                  </h4>

                  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map(project => (
                      <article
                        key={project.slug}
                        className="rounded-lg border border-line bg-paper p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h5 className="text-base font-semibold text-ink">
                            {project.title}
                          </h5>
                          {project.githubUrl ? (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${project.title} code`}
                              className="focus-ring inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line bg-panel text-muted transition hover:border-teal hover:text-teal"
                            >
                              <GitBranch size={15} aria-hidden="true" />
                            </a>
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted">
                          {project.summary}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tech.slice(0, 4).map(tech => (
                            <span
                              key={tech}
                              className="rounded-sm bg-panel px-2 py-1 text-xs font-semibold text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
