import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Particles from "react-particles";
import stars from "./components/particlesConfigs/stars";
import { loadFull } from "tsparticles";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const [completeTyping, setCompleteTyping] = useState(false);
  return (
    <div className="bg-[#010203] h-screen">
      <Particles id="tsparticles" init={particlesInit} options={stars} />
      <Hero
        completeTyping={() => {
          setCompleteTyping(true);
        }}
      />
      <Navbar />
      <Footer startTyping={completeTyping} />
    </div>
  );
}
