// src/components/layout/Footer.jsx
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutralDark text-neutralLight py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Velora</h2>
          <p className="text-sm text-neutralLight/80 leading-relaxed">
            Where timeless fashion meets modern elegance.  
            Designed for bold dreamers and refined souls.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <a href="#" className="hover:text-accent transition">Home</a>
          <a href="#" className="hover:text-accent transition">Collections</a>
          <a href="#" className="hover:text-accent transition">About</a>
          <a href="#" className="hover:text-accent transition">Contact</a>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white/10 hover:bg-accent p-2 rounded-full transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-accent p-2 rounded-full transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-accent p-2 rounded-full transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Velora. All rights reserved.
      </div>
    </footer>
  );
}
