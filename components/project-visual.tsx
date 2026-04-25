import Image from 'next/image'
import clsx from 'clsx'
import {
  Activity,
  Bot,
  Camera,
  FileText,
  Landmark,
  ShieldCheck,
  type LucideIcon
} from 'lucide-react'
import type { ReactNode } from 'react'
import type { ProjectEntry, ProjectVisualType } from '@/content/projects'

const visualStyles: Record<
  ProjectVisualType,
  {
    accent: string
    accentText: string
    soft: string
    border: string
    label: string
    Icon: LucideIcon
  }
> = {
  risk: {
    accent: 'bg-teal',
    accentText: 'text-teal',
    soft: 'bg-panel-strong',
    border: 'border-teal',
    label: 'Risk',
    Icon: ShieldCheck
  },
  finance: {
    accent: 'bg-gold',
    accentText: 'text-gold',
    soft: 'bg-panel-strong',
    border: 'border-gold',
    label: 'Flow',
    Icon: Landmark
  },
  editor: {
    accent: 'bg-rose',
    accentText: 'text-rose',
    soft: 'bg-panel-strong',
    border: 'border-rose',
    label: 'CMS',
    Icon: FileText
  },
  rag: {
    accent: 'bg-teal',
    accentText: 'text-teal',
    soft: 'bg-panel-strong',
    border: 'border-teal',
    label: 'RAG',
    Icon: Bot
  },
  vision: {
    accent: 'bg-gold',
    accentText: 'text-gold',
    soft: 'bg-panel-strong',
    border: 'border-gold',
    label: 'CV',
    Icon: Camera
  },
  sentiment: {
    accent: 'bg-lime',
    accentText: 'text-lime',
    soft: 'bg-panel-strong',
    border: 'border-lime',
    label: 'NLP',
    Icon: Activity
  }
}

function VisualFrame({
  project,
  children
}: {
  project: ProjectEntry
  children: ReactNode
}) {
  const visualType = project.visualType ?? 'finance'
  const style = visualStyles[visualType]
  const Icon = style.Icon

  return (
    <div
      className={clsx(
        'relative aspect-[6/5] overflow-hidden rounded-lg border p-4 sm:aspect-[16/10]',
        style.soft,
        style.border
      )}
      aria-label={`${project.title} project preview`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className={clsx('text-xs font-semibold uppercase', style.accentText)}>
            {project.category}
          </p>
          <p className="mt-1 text-sm font-semibold text-ink">
            {project.title}
          </p>
        </div>
        <span
          className={clsx(
            'inline-flex h-8 items-center justify-center gap-1 rounded-md px-2 text-xs font-semibold text-accent-text',
            style.accent
          )}
        >
          <Icon size={15} aria-hidden="true" />
          {style.label}
        </span>
      </div>
      {children}
    </div>
  )
}

function RiskVisual({ project }: { project: ProjectEntry }) {
  return (
    <VisualFrame project={project}>
      <div className="grid grid-cols-[0.7fr_1fr] gap-3">
        <div className="rounded-md border border-line bg-panel p-3">
          <p className="text-xs font-semibold uppercase text-muted">Risk</p>
          <p className="mt-1 text-3xl font-semibold text-ink">87</p>
          <div className="mt-3 h-2 rounded-sm bg-panel-strong">
            <div className="h-2 w-[87%] rounded-sm bg-teal" />
          </div>
        </div>
        <div className="space-y-2">
          {['WhatsApp check', 'UPI hash safe', 'Recovery report'].map(
            (item, index) => (
              <div
                key={item}
                className="rounded-md border border-line bg-panel px-3 py-2"
              >
                <span className="text-xs font-semibold text-ink">
                  {index + 1}. {item}
                </span>
              </div>
            )
          )}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {['UPI', 'Phishing', 'KYC', 'QR', 'Jobs'].map((item) => (
          <span
            key={item}
            className="rounded-sm bg-panel px-2 py-1 text-xs font-semibold text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </VisualFrame>
  )
}

function FinanceVisual({ project }: { project: ProjectEntry }) {
  return (
    <VisualFrame project={project}>
      <div className="grid grid-cols-[1fr_0.8fr] gap-3">
        <div className="rounded-md border border-line bg-panel p-3">
          <p className="text-xs font-semibold uppercase text-muted">Balance</p>
          <p className="mt-1 text-2xl font-semibold text-ink">$24.8k</p>
          <div className="mt-4 flex h-16 items-end gap-1">
            {[38, 58, 42, 74, 65, 88, 72].map((height) => (
              <span
                key={height}
                className="w-full rounded-sm bg-gold"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {['Plaid sync', 'Dwolla transfer', 'SSR auth'].map((item) => (
            <div
              key={item}
              className="rounded-md border border-line bg-panel px-3 py-2"
            >
              <p className="text-xs font-semibold text-ink">{item}</p>
              <div className="mt-2 h-1.5 rounded-sm bg-panel-strong">
                <div className="h-1.5 w-3/4 rounded-sm bg-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  )
}

function EditorVisual({ project }: { project: ProjectEntry }) {
  return (
    <VisualFrame project={project}>
      <div className="grid gap-3">
        <div className="rounded-md border border-line bg-panel p-3">
          <div className="mb-3 flex gap-1">
            <span className="h-2 w-2 rounded-sm bg-rose" />
            <span className="h-2 w-2 rounded-sm bg-gold" />
            <span className="h-2 w-2 rounded-sm bg-teal" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-4/5 rounded-sm bg-rose" />
            <div className="h-2 w-full rounded-sm bg-panel-strong" />
            <div className="h-2 w-2/3 rounded-sm bg-panel-strong" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['Prompt', 'OpenAI', 'Prisma'].map((item) => (
            <div
              key={item}
              className="rounded-md border border-line bg-panel px-2 py-3 text-center text-xs font-semibold text-muted"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  )
}

function RagVisual({ project }: { project: ProjectEntry }) {
  return (
    <VisualFrame project={project}>
      <div className="relative h-[68%] rounded-md border border-line bg-panel p-3">
        <div className="absolute left-4 top-4 rounded-md border border-line bg-panel-strong px-3 py-2 text-xs font-semibold text-ink">
          Query
        </div>
        <div className="absolute left-[40%] top-[38%] rounded-md bg-teal px-3 py-2 text-xs font-semibold text-accent-text">
          Index
        </div>
        <div className="absolute bottom-4 right-4 rounded-md border border-line bg-panel-strong px-3 py-2 text-xs font-semibold text-ink">
          Answer
        </div>
        <div className="absolute left-[28%] top-[30%] h-0.5 w-16 rotate-12 bg-teal" />
        <div className="absolute bottom-[35%] right-[27%] h-0.5 w-16 -rotate-12 bg-teal" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {['RAG', 'Memory', 'Cites'].map((item) => (
          <span
            key={item}
            className="rounded-sm bg-panel px-2 py-1 text-center text-xs font-semibold text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </VisualFrame>
  )
}

function VisionVisual({ project }: { project: ProjectEntry }) {
  return (
    <VisualFrame project={project}>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className={clsx(
              'h-12 rounded-md border bg-panel',
              item === 5 ? 'border-rose' : 'border-line'
            )}
          >
            {item === 5 ? (
              <div className="m-2 h-2 rounded-sm bg-rose" />
            ) : (
              <div className="m-2 h-2 rounded-sm bg-panel-strong" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-md border border-line bg-panel p-3">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-muted">Anomaly signal</span>
          <span className="text-gold">High</span>
        </div>
        <div className="mt-2 h-2 rounded-sm bg-panel-strong">
          <div className="h-2 w-[78%] rounded-sm bg-gold" />
        </div>
      </div>
    </VisualFrame>
  )
}

function SentimentVisual({ project }: { project: ProjectEntry }) {
  return (
    <VisualFrame project={project}>
      <div className="rounded-md border border-line bg-panel p-3">
        <div className="flex h-20 items-end gap-2">
          {[35, 48, 42, 64, 58, 76, 69].map((height) => (
            <span
              key={height}
              className="w-full rounded-sm bg-lime"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {['NLP', 'Privacy', 'Signals'].map((item) => (
          <span
            key={item}
            className="rounded-sm bg-panel px-2 py-1 text-center text-xs font-semibold text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </VisualFrame>
  )
}

export function ProjectVisual({ project }: { project: ProjectEntry }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-panel-strong">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className="object-cover"
        />
      </div>
    )
  }

  switch (project.visualType) {
    case 'risk':
      return <RiskVisual project={project} />
    case 'finance':
      return <FinanceVisual project={project} />
    case 'editor':
      return <EditorVisual project={project} />
    case 'rag':
      return <RagVisual project={project} />
    case 'vision':
      return <VisionVisual project={project} />
    case 'sentiment':
      return <SentimentVisual project={project} />
    default:
      return <FinanceVisual project={project} />
  }
}
