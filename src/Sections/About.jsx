import React from "react";

const About = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="about"
      className="pt-20  flex flex-col lg:flex-row items-center gap-12"
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className="relative w-full   rounded-3xl overflow-hidden shadow-xl">
          <img
            src="./assets/mazen.jpg"
            alt="About me"
            className="w-full  object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <p className="text-(--heading-color) font-semibold text-lg md:text-xl mb-2">
          About
        </p>

        <h3 className="text-(--heading-color) font-bold text-3xl sm:text-4xl md:text-5xl mb-6 leading-snug">
          About Me
        </h3>

        <p className="text-(--body-color) text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          I’m Mazen, a passionate Junior Frontend Developer with a love for
          building clean, responsive, and modern web applications. I specialize
          in React, Tailwind CSS, and JavaScript, creating interfaces that are
          both user-friendly and visually appealing. I enjoy learning new
          technologies and constantly improving my skills by working on
          real-world projects. My goal is to deliver web experiences that
          delight users and solve problems efficiently. When I’m not coding, I
          enjoy exploring design trends and experimenting with creative
          solutions.
        </p>

        {/* Optional buttons or skills */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-(--primary-color) border border-transparent transition duration-300 px-6 py-3 text-white rounded-2xl cursor-pointer hover:text-(--primary-color) hover:bg-transparent hover:border-(--primary-color)"
          >
            Contact Me
          </button>
          <button
            onClick={() => scrollToSection("project")}
            className="border border-(--primary-color) text-(--primary-color) px-6 py-3 rounded-2xl cursor-pointer transition duration-300 hover:bg-(--primary-color) hover:text-white"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
