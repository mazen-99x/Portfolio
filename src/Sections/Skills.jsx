import React from "react";
import { FaReact, FaCode, FaMobileAlt, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: <FaReact size={34} />,
      title: "React Development",
      desc: "Build fast, reusable components and modern SPA applications.",
    },
    {
      icon: <FaCode size={34} />,
      title: "Clean Code",
      desc: "Write readable, scalable code using best practices and structure.",
    },
    {
      icon: <FaMobileAlt size={34} />,
      title: "Responsive Design",
      desc: "Create mobile-first layouts that look great on all devices.",
    },
    {
      icon: <FaGitAlt size={34} />,
      title: "Git & GitHub",
      desc: "Version control, collaboration, and project management workflow.",
    },
  ];

  return (
    <section id="skills" className="pt-30">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-(--heading-color)">
          My Skills
        </h2>
        <p className="mt-3 text-(--body-color) text-base sm:text-lg max-w-xl mx-auto">
          Tools and skills I use to build modern frontend projects.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-(--bg-shade-color) shadow-sm cursor-pointer
             border-b-4 border-b-transparent
             hover:border-b-(--primary-color) hover:-translate-y-2 active:border-b-(--primary-color) active:-translate-y-2 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gray-100 text-(--primary-color) mb-5">
              {skill.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-(--heading-color) mb-2">
              {skill.title}
            </h3>

            {/* Description */}
            <p className="text-(--body-color) text-sm sm:text-base leading-relaxed">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
