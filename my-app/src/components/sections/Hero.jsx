// src/components/sections/Hero.jsx
export default function Hero() {
  return (
    <section className="w-full bg-neutralLight py-20 lg:py-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Elevate Your Everyday Look
          </h1>
          <p className="text-neutralDark text-lg max-w-md mx-auto lg:mx-0">
            Discover timeless fashion that defines your confidence. 
            From streetwear to luxury collections — designed for every moment.
          </p>
          <button className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=1000&q=80"
            alt="Velora fashion model"
            className="w-full h-auto rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
