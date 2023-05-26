import React from "react";
// import Lottie from "react-lottie";
// import AstroDeveloper from "./animations/astro-developer.json";
import Typing from "react-typing-animation";
function Hero() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/* <Lottie
        options={{ animationData: AstroDeveloper }}
        isClickToPauseDisabled
        height={400}
        width={400}
        style={{ cursor: "default" }}
      /> */}
      <Typing speed={0.01} className="transition-all animate-pulse">
        <p class="text-gray-900 text-4xl md:text-7xl transition-all dark:text-white">
          .comingSoon()
        </p>
      </Typing>
    </div>
  );
}

export default Hero;
