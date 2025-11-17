import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Designer & Web Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-relaxed text-slate-700 max-w-xl"
          >
            I craft modern, minimalist digital experiences with smooth motion and bold, clean visuals. Available for freelance and full‑time collaborations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="pointer-events-auto inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-slate-800 transition-colors">View work</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-full border border-slate-300 text-slate-900 px-6 py-3 text-sm font-semibold hover:bg-white transition-colors">Contact</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mt-8 flex items-center gap-6 text-sm text-slate-600"
          >
            <span>Available for 2025</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span>Remote • Worldwide</span>
          </motion.div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  )
}
