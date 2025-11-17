import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LinkItem = ({ href, children }) => (
    <a
      href={href}
      className="px-4 py-2 text-sm font-medium text-slate-700/90 hover:text-slate-950 transition-colors"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <span className="h-8 w-8 rounded-md bg-gradient-to-tr from-slate-900 to-slate-600" />
          <span className="text-slate-900 font-extrabold tracking-tight text-lg">Flamefolio</span>
        </a>

        <div className="hidden md:flex items-center">
          <LinkItem href="#projects">Projects</LinkItem>
          <LinkItem href="#about">About</LinkItem>
          <LinkItem href="#contact">Contact</LinkItem>
          <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-800 transition-colors">Let’s talk</a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 bg-white/70 backdrop-blur hover:bg-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col">
            <LinkItem href="#projects">Projects</LinkItem>
            <LinkItem href="#about">About</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
          </div>
        </div>
      )}
    </header>
  )
}
