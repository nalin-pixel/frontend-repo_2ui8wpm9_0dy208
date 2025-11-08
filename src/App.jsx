import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Contact />
      </main>
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} AadeshSofTech Solution. All rights reserved.</p>
          <div className="text-sm text-gray-500">Built with care — quality, speed, and reliability.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
