import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function LayersShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12])
  const translate = useTransform(scrollYProgress, [0, 1], [0, -120])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  return (
    <section id="layers" ref={ref} className="relative overflow-hidden bg-slate-950 py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Multi‑layer scenes</h2>
            <p className="text-slate-300 mt-4 max-w-xl">
              Compose depth with parallax planes, translucent panels, and glow fields. Every layer blends into a cohesive, cinematic scroll.
            </p>
          </div>
          <div className="relative h-[420px]">
            <motion.div style={{ rotate, y: translate, scale }} className="absolute inset-0 [perspective:1200px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/40 to-indigo-500/40 blur-2xl" />

              <div className="relative grid grid-cols-3 gap-4 p-6">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="aspect-square rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-lg shadow-fuchsia-500/10"
                  >
                    <div className="w-full h-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(168,85,247,0.15),transparent)] rounded-xl" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
