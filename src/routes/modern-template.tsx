export const Route = createFileRoute({
  component: ModernTemplateComponent,
});

interface Schools {
  title: string;
}

interface Experience {
  startMonth: string;
  endMonth: string;
  startYear: number;
  endYear: number;
  role: string;
}

function ModernTemplateComponent() {
  // schools array
  const schools: Schools[] = [
    {
      title: "Bellows College | Madison, WI",
    },
    {
      title: "Bachelors of Science in Nursing",
    },
  ];

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

  return (
    <main className="my-10 w-[60%] h-fit mx-auto shadow-xl flex">
      <div className="basis-[35%] bg-[#dde3eb] pt-20 pb-80 px-10 flex flex-col">
        <div className="flex items-end justify-end">
          <img
            src="/images/profile.png"
            alt=""
            className="w-[207px] h-[205px] p-1 border border-black"
          />
        </div>
        <div className="pl-8 mt-10 flex flex-col">
          <p className="font-serif text-2xl font-medium">CONTACT</p>
          <p className="text-sm font-inter font-normal mt-5 w-[70%]">
            111 1st Avenue Redmond, WA 65432 909.555.0100
          </p>
          <p className="text-sm font-inter font-normal w-[70%]">
            kristi@example.com
          </p>
          <p className="text-sm font-inter font-normal w-[70%]">
            www.interestingsite.com
          </p>
          <div className="h-[0.5px] bg-black mt-10"></div>
        </div>
        <div className="pl-8 mt-10 flex flex-col">
          <p className="font-serif text-2xl font-medium">COMMUNICATION</p>
          <p className="text-sm font-inter font-normal mt-5 w-[90%]">
            I have received several awards for my outstanding communication
            skills, including recognition for providing exceptional patient
            education and counseling.
          </p>
          <div className="h-[0.5px] bg-black mt-10"></div>
        </div>
        <div className="pl-8 my-10 flex flex-col">
          <p className="font-serif text-2xl font-medium">LEADERSHIP</p>
          <p className="text-sm font-inter font-normal mt-5 w-[90%]">
            I received the "Outstanding Nursing Student" award during my time in
            nursing school, and I have been recognized for my contributions to
            patient safety and satisfaction in my current role.
          </p>
          <div className="h-[0.5px] bg-black mt-10"></div>
        </div>
      </div>
      <div className="basis-[65%] bg-white pt-20 pb-80 px-10 pr-32 flex flex-col">
        <div className="">
          <h1 className="font-serif text-6xl leading-16 tracking-widest">
            KRISTI
          </h1>
          <h1 className="font-serif text-6xl leading-16 text-[#999ab0] tracking-widest">
            LAAR
          </h1>
          <div className="h-[0.5px] bg-black mt-5"></div>
        </div>
        <div className="my-5">
          <p className="text-2xl tracking-wider font-medium">
            REGISTERED NURSE
          </p>
        </div>
        {/* Education */}
        <div className="my-5">
          <p className="font-serif text-2xl font-medium">EDUCATION</p>
          <div className="my-2 mt-5 flex flex-col gap-y-2">
            {schools.map((school) => (
              <p className="text-sm font-inter font-normal">{school.title}</p>
            ))}
            <p className="text-sm font-inter font-normal">
              Relevant coursework: Anatomy and physiology, pharmacology, nursing
              ethics, and patient care management.
            </p>
          </div>
          <div className="h-[0.5px] bg-black mt-10"></div>
        </div>

        {/* Experience */}
        <div className="my-5">
          <p className="font-serif text-2xl font-medium">EXPERIENCE</p>
          <div className="mt-5 flex flex-col gap-y-5">
            {experience.map((item) => (
              <div className="flex flex-col gap-y-1.5">
                <p className="text-sm font-inter font-normal">
                  November 20XX–October 20XX
                </p>
                <p className="text-sm font-inter font-normal">
                  Registered Nurse | Pediatrics | Wholeness Healthcare
                </p>
              </div>
            ))}
            <p className="text-sm font-inter font-normal">
              I have a proven track record of delivering high-quality care while
              maintaining patient safety and satisfaction
            </p>
          </div>
          <div className="h-[0.5px] bg-black mt-10"></div>
        </div>

        {/* References */}
        <div className="my-5">
          <p className="font-serif text-2xl font-medium">REFERENCES</p>
          <p className="text-sm font-inter font-normal">
            [Available upon request]{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
