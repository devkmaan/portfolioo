import Image from 'next/image'
import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import { impactStats, siteConfig } from '@/content/site'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-28 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:pt-32"
    >
      <div>
        <p className="inline-flex rounded-md border border-line bg-panel px-3 py-2 text-sm font-semibold text-teal">
          {siteConfig.role}
        </p>
        <h1 className="text-balance mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] text-ink sm:text-6xl sm:leading-[1.03]">
          {siteConfig.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {siteConfig.intro}
        </p>
        <p className="mt-5 inline-flex max-w-2xl rounded-md border border-line bg-panel px-3 py-2 text-sm font-semibold leading-6 text-muted">
          {siteConfig.globalAvailability}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-action px-5 text-sm font-semibold text-action-text transition hover:bg-action-hover"
          >
            <FileText size={18} aria-hidden="true" />
            View resume
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-line bg-panel px-5 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal"
          >
            <Mail size={18} aria-hidden="true" />
            Contact Dev
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {impactStats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-lg border border-line bg-panel p-5"
            >
              <div className="text-3xl font-semibold text-ink">
                {stat.value}
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <aside className="rounded-lg border border-line bg-panel p-4 shadow-[0_20px_80px_rgba(18,23,17,0.08)]">
        <div className="grid gap-4 md:grid-cols-[0.86fr_1.14fr] lg:grid-cols-1">
          <div className="overflow-hidden rounded-lg border border-line bg-panel-strong">
            <Image
              src="/images/me.jpg"
              alt="Dev Kumar Maan"
              width={560}
              height={560}
              priority
              className="aspect-[4/3] h-full w-full object-cover md:aspect-square"
            />
          </div>

          <div className="rounded-lg border border-line bg-paper p-5">
            <p className="text-xs font-semibold uppercase text-muted">
              Current focus
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">
              Backend systems at production scale
            </h2>
            <div className="mt-5 space-y-3">
              {[
                ['Merchant lifecycle', 'Reactive Spring Boot, REST, configs'],
                ['Telemetry ingestion', 'Go, gRPC, Protobuf, OpenTelemetry'],
                ['AI safety products', 'MiniLM, FastAPI, local GenAI']
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-4 border-t border-line pt-3"
                >
                  <span className="text-sm font-semibold text-ink">
                    {label}
                  </span>
                  <span className="max-w-[15rem] text-right text-sm leading-6 text-muted">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}
