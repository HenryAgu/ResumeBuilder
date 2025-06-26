import { useState } from "react";

interface Schools {
  name: string;
  department: string;
}

const Education = () => {
  // schools array
  const schools: Schools[] = [
    {
      name: "Bellows College | Madison, WI",
      department: "Bachelors Science in Nursing",
    },
    {
      name: "Bachelors of Science in Nursing",
      department: "Bachelors Science in Nursing",
    },
  ];

  const coursework: string =
    "Anatomy and physiology, pharmacology, nursing ethics, and patient care management.";
  return (
    <section className="my-5">
      <p className="font-serif text-2xl font-medium">EDUCATION</p>
      <div className="my-2 mt-5 flex flex-col gap-y-2">
        {schools.map((school) => (
          <div className="">
            <p className="text-sm font-inter font-normal">{school.name}</p>
            <p className="text-sm font-inter font-normal">
              {school.department}
            </p>
          </div>
        ))}
        {/* Relevent works */}
        <p className="text-sm font-inter font-normal">
          Relevant coursework: {coursework}
        </p>
      </div>
      <div className="h-[0.5px] bg-black mt-10"></div>
    </section>
  );
};

export default Education;
