import { ShieldCheck, KeyRound, Fingerprint, Bug, FileCheck2 } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Defense-in-depth',
    desc: 'Multiple layers of protection—from secure key storage to runtime hardening—reduce the blast radius of any single failure.'
  },
  {
    icon: KeyRound,
    title: 'Non-custodial by default',
    desc: 'Keys are generated and stored on-device. We never see, transmit, or store your seed phrase. You are in full control.'
  },
  {
    icon: Fingerprint,
    title: 'Biometric + hardware keys',
    desc: 'Support for Face/Touch ID and FIDO2 hardware security keys for transaction approval and account unlock.'
  },
  {
    icon: Bug,
    title: 'Open-source + audits',
    desc: 'Transparent codebase with independent security audits and a public vulnerability disclosure program.'
  },
  {
    icon: FileCheck2,
    title: 'Compliance readiness',
    desc: 'Built with global standards in mind to support regional requirements without compromising self‑custody.'
  }
]

export default function Security() {
  return (
    <section id="security" className="relative py-28 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Security, transparently engineered</h2>
          <p className="mt-3 text-blue-200/80 max-w-3xl mx-auto">Nebula Wallet is designed with a clear mandate: protect user funds and privacy without compromise. Our security model is public, testable, and continually improved with community input.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-blue-200/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
