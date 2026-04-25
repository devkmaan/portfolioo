'use client'

import { Moon, Sun } from 'lucide-react'
import { useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

const storageKey = 'portfolio-theme'
const themeColors: Record<Theme, string> = {
  light: '#f5f7ef',
  dark: '#0e1411'
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function getStoredTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(storageKey)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', themeColors[theme])
}

function getThemeSnapshot(): Theme {
  if (typeof document === 'undefined') {
    return 'light'
  }

  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const onSystemChange = () => {
    if (!getStoredTheme()) {
      applyTheme(getSystemTheme())
      onStoreChange()
    }
  }

  window.addEventListener('portfolio-theme-change', onStoreChange)
  mediaQuery.addEventListener('change', onSystemChange)

  return () => {
    window.removeEventListener('portfolio-theme-change', onStoreChange)
    mediaQuery.removeEventListener('change', onSystemChange)
  }
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getThemeSnapshot,
    () => 'light'
  )

  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
  const Icon = theme === 'dark' ? Sun : Moon
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        window.localStorage.setItem(storageKey, nextTheme)
        applyTheme(nextTheme)
        window.dispatchEvent(new Event('portfolio-theme-change'))
      }}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-panel text-ink transition hover:border-teal hover:text-teal"
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  )
}
