import Education from "@/components/classic template/education";
import Experience from "@/components/classic template/experience";
import Header from "@/components/classic template/header";
import KeyAchievement from "@/components/classic template/keyAchievement";
import Skills from "@/components/classic template/skills";
import Summary from "@/components/classic template/summary";
import FloatingButton from "@/components/ui/floatingButton";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* <button
        className="no-print fixed top-5 right-5 bg-black text-white px-4 py-2 rounded"
        onClick={() => window.print()}
      >
        Print
      </button> */}

      <main className="w-full max-w-[210mm] h-fit mx-auto print:w-full print:max-w-none print:shadow-none print:p-0 print:my-0 shadow-xl flex flex-col p-10 py-20 my-20">
        {/* Header */}
        <Header />
        {/* summary */}
        <Summary />

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Key Achievement */}
        <KeyAchievement />

        {/* Skills */}
        <Skills />
      </main>
      <FloatingButton />
    </>
  );
}
