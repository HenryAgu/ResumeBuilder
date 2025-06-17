export const Route = createFileRoute({
  component: RouteComponent,
});

interface Experiment {
  company: string;
  role: string;
  description?: string;
  location: string;
  startYear: number;
  endYear: number;
}

function RouteComponent() {
  const experiment: Experiment[] = [
    {
      company: "Lauzon",
      role: "Investment Banking Analyst",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut dolorem provident possimus ducimus.",
      location: "Chicago, IL",
      startYear: 2018,
      endYear: 2024,
    },
    {
      company: "Lauzon",
      role: "Investment Banking Analyst",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut dolorem provident possimus ducimus.",
      location: "Chicago, IL",
      startYear: 2018,
      endYear: 2024,
    },
    {
      company: "Lauzon",
      role: "Investment Banking Analyst",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut dolorem provident possimus ducimus.",
      location: "Chicago, IL",
      startYear: 2018,
      endYear: 2024,
    },
    {
      company: "Lauzon",
      role: "Investment Banking Analyst",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut dolorem provident possimus ducimus.",
      location: "Chicago, IL",
      startYear: 2018,
      endYear: 2024,
    },
  ];
  return (
    <main className="my-20 w-[60%] h-fit mx-auto shadow-xl flex flex-col p-10 py-20">
      {/* Header */}
      <section className="mt-5 flex flex-col gap-y-0.5 items-center justify-center text-center w-full">
        <h1 className="uppercase text-center font-black text-2xl">
          Agu Chukwuma Henry
        </h1>
        <h4 className="capitalize text-sm text-black font-normal">
          Software Engineer
        </h4>
        <div className="flex items-center gap-x-2">
          <p className="text-sm text-black font-light">+2347059633957</p>
          <span>*</span>
          <p className="text-sm text-black font-light">kristi@example.com</p>
          <span>*</span>
          <p className="text-sm text-black font-light">linkedin.com/aguhenry</p>
          <span>*</span>
          <p className="text-sm text-black font-light">Rivers, Nigeria</p>
        </div>
      </section>
      {/* summary */}
      <section className="mt-5 flex flex-col items-center justify-center text-center gap-y-0.5">
        <p className="pb-2 border-b-[1.5px] border-black w-full text-base font-medium">
          Summary
        </p>
        <p className="text-sm text-black font-light text-left pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet
          nihil exercitationem, asperiores cupiditate deserunt vero expedita quo
          nemo dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odit amet nihil exercitationem, asperiores cupiditate deserunt vero
          expedita quo nemo dolores! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odit amet nihil exercitationem, asperiores
          cupiditate deserunt vero expedita quo nemo dolores! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Odit amet nihil exercitationem,
          asperiores cupiditate deserunt vero expedita quo nemo dolores!
        </p>
      </section>

      {/* Experience */}
      <section className="mt-10 flex flex-col gap-y-0.5">
        <p className="pb-2 border-b-[1.5px] border-black w-full text-center text-base font-medium">
          Experience
        </p>
        {experiment.map((item) => (
          <div className="my-5 flex justify-between gap-x-2">
            <div className="basis-[80%] flex flex-col">
              <p className="text-lg leading-6 text-black">Rolfson</p>
              <p className="text-lg leading-6 text-black">
                Investment Banking Analyst
              </p>
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut
                dolorem provident possimus ducimus.
              </span>
              {/* List of Achievements */}
              <ul className="">
                <li className="text-sm text-black">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Saepe cumque rem expedita molestiae! Quasi, vel.
                </li>
                <li className="text-sm text-black">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Saepe cumque rem expedita molestiae! Quasi, vel.
                </li>
              </ul>
            </div>
            <div className="basis-[20%] flex flex-col items-end">
              <p>Chicago, IL</p>
              <p>2016 - Present</p>
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mt-10 flex flex-col gap-y-0.5">
        <p className="pb-2 border-b-[1.5px] border-black w-full text-center text-base font-medium">
          Education
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col items-start">
            {/* School */}
            <p className="capitalize font-normal text-black text-base">
              University of Port-harcourt
            </p>

            {/* Department */}
            <p className="capitalize font-normal text-black text-base">
              Computer Science
            </p>
          </div>
          <p className="text-base font-normal opacity-85 text-black">
            2018 - 2023
          </p>
        </div>
      </section>

      {/* Key Achievement */}
      <section className="my-10 flex flex-col gap-y-0.5">
        <p className="pb-2 border-b-[1.5px] border-black w-full text-center text-base font-medium">
          Key Achievement
        </p>
        <div className="grid grid-cols-3 gap-x-10 mt-2">
          <div className="flex flex-col">
            <p className="text-base text-black font-normal">
              Core Member, Finomaniac
            </p>
            <span className="text-sm text-black font-light">
              Finance Club, MBA, BITS Pilani, 2013-14
            </span>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-black font-normal">
              Core Member, Finomaniac
            </p>
            <span className="text-sm text-black font-light">
              Finance Club, MBA, BITS Pilani, 2013-14
            </span>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-black font-normal">
              Core Member, Finomaniac
            </p>
            <span className="text-sm text-black font-light">
              Finance Club, MBA, BITS Pilani, 2013-14
            </span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-5 flex flex-col items-center justify-center text-center gap-y-0.5">
        <p className="pb-2 border-b-[1.5px] border-black w-full text-base font-medium">
          Skills
        </p>
        <p className="text-sm text-black font-light text-left pt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          fugiat dolores, facilis dolorem rerum exercitationem accusamus,
          quisquam voluptate, temporibus laudantium nemo enim magnam. Ea,
          debitis.
        </p>
      </section>
    </main>
  );
}
