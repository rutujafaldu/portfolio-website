import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HamburgerIcon from "./assets/hamburger-menu.svg";
import CloseIconDark from "./assets/closeIconDark.svg";
import CloseIconLight from "./assets/closeIconLight.svg";
import siteConfig from "./utils/config";

type Props = {
  darkMode: boolean;
};

export default function SidebarMenu({ darkMode }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("About");

  const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <div className="relative flex items-center">
      {/* Hamburger Button */}
      <button onClick={() => setIsOpen(true)}>
        <img src={HamburgerIcon} className="w-6 h-6 md:hidden" />
      </button>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col p-6"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-between">
              <div className="font-semibold text-accent">{siteConfig.name}</div>
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="self-end mb-6 text-gray-700 dark:text-gray-200"
              >
                <img
                  src={darkMode ? CloseIconDark : CloseIconLight}
                  alt="X"
                  className="h-6 w-6"
                />
              </button>
            </div>

            {/* Sidebar Links */}
            <nav className="flex flex-col space-y-4 text-lg font-medium dark:text-muted text-gray-800">
              {navItems.map((item) => (
                <a
                  href={`#` + item.toLowerCase()}
                  key={item}
                  onClick={() => {
                    setActiveItem(item);
                    setIsOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    activeItem === item
                      ? "bg-accent text-white"
                      : "text-gray-800 dark:text-muted hover:bg-gray-200 dark:hover:bg-white"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
