import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-commerce Redesign',
    desc: 'Minimal, conversion-focused storefront with micro-interactions.',
    tags: ['UX', 'UI', 'React'],
    image: 'https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Data-dense layout with smooth, tactile motion and charts.',
    tags: ['Design System', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1651760464181-49092525ca3b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjM0MDQwMDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Creative Studio Site',
    desc: 'Bold typography, editorial rhythm, and kinetic scrolling.',
    tags: ['Brand', 'Webflow'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Selected Work</h2>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full border border-slate-300 text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-white transition-colors">Get a quote</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
