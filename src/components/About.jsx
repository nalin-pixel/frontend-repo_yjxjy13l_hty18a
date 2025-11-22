export default function About() {
  return (
    <section id="about" className="relative py-28 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our purpose and duty</h2>
          <p className="text-blue-200/80 text-lg leading-relaxed mt-4">
            Nebula Wallet exists to restore financial agency on the internet. We believe that ownership should be simple, private, and portable across chains. Our responsibility is to deliver secure, open tools that make self‑custody accessible to everyone—from first‑time users to power traders.
          </p>
          <p className="text-blue-200/80 leading-relaxed mt-4">
            As a non‑custodial platform, we will never hold client assets or seed phrases. Our software is engineered to minimize trust: keys are generated and stored locally, transactions are transparently constructed, and all critical operations are verifiable. When we ship features, we do so with clarity: documented threat models, clear changelogs, and measurable reliability.
          </p>
          <h3 className="text-2xl font-semibold text-white mt-8">What we commit to</h3>
          <ul className="mt-4 space-y-2 text-blue-100/90">
            <li>Security-first development and public audits for meaningful transparency.</li>
            <li>Interoperability across major L1/L2 networks with sensible defaults.</li>
            <li>Human-centered design that favors clarity, accessibility, and speed.</li>
            <li>Open standards, open source, and a community-driven roadmap.</li>
          </ul>
          <p className="text-blue-200/80 leading-relaxed mt-4">
            Our duty is to earn trust through predictable, high‑quality execution. Nebula will remain non‑custodial and user‑controlled—always.
          </p>
        </div>
      </div>
    </section>
  )
}
