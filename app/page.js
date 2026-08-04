import Navbar from "@/components/Navbar";
import ManifestTicker from "@/components/ManifestTicker";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Expertise from "@/components/Expertise";
import Branding from "@/components/Branding";
import WhyUs from "@/components/WhyUs";
import VisionMission from "@/components/VisionMission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ManifestTicker />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Expertise />
      <Branding />
      <WhyUs />
      <VisionMission />
      <Contact />
      <Footer />
    </main>
  );
}
