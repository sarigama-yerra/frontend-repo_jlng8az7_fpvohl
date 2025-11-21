import { motion } from 'framer-motion'
import { Cpu, Layers, Gauge, SlidersHorizontal } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Anime.js & Typed.js',
    desc: 'Use battle‑tested animation libraries for micro‑interactions and kinetic type.',
  },
  {
    icon: Layers,
    title: 'Layered Composition',
    desc: 'Stack multiple components with depth cues for an immersive, cinematic feel.',
  },
  {
    icon: Gauge,
    title: 'Optimized 60fps',
    desc: 'GPU‑accelerated transforms and virtualized draws keep motion silky smooth.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Live Controls',
    desc: 'Tweak timing, easing, and intensity in real‑time via an interactive panel.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(168,85,247,0.15)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Technical Highlights</h2>
        <p className="text-slate-300 max-w-2xl mt-3">Built for motion. Designed to scale. Every interaction is tuned for clarity and speed.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition shadow-lg shadow-fuchsia-500/5"
            >
              <div className="w-11 h-11 rounded-lg bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-slate-300/90 text-sm mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
