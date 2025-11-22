import { useState } from 'react'
import { Menu, X, Shield, Wallet } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/10 dark:bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/10 border border-white/20 shadow-lg">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 flex items-center justify-center shadow-inner">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold leading-tight">Nebula Wallet</p>
                <p className="text-xs text-blue-200/80 -mt-1">Non‑custodial • Multi‑chain</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#security" className="hover:text-white transition">Security</a>
              <a href="#download" className="hover:text-white transition">Download</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#download" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 font-medium shadow hover:opacity-95 transition">
                <Shield className="h-4 w-4" />
                Get the app
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <nav className="flex flex-col gap-2 pt-3 text-blue-100">
                <a href="#features" className="hover:text-white transition" onClick={() => setOpen(false)}>Features</a>
                <a href="#security" className="hover:text-white transition" onClick={() => setOpen(false)}>Security</a>
                <a href="#download" className="hover:text-white transition" onClick={() => setOpen(false)}>Download</a>
                <a href="#download" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 font-medium shadow">
                  <Shield className="h-4 w-4" />
                  Get the app
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
