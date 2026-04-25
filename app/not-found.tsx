import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center px-5">
      <p className="mb-3 text-sm font-semibold uppercase text-teal">404</p>
      <h1 className="text-4xl font-semibold text-ink">Page not found</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted">
        This route is not part of the rebuilt portfolio.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex h-11 items-center rounded-md bg-ink px-5 text-sm font-semibold text-white"
      >
        Back home
      </Link>
    </main>
  )
}
