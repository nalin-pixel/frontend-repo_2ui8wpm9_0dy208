import { ShieldCheck, Zap, Users, BadgeCheck } from 'lucide-react'

const points = [
  { icon: ShieldCheck, title: 'Quality First', text: 'Rigorous code reviews, testing, and best practices ensure reliability.' },
  { icon: Zap, title: 'Fast Delivery', text: 'Lean, iterative approach to ship value quickly without surprises.' },
  { icon: Users, title: 'Partner Mindset', text: 'We collaborate closely to align tech decisions with business goals.' },
  { icon: BadgeCheck, title: 'Proven Stack', text: 'Modern, battle-tested tools tailored for your product stage.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Why choose us</h2>
            <p className="mt-3 text-gray-600">We blend design, engineering, and strategy to build products users love.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {points.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-xl border bg-white p-5">
                  <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-700 inline-flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1.5 text-sm text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500" />
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• Transparent pricing and communication</li>
              <li>• Flexible engagement models</li>
              <li>• Post-launch support and growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
