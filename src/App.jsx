import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ImageSlider } from "./components/ImageSlider";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { MenuBook3D } from "./components/MenuBook3D";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ImageSlider />
      <MenuBook3D />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
