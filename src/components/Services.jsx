import { Code, Layout, Smartphone, Wrench } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Development",
    desc: "High-performance websites and web apps built with modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications with native feel and seamless UX.",
  },
  {
    icon: Code,
    title: "Custom Software",
    desc: "Tailored solutions that automate workflows and accelerate your business.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Reliable ongoing support, monitoring, and enhancement for your products.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Software services that move you forward
          </h2>
          <p className="mt-4 text-gray-600">
            We plan, design, and build robust products using a pragmatic, outcome-driven approach.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
              <div className="mt-4 text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
