import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} AadeshSofTech Solution. All rights reserved.</p>
          <div className="text-sm text-gray-600">Built with care — quality, speed, and reliability.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
