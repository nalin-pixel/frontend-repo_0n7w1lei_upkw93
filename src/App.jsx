import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />

        <footer className="border-t border-slate-200 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="text-sm text-slate-600">Built with love, motion, and minimalism.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
