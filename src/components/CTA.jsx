import { Download, Apple, Chrome } from 'lucide-react'

export default function CTA() {
  return (
    <section id="download" className="relative py-20 bg-slate-950">
      <div className="absolute inset-x-0 -top-20 -z-0">
        <div className="mx-auto max-w-3xl h-40 bg-gradient-to-r from-fuchsia-500/30 via-cyan-500/30 to-blue-500/30 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-8 md:p-12 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Own your crypto with confidence</h3>
              <p className="mt-3 text-blue-200/80">Download Nebula Wallet and take back control. Your keys never leave your device.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-3 font-semibold shadow">
                <Apple className="h-5 w-5" />
                App Store
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-semibold border border-white/20">
                <Chrome className="h-5 w-5" />
                Chrome Extension
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
