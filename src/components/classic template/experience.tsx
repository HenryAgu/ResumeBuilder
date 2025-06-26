import React from "react";

interface Experiment {
  company: string;
  role: string;
  description?: string;
  highlight: string[];
  location: string;
  startYear: number;
  endYear: number;
}

const Experience = () => {
  const experiment: Experiment[] = [
    {
      company: "Lauzon",
      role: "Investment Banking Analyst",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut dolorem provident possimus ducimus.",
      highlight: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe cumque rem expedita molestiae! Quasi, vel.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe cumque rem expedita molestiae! Quasi, vel.",
      ],
      location: "Chicago, IL",
      startYear: 2018,
      endYear: 2024,
    },
    {
      company: "Lauzon",
      role: "Investment Banking Analyst",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut dolorem provident possimus ducimus.",
      highlight: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe cumque rem expedita molestiae! Quasi, vel.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe cumque rem expedita molestiae! Quasi, vel.",
      ],
      location: "Chicago, IL",
      startYear: 2018,
      endYear: 2024,
    },
    {
      company: "Lauzon",
      role: "Investment Banking Analyst",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut dolorem provident possimus ducimus.",
      highlight: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe cumque rem expedita molestiae! Quasi, vel.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe cumque rem expedita molestiae! Quasi, vel.",
      ],
      location: "Chicago, IL",
      startYear: 2018,
      endYear: 2024,
    },
    {
      company: "Lauzon",
      role: "Investment Banking Analyst",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut dolorem provident possimus ducimus.",
      highlight: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe cumque rem expedita molestiae! Quasi, vel.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe cumque rem expedita molestiae! Quasi, vel.",
      ],
      location: "Chicago, IL",
      startYear: 2018,
      endYear: 2024,
    },
  ];

  return (
    <section className="mt-10 flex flex-col gap-y-0.5">
      <p className="pb-2 border-b-[1.5px] border-black w-full text-center text-base font-medium">
        Experience
      </p>
      {experiment.map((item) => (
        <div className="my-5 flex justify-between gap-x-2">
          <div className="basis-[80%] flex flex-col">
            <p className="text-lg leading-6 text-black">{item.company}</p>
            <p className="text-lg leading-6 text-black">{item.role}</p>
            <div className="mt-1">
              <span className="text-sm">{item.description}</span>
              {/* List of Achievements */}
              <ul className="list-disc pl-5">
                {item.highlight.map((achievement) => (
                  <li className="text-sm text-black">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="basis-[20%] flex flex-col items-end">
            <p>{item.location}</p>
            <p>
              {item.startYear} - {item.endYear}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
