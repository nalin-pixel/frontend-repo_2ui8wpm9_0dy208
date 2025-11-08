import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Let’s build something great together
            </h2>
            <p className="mt-4 text-gray-600">
              Share a bit about your project and we’ll get back within 24 hours.
            </p>
            <div className="mt-8 space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-600" /> hello@aadeshsoftech.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-indigo-600" /> +91 90000 00000</p>
            </div>
          </div>
          <form className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project details</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="What are you building?" />
            </div>
            <button type="button" className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700">
              Send inquiry
            </button>
            <p className="text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
