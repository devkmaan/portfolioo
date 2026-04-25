type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light'
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div className="mb-8 max-w-3xl">
      <p className={`text-sm font-semibold uppercase ${isDark ? 'text-lime' : 'text-teal'}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold sm:text-4xl ${isDark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 ${isDark ? 'text-white/70' : 'text-muted'}`}
      >
        {description}
      </p>
    </div>
  )
}
