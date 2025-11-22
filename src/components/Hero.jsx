import Spline from '@splinetool/react-spline'
import { ArrowRight, Lock, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-28 md:py-36 lg:py-44 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-blue-100 backdrop-blur">
              <Zap className="h-3.5 w-3.5" />
              Self‑custody. Multi‑chain. Open source.
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Your keys. Your crypto. Your future.
            </h1>

            <p className="mt-6 text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto">
              A non‑custodial wallet built for speed, security, and total control. Swap, stake, and manage assets across chains with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#download" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-3 font-semibold shadow-xl shadow-cyan-500/20">
                Download for iOS
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-semibold border border-white/20 backdrop-blur hover:bg-white/20 transition">
                Explore features
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-blue-100/80">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                End‑to‑end encryption
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Open‑source audited
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
