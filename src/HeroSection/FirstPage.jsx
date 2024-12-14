import React from "react";
import personImg from "../assets/person2.png";

function FirstPage() {
  return (
    <div className="min-h-[90vh]">
      <main className="h-full w-full bg-secondary page-shadow flex items-center justify-center">
        <div className="p-6 md:p-10 space-y-6 max-w-screen-lg mx-auto">
          {/* img-container */}
          <div className="flex justify-center">
            <img
              src={personImg}
              alt="Person"
              className="w-[150px] md:w-[250px] lg:w-[300px]"
            />
          </div>
          {/* text-container */}
          <div className="text-center md:text-left space-y-4">
            <p className="uppercase text-sm md:text-base">Hello</p>
            <p className="text-3xl md:text-5xl font-bold text-black/80">
              I'm Rahul
            </p>
            <p className="text-color font-medium text-sm md:text-base">
              React.js Developer
            </p>

            <p className="text-black/75 text-sm md:text-base max-w-[250px] sm:max-w-none ">
              React.js is a JavaScript library for building user interfaces. It
              makes the process of creating interactive UIs painless and
              efficient.
            </p>

            <a
              className="inline-block primary-btn px-4 py-2 md:px-6 md:py-3 text-sm md:text-base"
              href="mailto:ry674661@gmail.com"
            >
              Hire me
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FirstPage;
