import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(99,102,241,0.15)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-white"
        >
          Build your site like a motion designer
        </motion.h2>
        <p className="text-slate-300 mt-3">Type what you want. We generate layered scenes, interactions, and responsive layouts that feel alive.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/test" className="inline-flex items-center rounded-lg bg-indigo-500/90 hover:bg-indigo-500 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-indigo-500/20 transition">Check Backend</a>
          <a href="#hero" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm font-semibold ring-1 ring-white/20 transition">Back to top</a>
        </div>
      </div>
    </section>
  )
}
