import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="border px-4 py-2 rounded text-sm
      dark:border-white dark:text-white"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}
