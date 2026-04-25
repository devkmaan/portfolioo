import {
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  GitBranch
} from 'lucide-react'
import { siteConfig } from '@/content/site'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
        aria-label="Primary navigation"
      >
        <a href="#top" className="focus-ring rounded-sm">
          <span className="block text-sm font-semibold uppercase text-muted">
            Dev Kumar Maan
          </span>
          <span className="block text-xs text-teal">Backend systems + AI</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-muted transition hover:bg-panel-strong hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-panel text-ink transition hover:border-teal hover:text-teal"
          >
            <GitBranch size={18} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="focus-ring hidden h-10 w-10 items-center justify-center rounded-md border border-line bg-panel text-ink transition hover:border-teal hover:text-teal sm:inline-flex"
          >
            <BriefcaseBusiness size={18} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open resume"
            className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-action px-3 text-sm font-semibold text-action-text transition hover:bg-action-hover"
          >
            <FileText size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Resume</span>
            <ExternalLink
              className="hidden sm:block"
              size={14}
              aria-hidden="true"
            />
          </a>
        </div>
      </nav>
    </header>
  )
}
