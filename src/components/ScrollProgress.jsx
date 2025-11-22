import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrolled)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-[60] pointer-events-none">
      <div className="h-1 bg-white/10 backdrop-blur-sm" />
      <div
        className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
