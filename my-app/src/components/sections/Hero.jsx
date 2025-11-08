// src/components/sections/Hero.jsx
import { useEffect, useState } from "react";
import heroImage from "../../assets/images/hero.jpeg";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // Trigger text/button animation
    setAnimate(true);

    // Show arrow after a short delay
    const arrowTimeout = setTimeout(() => setShowArrow(true), 1200);
    return () => clearTimeout(arrowTimeout);
  }, []);

  // Scroll to Stats section
  const scrollToNext = () => {
    const nextSection = document.getElementById("stats");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left">
        <h1
          className={`text-5xl md:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Elevate Your Everyday Look
        </h1>
        <p
          className={`text-white text-lg max-w-md mx-auto lg:mx-0 mb-6 transition-all duration-1000 delay-200 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Discover timeless fashion that defines your confidence.
          From streetwear to luxury collections — designed for every moment.
        </p>
        <button
          className={`bg-accent text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-1000 delay-400 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Shop Now
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer transition-opacity duration-700 ${
          showArrow ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToNext}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1 animate-bounce">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
