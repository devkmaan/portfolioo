import { skillGroups } from '@/content/site'
import { SectionHeading } from './section-heading'

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-line bg-panel py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="A backend-first toolkit with AI and product range"
          description="Core tools across distributed systems, payment platforms, Go telemetry, Java microservices, data infrastructure, observability, and practical AI/full-stack product work."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-lg border border-line bg-paper p-5"
              aria-labelledby={`skill-${group.title}`}
            >
              <h3
                id={`skill-${group.title}`}
                className="text-xl font-semibold text-ink"
              >
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-line bg-panel px-3 py-2 text-sm font-semibold text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
