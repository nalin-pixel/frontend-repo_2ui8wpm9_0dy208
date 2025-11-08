export default function Approach() {
  const steps = [
    {
      title: "Discover",
      text: "Deep dive into your goals, users, and constraints to align on outcomes.",
    },
    {
      title: "Design",
      text: "Translate insights into clear architecture, flows, and interfaces.",
    },
    {
      title: "Develop",
      text: "Build in iterative sprints with code quality, performance, and security in mind.",
    },
    {
      title: "Deliver",
      text: "Launch, measure, and continuously improve to maximize impact.",
    },
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            A pragmatic delivery approach
          </h2>
          <p className="mt-4 text-gray-600">
            Clear communication, transparent progress, and measurable results at every step.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
              <div className="text-xs font-semibold tracking-wider text-indigo-600">{s.title}</div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
