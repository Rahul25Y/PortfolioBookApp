import React from "react";

const SkillsLevel = ({ skillName, percentage }) => {
  return (
    <div className="mt-4 space-y-2">
      {/* Skill Name and Percentage */}
      <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:justify-between sm:items-end">
        <p className="font-bold text-base sm:text-xl text-center">{skillName}</p>
        <p className="text-sm sm:text-base text-center">{percentage}</p>
      </div>
      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full">
        <div
          style={{ width: `${percentage}` }}
          className="h-2 bg-orange-500 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default SkillsLevel;
