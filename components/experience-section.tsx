import { Building2, MapPin } from 'lucide-react'
import { experience } from '@/content/site'
import { SectionHeading } from './section-heading'

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-line bg-panel py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title="Production engineering in payments infrastructure"
          description="Recent work spans distributed merchant platforms, POS lifecycle systems, telemetry ingestion, production debugging, reliability improvements, and ownership at payment scale."
        />

        <div className="grid gap-5">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-lg border border-line bg-paper p-6"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
                    <Building2 size={16} aria-hidden="true" />
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">
                    {item.role}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-muted">
                    {item.summary}
                  </p>
                </div>
                <div className="shrink-0 rounded-md border border-line bg-panel px-4 py-3 text-sm text-muted">
                  <p className="font-semibold text-ink">{item.period}</p>
                  <p className="mt-1 inline-flex items-center gap-1">
                    <MapPin size={14} aria-hidden="true" />
                    {item.location}
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 lg:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="border-l-2 border-teal pl-4 text-sm leading-6 text-muted"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
