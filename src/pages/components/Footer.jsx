import Typed from "react-typed";

function Footer({ startTyping }) {
  return (
    <div className="absolute bottom-2 flex items-center justify-center text-white text-center w-screen animate-pulse text-sm 2xl:text-lg">
      {startTyping && (
        <Typed
          strings={[
            'Made by <a href="https://github.com/rvyk" className="mx-1.5">rvyk</a> and <a href="https://github.com/MajekPL0770" className="mx-1.5">majus</a> in 2023',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop={false}
          smartBackspace={false}
          showCursor={false}
          contentType="html"
        />
      )}
    </div>
  );
}

export default Footer;
