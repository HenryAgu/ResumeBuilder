import Education from "@/components/modern template/education";
import Experience from "@/components/modern template/experience";
import MainHeader from "@/components/modern template/mainHeader";
import SideBody from "@/components/modern template/sideBody";
import SideHeader from "@/components/modern template/sideHeader";
import type { resumeSchema } from "@/components/resumeform";
import type { z } from "zod";
import FloatingButton from "@/components/ui/floatingButton";

export const Route = createFileRoute({
  component: ModernTemplateComponent,
});

type ResumeData = z.infer<typeof resumeSchema>;

interface ModernTemplateProps {
  data: ResumeData;
}


export function ModernTemplateComponent({data} : ModernTemplateProps) {
  return (
    <main className="my-10 w-[60%] h-fit mx-auto shadow-xl flex">
      <div className="basis-[35%] bg-[#dde3eb] pt-20 pb-80 px-10 flex flex-col">
        {/* Image and Contact */}
        <SideHeader
          profilePhoto={data.image ?? ""}
          email={data.email}
          address={data.address}
          website={data.website ?? ""}
          />

        {/* Communication and Leadership */}
        <SideBody />
      </div>
      <div className="basis-[65%] bg-white pt-20 pb-80 px-10 pr-32 flex flex-col">
        {/* Main header */}
        <MainHeader
          fullName={data.fullName}
          occupation={data.title}
        />

        {/* Education */}
        <Education education={data.education}         
        />

        {/* Experience */}
        <Experience />

        {/* References */}
        <div className="my-5">
          <p className="font-serif text-2xl font-medium">REFERENCES</p>
          <p className="text-sm font-inter font-normal">
            [Available upon request]
          </p>
        </div>
      </div>
      <FloatingButton/>
    </main>
  );
}
