// src/components/sections/Stats.jsx
export default function Stats() {
  const stats = [
    { value: "10+", label: "Years of Style" },
    { value: "50K+", label: "Happy Clients" },
    { value: "300+", label: "Collections" },
    { value: "90%", label: "Sustainable Fabrics" },
  ];

  return (
    <section className="w-full bg-secondary py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
            <p className="text-neutralDark text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
