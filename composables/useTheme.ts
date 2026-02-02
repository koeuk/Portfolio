export const useTheme = () => {
  const isDark = useState('theme', () => false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  const initTheme = () => {
    if (process.client) {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark') {
        isDark.value = true
      }
      updateTheme()
    }
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
