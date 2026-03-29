import React from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
];

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer
      className="w-full px-10 py-8 mt-10"
      style={{
        backgroundColor: "var(--bg-shade-color)",
        color: "var(--body-color)",
      }}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
        {/* Logo */}

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              onClick={() => scrollToSection(id)}
              className="transition cursor-pointer hover:text-(--primary-color)"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4  text-lg" style={{ color: "var(--body-color)" }}>
          <a
            href="https://www.facebook.com/mazen.mohamed.915262"
            className="hover:scale-110 transition"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/mazen-mohamed-5863593b0/"
            className="hover:scale-110 transition"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="mb-6" style={{ borderColor: "var(--heading-color)" }} />

      {/* Bottom Section */}
      <div
        className="flex flex-col md:flex-row justify-between items-center text-xs gap-4"
        style={{ color: "var(--body-color)" }}
      >
        <p>Made by Mazen</p>

       
      </div>
    </footer>
  );
};

export default Footer;
