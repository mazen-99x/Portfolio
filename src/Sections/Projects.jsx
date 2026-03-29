import React from "react";

const projects = [
  {
    id: 1,
    title: "Landing Page",
    image: "./assets/landingpage.png",
    demo: "https://mazen-99x.github.io/LandingPage/",
    code: "https://github.com/mazen-99x/LandingPage",
  },
  {
    id: 2,
    title: "Food Webstie",
    image: "./assets/merdia.png",
    demo: "https://mazen-99x.github.io/foodWebsite/",
    code: "https://github.com/mazen-99x/foodWebsite",
  },
  {
    id: 3,
    title: "E-commerce ",
    image: "./assets/Swoo.png",
    demo: "https://mazen-99x.github.io/Swoo/#/",
    code: "https://github.com/mazen-99x/Swoo",
  },
  {
    id: 4,
    title: "Portfolio",
    image: "./assets/portfolio.png",
    demo: "#",
    code: "#",
  },
  {
    id: 5,
    title: "Space",
    image: "./assets/space.png",
    demo: "https://mazen-99x.github.io/space/",
    code: "https://github.com/mazen-99x/space",
  },
  {
    id: 6,
    title: "Yummy",
    image: "./assets/yummy.png",
    demo: "https://mazen-99x.github.io/yummy/",
    code: "https://github.com/mazen-99x/yummy",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-30">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap mb-10">
        <h3 className="text-(--heading-color) font-bold text-3xl sm:text-4xl md:text-5xl">
          My Portfolio
        </h3>
        <a
          href="https://github.com/mazen-99x"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-(--primary-color) border border-transparent transition duration-300 px-6 py-3 text-white rounded-2xl cursor-pointer hover:text-(--primary-color) hover:bg-transparent hover:border-(--primary-color)"
        >
          My Github
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-(--bg-shade-color) rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition  flex flex-col group cursor-pointer hover:-translate-y-2.5 duration-500"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48  grayscale transition-transform duration-1000  group-hover:grayscale-0"
            />

            {/* Title and Buttons */}
            <div className="p-6 flex flex-col grow justify-between">
              <h4 className="text-xl font-semibold mb-4">{project.title}</h4>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-(--primary-color) border text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-transparent hover:text-(--primary-color) hover:border hover:border-(--primary-color)"
                >
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-(--primary-color) border text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-transparent hover:text-(--primary-color) hover:border hover:border-(--primary-color)"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
