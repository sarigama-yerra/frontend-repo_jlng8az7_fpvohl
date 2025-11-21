import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="text-white font-semibold tracking-tight text-lg">VibeBuilder</a>
        <nav className="hidden md:flex items-center gap-8 text-slate-200">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#layers" className="hover:text-white transition">Layers</a>
          <a href="#controls" className="hover:text-white transition">Controls</a>
          <a href="#cta" className="hover:text-white transition">Get Started</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-slate-200">
          <a href="#features" className="block">Features</a>
          <a href="#layers" className="block">Layers</a>
          <a href="#controls" className="block">Controls</a>
          <a href="#cta" className="block">Get Started</a>
        </div>
      )}
    </header>
  )
}
