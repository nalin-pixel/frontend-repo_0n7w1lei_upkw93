import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // This demo form just simulates a response
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Let’s build something</h2>
        <p className="mt-3 text-slate-700">Tell me about your project. I typically respond within 24 hours.</p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Name" name="name" required />
            <Input label="Email" type="email" name="email" required />
          </div>
          <Input label="Company" name="company" />
          <div>
            <label className="block text-sm font-medium text-slate-700">Budget</label>
            <select className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400">
              <option>Under $2k</option>
              <option>$2k - $5k</option>
              <option>$5k - $10k</option>
              <option>$10k+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea rows={5} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="What are we building?" />
          </div>
          <button className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-slate-800 transition-colors">Send</button>
          {status && <p className="text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </section>
  )
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <input {...props} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
    </div>
  )
}
