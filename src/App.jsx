import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="py-10 text-center text-blue-200/60 text-sm">
        © 2025 Nebula Wallet. Non‑custodial and open source.
      </footer>
    </div>
  )
}

export default App
