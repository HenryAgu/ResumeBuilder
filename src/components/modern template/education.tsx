import { useState } from "react";

interface Schools {
  title: string;
}

const Education = () => {
  // schools array
  const schools: Schools[] = [
    {
      title: "Bellows College | Madison, WI",
    },
    {
      title: "Bachelors of Science in Nursing",
    },
  ];

  const [coursework, setCoursework] = useState<string>(
    "Anatomy and physiology, pharmacology, nursing ethics, and patient care management."
  );
  return (
    <section className="my-5">
      <p className="font-serif text-2xl font-medium">EDUCATION</p>
      <div className="my-2 mt-5 flex flex-col gap-y-2">
        {schools.map((school) => (
          <p className="text-sm font-inter font-normal">{school.title}</p>
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
