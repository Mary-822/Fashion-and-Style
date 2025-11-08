// src/components/sections/About.jsx
export default function About() {
  return (
    <section className="w-full bg-neutralLight py-20 lg:py-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            We Create Confidence Through Style
          </h2>
          <p className="text-neutralDark text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            At Velora, we believe fashion is more than what you wear — 
            it’s how you express who you are. Our collections blend modern 
            design, ethical craftsmanship, and timeless elegance to help 
            you own every moment in style.
          </p>
          <button className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1733683321694-458cefa326f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=473"
            alt="Velora fashion studio"
            className="w-full h-auto rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div> {/* ✅ properly closed wrapper div */}
    </section>
  );
}
