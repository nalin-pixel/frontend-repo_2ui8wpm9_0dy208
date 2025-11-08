import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Rocket className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight text-gray-900">AadeshSofTech</p>
            <p className="text-xs text-gray-500 -mt-0.5">Solution</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#work" className="text-gray-600 hover:text-gray-900">Approach</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}
