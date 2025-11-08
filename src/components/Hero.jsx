import { Rocket, Code, Globe, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 opacity-10" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              <Rocket className="h-3.5 w-3.5" />
              AadeshSofTech Solution
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              We build modern software and web experiences
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Partner with a product-focused team delivering clean code, pixel-perfect UI, and
              business outcomes. From MVPs to enterprise platforms — we ship fast and right.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700 transition"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 transition"
              >
                Explore services
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Code className="h-4 w-4 text-indigo-600" /> Clean Architecture</div>
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-indigo-600" /> Global Delivery</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-teal-500/20 p-1">
              <div className="h-full w-full rounded-2xl bg-white ring-1 ring-gray-100 p-6 flex flex-col justify-center">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "Next.js",
                    "React",
                    "Node.js",
                    "Python",
                    "FastAPI",
                    "MongoDB",
                    "Postgres",
                    "Tailwind",
                    "AWS",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-center text-xs font-medium text-gray-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-center text-sm text-gray-500">
                  Battle‑tested stack for speed, scale, and reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
