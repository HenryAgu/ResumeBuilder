import { useState } from "react";

interface Experience {
  startMonth: string;
  endMonth: string;
  startYear: number;
  endYear: number;
  role: string;
}

const Experience = () => {
  // experiences array
  const experience: Experience[] = [
    {
      startMonth: "December",
      endMonth: "January",
      startYear: 2019,
      endYear: 2020,
      role: "Registered Nurse | Pediatrics | Wholeness Healthcare",
    },
    {
      startMonth: "December",
      endMonth: "January",
      startYear: 2019,
      endYear: 2020,
      role: "Registered Nurse | Pediatrics | Wholeness Healthcare",
    },
    {
      startMonth: "December",
      endMonth: "January",
      startYear: 2019,
      endYear: 2020,
      role: "Registered Nurse | Pediatrics | Wholeness Healthcare",
    },
  ];

  const [experienceSummary, setExperienceSummary] = useState<string>(
    "I have a proven track record of delivering high-quality care while maintaining patient safety and satisfaction"
  );
  return (
    <section className="my-5">
      <p className="font-serif text-2xl font-medium">EXPERIENCE</p>
      {/* Experience Summary */}
      <div className="mt-5 flex flex-col gap-y-5">
        {experience.map((item) => (
          <div className="flex flex-col gap-y-1.5">
            <p className="text-sm font-inter font-normal">
              {`${item.startMonth} ${item.startYear} - ${item.endMonth} ${item.endYear}`}
            </p>
            <p className="text-sm font-inter font-normal">{item.role}</p>
          </div>
        ))}
        <p className="text-sm font-inter font-normal">{experienceSummary}</p>
      </div>
      <div className="h-[0.5px] bg-black mt-10"></div>
    </section>
  );
};

export default Experience;
