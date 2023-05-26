import { useCallback } from "react";
import Navbar from "./components/Navbar";
import Particles from "react-particles";
import stars from "./components/particlesConfigs/stars";
import { loadFull } from "tsparticles";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
export default function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  return (
    <div className="bg-[#010203] h-screen">
      <Particles id="tsparticles" init={particlesInit} options={stars} />
      <Hero />
      <Navbar />
      <Footer />
    </div>
  );
}
