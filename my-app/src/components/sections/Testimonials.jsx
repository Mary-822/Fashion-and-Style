// src/components/sections/Testimonials.jsx
export default function Testimonials() {
  const testimonials = [
    {
      name: "Amina W.",
      role: "Fashion Blogger",
      text: "Velora completely redefined my wardrobe. Every piece feels handcrafted for elegance and comfort.",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "James K.",
      role: "Creative Director",
      text: "The quality and fit are unmatched. Velora's minimalist designs are pure sophistication.",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Lucia M.",
      role: "Model & Stylist",
      text: "Every outfit makes me feel confident and bold. Velora brings out the best version of me.",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-neutralLight rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-accent"
                />
                <p className="text-neutralDark italic mb-4">“{t.text}”</p>
                <h3 className="text-lg font-semibold text-primary">{t.name}</h3>
                <p className="text-sm text-neutralDark/70">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
