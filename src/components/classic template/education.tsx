interface EducationBackground {
  name: string;
  department: string;
  startYear: number;
  endYear: number;
}

const Education = () => {
  const educationBackground: EducationBackground[] = [
    {
      name: "University of Port-harcourt",
      department: "Computer Science",
      startYear: 2018,
      endYear: 2024,
    },
  ];
  return (
    <section className="mt-10 flex flex-col gap-y-0.5">
      <p className="pb-2 border-b-[1.5px] border-black w-full text-center text-base font-medium">
        Education
      </p>
      {educationBackground.map((education) => (
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col items-start">
            {/* School */}
            <p className="capitalize font-normal text-black text-base">
              {education.name}
            </p>

            {/* Department */}
            <p className="capitalize font-normal text-black text-base">
              {education.department}
            </p>
          </div>
          <p className="text-base font-normal opacity-85 text-black">
            {education.startYear} - {education.endYear}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Education;
