import Education from "@/components/modern template/education";
import Experience from "@/components/modern template/experience";
import MainHeader from "@/components/modern template/mainHeader";
import SideBody from "@/components/modern template/sideBody";
import SideHeader from "@/components/modern template/sideHeader";

export const Route = createFileRoute({
  component: ModernTemplateComponent,
});

function ModernTemplateComponent() {
  return (
    <main className="my-10 w-[60%] h-fit mx-auto shadow-xl flex">
      <div className="basis-[35%] bg-[#dde3eb] pt-20 pb-80 px-10 flex flex-col">
        {/* Image and Contact */}
        <SideHeader />

        {/* Communication and Leadership */}
        <SideBody />
      </div>
      <div className="basis-[65%] bg-white pt-20 pb-80 px-10 pr-32 flex flex-col">
        {/* Main header */}
        <MainHeader />

        {/* Education */}
        <Education />

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
    </main>
  );
}
