import React from 'react';
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { AiOutlineHtml5 } from "react-icons/ai";

const ServicesBox = () => {
    const ServicesData = [
        {
          name: "HTML",
          description: "The backbone of web structure.",
          icon: <AiOutlineHtml5 className="text-4xl" />, 
          bgColor: "bg-orange-500/70",
        },
        {
          name: "CSS",
          description: "Design and style with precision.",
          icon: <FaCss3Alt className="text-4xl" />, 
          bgColor: "bg-blue-500/70",
        },
        {
          name: "JavaScript",
          description: "Bring interactivity to life.",
          icon: <FaNodeJs className="text-4xl" />,
          bgColor: "bg-yellow-500/70",
        },
        {
            name: "React.js",
            description: "Build dynamic and interactive UIs.",
            icon: <FaReact className="text-4xl" />,
            bgColor: "bg-fuchsia-500/70",
          },
        
      ];
      
  const ServicesData2 = [
    {
        name: "HTML",
        description: "The backbone of web structure.",
        icon: <AiOutlineHtml5 className="text-4xl" />, 
        bgColor: "bg-orange-500/70",
      },
      {
        name: "CSS",
        description: "Design and style with precision.",
        icon: <FaCss3Alt className="text-4xl" />, 
        bgColor: "bg-blue-500/70",
      },
      {
        name: "JavaScript",
        description: "Bring interactivity to life.",
        icon: <FaNodeJs className="text-4xl" />,
        bgColor: "bg-yellow-500/70",
      },
      {
          name: "React.js",
          description: "Build dynamic and interactive UIs.",
          icon: <FaReact className="text-4xl" />,
          bgColor: "bg-fuchsia-500/70",
        },
  ];

  return (
    <div className="h-full mt-10 text-white">
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 gap-3">
          {ServicesData2.map(({ name, description, icon, bgColor }, index) => (
            <div
              key={index}
              className={`p-3 ${bgColor} min-h-[180px]  rounded-xl hover:scale-105 transition-all flex flex-col items-center justify-center`}
            >
              <div className="space-y-3 flex  ">
              <div className='flex flex-col gap-4 items-center'>
              <p>  {icon}</p>
                <h1 className="text-xl font-bold text-center">{name}</h1>
                <p className="text-sm">{description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet and Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-6">
          {ServicesData.map(({ name, description, icon, bgColor }, index) => (
            <div
              key={index}
              className={`p-3 ${bgColor} min-h-[180px] rounded-xl hover:scale-105 transition-all`}
            >
              <div className="p-3 space-y-3">
                {icon}
                <h1>{name}</h1>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesBox;
