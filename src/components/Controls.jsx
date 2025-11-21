import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'

export default function Controls() {
  const el = useRef(null)
  const [settings, setSettings] = useState({
    duration: 800,
    easing: 'easeOutQuad',
    intensity: 1,
  })

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Websites that feel like video', 'Immersive. Interactive. Instant.'],
      typeSpeed: 32,
      backSpeed: 12,
      backDelay: 1200,
      smartBackspace: true,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section id="controls" className="relative bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Interactive controls</h2>
            <p className="text-slate-300 mt-4 max-w-xl">Tune motion in real‑time. Every change updates the preview instantly for rapid iteration.</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <label className="text-slate-300">
                <span className="block text-sm mb-2">Duration: {settings.duration}ms</span>
                <input type="range" min="200" max="2000" value={settings.duration}
                  onChange={(e)=>setSettings(s=>({...s, duration:Number(e.target.value)}))}
                  className="w-full"
                />
              </label>
              <label className="text-slate-300">
                <span className="block text-sm mb-2">Intensity: {settings.intensity.toFixed(2)}</span>
                <input type="range" min="0.2" max="2" step="0.01" value={settings.intensity}
                  onChange={(e)=>setSettings(s=>({...s, intensity:Number(e.target.value)}))}
                  className="w-full"
                />
              </label>
              <label className="text-slate-300 col-span-2">
                <span className="block text-sm mb-2">Easing</span>
                <select value={settings.easing} onChange={(e)=>setSettings(s=>({...s, easing:e.target.value}))}
                  className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-slate-200">
                  <option value="easeOutQuad">easeOutQuad</option>
                  <option value="easeInOutCubic">easeInOutCubic</option>
                  <option value="spring">spring</option>
                </select>
              </label>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8"
          >
            <h3 className="text-white/90 text-xl mb-6"><span ref={el} /></h3>
            <motion.div
              animate={{
                rotate: settings.intensity * 6,
                scale: 1 + settings.intensity * 0.05,
              }}
              transition={{ duration: settings.duration/1000, ease: 'easeInOut' }}
              className="aspect-video rounded-xl bg-[radial-gradient(60%_60%_at_50%_50%,rgba(168,85,247,0.2),transparent)] border border-white/10 flex items-center justify-center text-fuchsia-300"
            >
              <div className="w-24 h-24 rounded-full bg-fuchsia-500/20 border border-fuchsia-300/30" />
            </motion.div>
            <p className="mt-4 text-slate-400 text-sm">This live preview mirrors your control settings.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
