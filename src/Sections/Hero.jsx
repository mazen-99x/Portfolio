import React from "react";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Git & GitHub",
    "REST APIs",
    "Redux",
  ];

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className=" py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Open to work
            </div>

            <p className="text-(--heading-color)  mb-3 text-base sm:text-lg md:text-xl">
              Hey, I’m Mazen 👋
            </p>

            <h1 className="text-(--heading-color) font-extrabold leading-tight mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Junior Frontend Developer{" "}
              <span className="text-(--primary-color)">React</span>
            </h1>

            <p className="text-(--body-color) mb-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build responsive and modern websites using React, Tailwind CSS,
              and JavaScript. I’m always learning by building real projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-(--primary-color) border border-transparent transition duration-300 px-6 py-3 text-white rounded-2xl cursor-pointer hover:text-(--primary-color) hover:bg-transparent hover:border-(--primary-color)"
              >
                Get In Touch
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="border border-(--primary-color) text-(--primary-color) px-7 py-3 rounded-2xl cursor-pointer transition duration-300 hover:bg-(--primary-color) hover:text-white"
              >
                View Projects
              </button>
            </div>

            {/* Skills */}
            <div className="mt-10 flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm sm:text-base text-(--body-color)] bg-white shadow-sm hover:shadow-md transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className=" flex justify-center lg:justify-end ">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-2 rounded-3xl bg-(--primary-color)] opacity-20 blur-2xl"></div>

              <img
                src="./assets/mazen.jpg"
                alt="Hero"
                className="relative w-full rounded-3xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
