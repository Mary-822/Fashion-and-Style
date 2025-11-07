// src/components/sections/Hero.jsx
export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-neutralLight flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 py-20 lg:py-0">

        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            Elevate Your Everyday Look
          </h1>
          <p className="text-neutralDark text-lg max-w-md mx-auto lg:mx-0">
            Discover timeless fashion that defines your confidence.
            From streetwear to luxury collections — designed for every moment.
          </p>
          <button className="bg-accent text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 lg:flex-[1.2] h-[400px] md:h-[500px] lg:h-[700px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1692873059132-f0b5dd41cb12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1200"
            srcSet="
              https://plus.unsplash.com/premium_photo-1692873059132-f0b5dd41cb12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400 400w,
              https://plus.unsplash.com/premium_photo-1692873059132-f0b5dd41cb12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800 800w,
              https://plus.unsplash.com/premium_photo-1692873059132-f0b5dd41cb12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1200 1200w
            "
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            alt="African dress fashion"
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
