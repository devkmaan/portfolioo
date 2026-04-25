import { Award, BookOpenCheck } from 'lucide-react'
import { achievements, publications } from '@/content/site'
import { SectionHeading } from './section-heading'

export function AchievementsSection() {
  return (
    <section className="border-t border-line bg-paper py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Signals"
          title="Competitive programming, ML selection, and publication proof"
          description="A compact set of academic, competitive, and research signals that support the engineering work."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <section
            className="rounded-lg border border-line bg-panel p-5"
            aria-labelledby="achievements-title"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-action text-action-text">
                <Award size={19} aria-hidden="true" />
              </span>
              <h3 id="achievements-title" className="text-xl font-semibold">
                Achievements
              </h3>
            </div>

            <ul className="mt-5 space-y-3">
              {achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="border-l-2 border-gold pl-4 text-sm leading-6 text-muted"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </section>

          <section
            className="rounded-lg border border-line bg-panel p-5"
            aria-labelledby="publication-title"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-teal text-white">
                <BookOpenCheck size={19} aria-hidden="true" />
              </span>
              <h3 id="publication-title" className="text-xl font-semibold">
                Publication
              </h3>
            </div>

            {publications.map((publication) => (
              <article key={publication.title} className="mt-5">
                <p className="text-sm font-semibold uppercase text-teal">
                  {publication.venue}
                </p>
                <h4 className="mt-2 text-2xl font-semibold text-ink">
                  {publication.title}
                </h4>
                <p className="mt-3 text-sm font-semibold text-muted">
                  {publication.authors}
                </p>
                <p className="mt-4 text-base leading-7 text-muted">
                  {publication.summary}
                </p>
              </article>
            ))}
          </section>
        </div>
      </div>
    </section>
  )
}
