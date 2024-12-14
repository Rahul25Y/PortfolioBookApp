import React from "react";
import Heading from "../Services/Heading";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

function About() {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About Me"
        subtitle="A React.js Developer passionate about building interactive UI."
      />

      {/* Details section */}
      <div className="mt-9 text-slate-500">
        {/* Mobile only text */}
        <p className="md:hidden w-[400px] mx-auto p-5">
          I am a passionate <strong>React.js Developer</strong> with expertise
          in HTML, CSS, JavaScript, Tailwind CSS, and React. I enjoy building
          dynamic, responsive user interfaces that are efficient and
          user-friendly.
          <br /><br/>I specialize in creating interactive web applications and have a
          keen eye for designing seamless user experiences. I believe in writing
          clean, maintainable code, and always strive for continuous learning.
        </p>

        {/* Desktop or larger screen text */}
        <p className="hidden md:block text-center md:text-left mb-4 px-4 md:px-0">
          I am a passionate <strong>React.js Developer</strong> with expertise
          in HTML, CSS, JavaScript, Tailwind CSS, and React. I enjoy building
          dynamic, responsive user interfaces that are efficient and
          user-friendly.
        </p>

        {/* Additional content */}
        <p className="hidden md:block text-center md:text-left mb-4 px-4 space-y-10 md:px-0">
          I specialize in creating interactive web applications and have a keen
          eye for designing seamless user experiences. I believe in writing
          clean, maintainable code, and always strive for continuous learning.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-6 mt-10">
          <MdFacebook className="social-btn text-4xl" />
          <AiFillInstagram className="social-btn text-4xl" />
          <AiFillGithub className="social-btn text-4xl" />
          <AiFillLinkedin className="social-btn text-4xl" />
        </div>

        {/* Button Links */}
        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <a href="#" className="primary-btn cursor-pointer">
            Download Resume
          </a>
          <a
            href="mailto:ry9747406@gmail.com"
            className="outline-btn"
            title="Contact via Email"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
