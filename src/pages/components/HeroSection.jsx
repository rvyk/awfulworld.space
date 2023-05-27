import Typed from "react-typed";
function Hero({ completeTyping }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center select-none">
      <p className="text-4xl md:text-7xl transition-all text-white animate-pulse">
        <Typed
          strings={[".comingSoon()"]}
          typeSpeed={80}
          showCursor={false}
          onComplete={completeTyping}
        />
      </p>
    </div>
  );
}

export default Hero;
