import React, { useEffect, useState } from "react";
function Navbar() {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    setCurrentSection(1);
  }, []);
  return (
    <div className="fixed top-7 md:top-0 w-screen h-14 bg-transparent flex justify-between items-center">
      <div className="left-4 ml-4 md:ml-8">
        <p className="text-purple-500 cursor-pointer text-xl hover:scale-125 transition-all">
          .us()
        </p>
      </div>
      <div className="flex items-end md:items-center mr-4 md:mr-8 flex-col md:flex-row">
        <motion
          className={`${
            currentSection === 1 ? "text-zinc-600" : "text-slate-50"
          } mx-2 my-1 md:my-0 cursor-pointer transition-all hover:-translate-y-1 hover:text-purple-500`}
        >
          .us()
        </motion>
        <p
          className={`${
            currentSection === 2 ? "text-zinc-600" : "text-slate-50"
          } mx-2 my-1 md:my-0 cursor-pointer transition-all hover:-translate-y-1 hover:text-purple-500`}
        >
          .aboutUs()
        </p>
        <p
          className={`${
            currentSection === 3 ? "text-zinc-600" : "text-slate-50"
          } mx-2 my-1 md:my-0 cursor-pointer transition-all hover:-translate-y-1 hover:text-purple-500`}
        >
          .contactUs()
        </p>
      </div>
    </div>
  );
}

export default Navbar;
