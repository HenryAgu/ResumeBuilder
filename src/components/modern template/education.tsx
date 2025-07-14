import type { FC } from "react";
import type { z } from "zod";
import type { resumeSchema } from "@/components/resumeform";

type ResumeData = z.infer<typeof resumeSchema>;

interface EducationProps {
  education: ResumeData["education"];
}

const Education: FC<EducationProps> = ({ education }) => {
  return (
    <section className="my-5">
      <p className="font-serif text-2xl font-medium">EDUCATION</p>
      <div className="my-2 mt-5 flex flex-col gap-y-2">
        {education.map((edu, idx) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<p key={idx} className="text-sm font-inter font-normal">
            {edu.degree || "Degree"} - {edu.institution || "Institution"} ({edu.startDate || "Start"} - {edu.endDate || "End"})
          </p>
        ))}
        {/* Relevant coursework */}
        <p className="text-sm font-inter font-normal">
          Relevant coursework: {education[0]?.description || "None"}
        </p>
      </div>
      <div className="h-[0.5px] bg-black mt-10" />
    </section>
  );
};

export default Education;