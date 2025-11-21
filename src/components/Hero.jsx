import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[120svh] w-full overflow-hidden bg-[#0b0f1a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(88,28,135,0.35)_0%,rgba(2,6,23,0.0)_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 pt-40 pb-24 flex flex-col items-start">
        <p className="text-fuchsia-300/90 uppercase tracking-[0.25em] text-xs sm:text-sm mb-4">Text Prompt Website Builder</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_8px_30px_rgba(168,85,247,0.35)]">
          Websites that feel like video
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200/90 text-base sm:text-lg">
          Layered 3D graphics, high‑fidelity motion, and interactable components. Scroll to explore immersive sections with buttery‑smooth 60fps animations.
        </p>
        <div className="mt-8 flex gap-3 pointer-events-auto">
          <a href="#features" className="inline-flex items-center rounded-lg bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20 transition">Explore Features</a>
          <a href="#cta" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm font-semibold ring-1 ring-white/20 transition">Start Building</a>
        </div>
      </div>
    </section>
  )
}
