// src/components/sections/Collections.jsx
export default function Collections() {
  const collections = [
    {
      title: "Streetwear",
      desc: "Urban-inspired looks that redefine everyday comfort with edge.",
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Luxury Wear",
      desc: "Elegant silhouettes and fine details for a timeless statement.",
      img: "https://images.unsplash.com/photo-1746730921484-897eff445c9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwd2VhYXJ8ZW58MHx8MHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
    },

    {
      title: "Accessories",
      desc: "Minimal accessories that complete your look with effortless class.",
      img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full bg-neutralLight py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Explore Our Collections
        </h2>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-neutralDark text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
