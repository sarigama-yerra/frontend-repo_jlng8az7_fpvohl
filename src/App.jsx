import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LayersShowcase from './components/LayersShowcase'
import Controls from './components/Controls'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <LayersShowcase />
      <Controls />
      <CTA />
      <footer className="bg-slate-950 border-t border-white/10 py-10 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} VibeBuilder • Built for 60fps
      </footer>
    </div>
  )
}

export default App
