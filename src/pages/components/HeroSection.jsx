import React from "react";
// import Lottie from "react-lottie";
// import AstroDeveloper from "./animations/astro-developer.json";
import Typed from "react-typed";
import { motion, useDragControls } from "framer-motion";
function Hero({ completeTyping }) {
  const controls = useDragControls();

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/* <Lottie
        options={{ animationData: AstroDeveloper }}
        isClickToPauseDisabled
        height={400}
        width={400}
        style={{ cursor: "default" }}
      /> */}
      <motion.p
        drag
        dragControls={controls}
        className="text-4xl md:text-7xl transition-all text-white animate-pulse"
      >
        <Typed
          strings={[".comingSoon()"]}
          typeSpeed={80}
          showCursor={false}
          onComplete={completeTyping}
        />
      </motion.p>
    </div>
  );
}

export default Hero;
