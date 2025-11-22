import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Features from './components/Features'
import Security from './components/Security'
import About from './components/About'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <Security />
      <About />
      <CTA />
      <footer className="py-10 text-center text-blue-200/60 text-sm">
        © 2025 Nebula Wallet. Non‑custodial and open source.
      </footer>
    </div>
  )
}

export default App
