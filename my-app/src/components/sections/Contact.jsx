// src/components/sections/Contact.jsx
export default function Contact() {
  return (
    <section className="w-full bg-primary text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Stay in Touch
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Have questions about our collections or need a custom style
            consultation? Reach out — we’d love to hear from you.  
            Or, subscribe to get updates on new drops and exclusive offers.
          </p>

          {/* Newsletter */}
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-full text-neutralDark outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent rounded-full font-semibold hover:bg-accent/80 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="bg-white text-neutralDark rounded-2xl p-8 shadow-lg">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us more..."
                className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-full font-semibold hover:bg-accent/80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
