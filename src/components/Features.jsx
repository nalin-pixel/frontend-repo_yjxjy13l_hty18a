import { ShieldCheck, Wallet, Shuffle, Globe2, Cpu, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Wallet,
    title: 'Non‑custodial by design',
    desc: 'Only you control your private keys. Full sovereignty without compromises.'
  },
  {
    icon: Shuffle,
    title: 'Cross‑chain ready',
    desc: 'Swap and manage assets across major L1s and L2s from a single interface.'
  },
  {
    icon: ShieldCheck,
    title: 'Security first',
    desc: 'Biometric unlock, hardware key support, and open-source audits.'
  },
  {
    icon: Globe2,
    title: 'Human‑readable addresses',
    desc: 'Send and receive using ENS and other name services with confidence.'
  },
  {
    icon: Cpu,
    title: 'Gas‑smart',
    desc: 'Automatic fee suggestions and batching to save you time and money.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-x-0 -top-24 -z-0 blur-3xl opacity-30">
        <div className="mx-auto max-w-2xl h-56 sm:h-64 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-fuchsia-500/40 rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to own your crypto</h2>
          <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">A powerful, minimal interface that puts you in control without the complexity.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(56,189,248,0.15), transparent 40%)'}} />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-blue-200/80 text-sm">{f.desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-white text-sm">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
