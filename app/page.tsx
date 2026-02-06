import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="antialiased">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Location />
      <Footer />
    </main>
  );
}
