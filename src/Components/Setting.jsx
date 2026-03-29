import React, { useEffect, useRef, useState } from "react";
import { FaCog } from "react-icons/fa";

const colors = [
  "#5E3BEE",
  "#2563EB",
  "#0EA5E9",
  "#14B8A6",
  "#16A34A",
  "#E62872",
  "#F43F5E",
  "#F97316",
  "#F59E0B",
  "#234199"

];

const Setting = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef();
  const gearRef = useRef();
  const changeColor = (color) => {
    document.documentElement.style.setProperty("--primary-color", color);
    localStorage.setItem("primary-color", color);
  };
  // useEffect(() => {
  //   const savedColor = localStorage.getItem("primary-color");
  //   if (savedColor) {
  //     document.documentElement.style.setProperty("--primary-color", savedColor);
  //   }
  // }, []);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        open &&
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        gearRef.current &&
        !gearRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);
  return (
    <>
      <button
        ref={gearRef}
        onClick={() => setOpen(!open)}
        className="
          fixed top-1/2 right-0 z-150
          w-12 h-12
          flex items-center justify-center
          rounded-l-xl
          shadow-lg
          bg-(--primary-color)
          text-white
          
          cursor-pointer
        "
      >
        <FaCog className="animate-spin-slow" size={20} />
      </button>

      {/* Settings Panel */}
      <div
        ref={panelRef}
        className={`
          fixed top-0 right-0 z-140
          h-full w-64
          bg-white
          shadow-2xl
          p-6
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <h3
          className="text-lg font-bold mb-6"
          style={{ color: "var(--heading-color)" }}
        >
          Theme Settings
        </h3>

        {/* Color Picker */}
        <div className="mb-6">
          <p
            className="text-sm font-medium mb-3"
            style={{ color: "var(--body-color)" }}
          >
            Main Color
          </p>

          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => changeColor(color)}
                title={color.name}
                className="
                  w-8 h-8 rounded-full
                  border-2 border-white
                  shadow
                  hover:scale-110
                  active:scale-95
                  transition
                  cursor-pointer
                "
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Close Hint */}
        <p className="text-xs text-gray-400 mt-auto">
          Click the gear again to close
        </p>
      </div>
    </>
  );
};

export default Setting;
