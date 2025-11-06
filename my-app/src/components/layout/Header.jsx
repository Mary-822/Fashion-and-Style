// src/components/layout/Header.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-neutralLight z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-sans font-bold text-primary tracking-wide">
          Velora
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-neutralDark font-medium">
          <a href="#" className="hover:text-accent transition">Home</a>
          <a href="#" className="hover:text-accent transition">Collections</a>
          <a href="#" className="hover:text-accent transition">About</a>
          <a href="#" className="hover:text-accent transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutralDark"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-neutralLight shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-6 text-neutralDark">
            <a href="#" className="hover:text-accent transition">Home</a>
            <a href="#" className="hover:text-accent transition">Collections</a>
            <a href="#" className="hover:text-accent transition">About</a>
            <a href="#" className="hover:text-accent transition">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
