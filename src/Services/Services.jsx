import React from "react";
import ServicesBox from "./ServicesBox";
import Heading from "./Heading";

function Services() {
  return (
    <div className="h-full page-shadow bg-white px-10">
      {/* heading */}
      <Heading
        title="Technologies_Work"
         subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
      />

      {/* Services Card  */}
      <div>
        <ServicesBox />
      </div>
    </div>
  );
}

export default Services;
