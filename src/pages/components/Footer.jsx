import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-2 flex items-center justify-center text-white text-center w-screen animate-pulse text-sm">
      Made by{" "}
      <a href="https://github.com/rvyk" className="mx-1.5">
        rvyk
      </a>{" "}
      &{" "}
      <a href="https://github.com/MajekPL0770" className="mx-1.5">
        Majek
      </a>
      in {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
