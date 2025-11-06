 import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Collections from "./components/sections/Collections";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
export default function App() {
  return (
    <div className="min-h-screen bg-neutralLight text-neutralDark">
      <Header />
      <main className="pt-24">
        <Hero />
        <Stats />
        <About />
        <Collections />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
