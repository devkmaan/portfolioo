import {
  BookOpenCheck,
  CalendarDays,
  GraduationCap,
  MapPin,
  Medal
} from 'lucide-react'
import { education } from '@/content/site'
import { SectionHeading } from './section-heading'

export function EducationSection() {
  return (
    <section id="education" className="border-t border-line bg-paper py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Education"
          title="NIT Delhi foundation with AI/ML depth"
          description="A compact academic signal that supports the production backend work without turning the portfolio into a transcript."
        />

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-lg border border-line bg-panel p-6">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
              <GraduationCap size={17} aria-hidden="true" />
              {education.school}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-ink">
              {education.degree}
            </h3>
            <p className="mt-2 text-base font-semibold text-muted">
              {education.minor}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-2 text-sm font-semibold text-ink">
                <CalendarDays size={15} aria-hidden="true" />
                {education.period}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-2 text-sm font-semibold text-muted">
                <MapPin size={15} aria-hidden="true" />
                {education.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-2 text-sm font-semibold text-teal">
                <Medal size={15} aria-hidden="true" />
                {education.gpa}
              </span>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
              {education.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {education.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-sm border border-line bg-paper px-2 py-1 text-xs font-semibold text-muted"
                >
                  {area}
                </span>
              ))}
            </div>
          </article>

          <aside
            className="rounded-lg border border-line bg-panel p-6"
            aria-labelledby="education-signals-title"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-action text-action-text">
                <BookOpenCheck size={19} aria-hidden="true" />
              </span>
              <h3 id="education-signals-title" className="text-xl font-semibold">
                Academic signals
              </h3>
            </div>

            <ul className="mt-5 space-y-3">
              {education.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="border-l-2 border-gold pl-4 text-sm leading-6 text-muted"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
