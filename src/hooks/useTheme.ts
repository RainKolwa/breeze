import { useState, useEffect } from 'react'

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    if (document.documentElement.classList.contains('dark')) {
      return 'dark'
    }
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (storedTheme) return storedTheme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  }
  return 'light'
}

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}

export default useTheme
