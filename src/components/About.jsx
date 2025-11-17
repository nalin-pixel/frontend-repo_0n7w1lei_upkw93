import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">About</h2>
          <p className="mt-6 text-slate-700 leading-relaxed">
            I’m a multidisciplinary designer and developer focused on crafting minimalist, high-performing interfaces. My work blends clean typography, balanced whitespace, and smooth motion to create delightful, functional digital products.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="rounded-lg border border-slate-200 bg-white p-3">React / Next.js</li>
            <li className="rounded-lg border border-slate-200 bg-white p-3">Design Systems</li>
            <li className="rounded-lg border border-slate-200 bg-white p-3">Framer Motion</li>
            <li className="rounded-lg border border-slate-200 bg-white p-3">Brand & Art Direction</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Approach</h3>
            <p className="mt-3 text-slate-700 text-sm leading-relaxed">
              I prototype fast, iterate with purpose, and deliver production-grade experiences. Accessibility, performance, and detail are non‑negotiable. I love working with teams that value clarity and craft.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <Stat value="5+" label="Years" />
              <Stat value="30+" label="Projects" />
              <Stat value="12" label="Products" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-600">{label}</div>
    </div>
  )
}
