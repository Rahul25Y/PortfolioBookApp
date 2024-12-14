import React from "react";

export default function ProjectBox({ ProjectData }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {ProjectData.map((project, index) => {
          return (
            <div
              key={index}
              className="h-auto rounded-xl flex flex-col items-center text-center bg-white shadow-md p-4"
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-[160px] object-cover rounded-xl hover:scale-95 transition-all duration-300 cursor-pointer"
              />
              {/* details section */}
              <div className="pt-3">
                <h1 className="text-lg font-semibold md:text-2xl">
                  {project.name}
                </h1>
                <p className="text-sm md:text-base text-gray-500 mt-2 line-clamp-3 px-2">
                  {project.description}
                </p>
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn mt-3 inline-block"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
