import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  GitBranch,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { siteConfig } from "@/content/site"
import { SectionHeading } from "./section-heading"

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "dev-kumar-maan",
    href: siteConfig.linkedinUrl,
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    value: "devkmaan",
    href: siteConfig.githubUrl,
    icon: GitBranch,
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-footer-line bg-footer py-16 text-white"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Open a conversation"
              description="Reach me directly for backend systems, platform, fintech, AI product, or full-stack engineering opportunities across global teams."
              tone="dark"
            />
            <p className="inline-flex items-center gap-2 rounded-md border border-footer-line px-3 py-2 text-sm text-footer-muted">
              <MapPin size={16} aria-hidden="true" />
              {siteConfig.location}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring rounded-lg border border-footer-line bg-footer-panel p-4 transition hover:border-lime"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-black dark:bg-zinc-800 dark:text-white">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="mt-4 block text-sm font-semibold uppercase text-footer-muted">
                  {label}
                </span>
                <span className="mt-1 flex items-center gap-2 text-base font-semibold text-white">
                  {value}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </a>
            ))}

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-lg border border-lime bg-lime p-4 text-accent-text transition hover:bg-white sm:col-span-2"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-footer text-white">
                <FileText size={18} aria-hidden="true" />
              </span>
              <span className="mt-4 block text-sm font-semibold uppercase">
                Current resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
