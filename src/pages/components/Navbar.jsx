import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Navbar() {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    setCurrentSection(1);
  }, []);
  return (
    <div className="fixed top-7 md:top-0 w-screen h-14 bg-transparent flex justify-between items-center">
      <div className="left-4 ml-4 md:ml-8">
        <motion.p
          whileHover={{ scale: 1.25 }}
          className="text-purple-500 cursor-pointer text-xl"
        >
          .us()
        </motion.p>
      </div>
      <div className="flex items-end md:items-center mr-4 md:mr-8 flex-col md:flex-row">
        <motion.p
          whileHover={{ color: "#ac54f4", translateY: -2 }}
          className={`${
            currentSection === 1 ? "text-zinc-600" : "text-slate-50"
          } mx-2 my-1 md:my-0 cursor-pointer`}
        >
          .us()
        </motion.p>
        <motion.p
          whileHover={{ color: "#ac54f4", translateY: -2 }}
          className={`${
            currentSection === 2 ? "text-zinc-600" : "text-slate-50"
          } mx-2 my-1 md:my-0 cursor-pointer`}
        >
          .aboutUs()
        </motion.p>
        <motion.p
          whileHover={{ color: "#ac54f4", translateY: -2 }}
          className={`${
            currentSection === 3 ? "text-zinc-600" : "text-slate-50"
          } mx-2 my-1 md:my-0 cursor-pointer`}
        >
          .contactUs()
        </motion.p>
      </div>
    </div>
  );
}

export default Navbar;
