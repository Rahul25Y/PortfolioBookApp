import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-6 sm:px-10 py-6 flex justify-center items-center">
      <div className="w-full max-w-md md:max-w-2xl">
        {/* Heading */}
        <div className="mb-10">
          <div className="relative">
            <div className="text-center text-4xl sm:text-6xl xl:text-8xl font-bold text-black/5">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-3xl md:text-4xl font-bold">
              Skills
            </h1>
          </div>
        </div>
        {/* Skills Section */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          <SkillsLevel skillName="HTML" percentage="99%" />
          <SkillsLevel skillName="CSS" percentage="95%" />
          <SkillsLevel skillName="Tailwind" percentage="80%" />
          <SkillsLevel skillName="Javascript" percentage="90%" />
          <SkillsLevel skillName="React.js" percentage="91%" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
