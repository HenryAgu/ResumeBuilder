import { use, useState } from "react";

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
  // states
  const [firstName, setFirstName] = useState<string>("KRISTI");
  const [lastName, setLastName] = useState<string>("LAAR");
  const [occupation, setOccupation] = useState<string>("REGISTERED NURSE");
  const [profilePhoto, setProfilePhoto] = useState<string>(
    "/images/profile.png"
  );
  const [address, setAddress] = useState<string>(
    "111 1st Avenue Redmond, WA 65432 909.555.0100"
  );
  const [email, setEmail] = useState<string>("kristi@example.com");
  const [website, setWebsite] = useState("www.interestingsite.com");
  const [coursework, setCoursework] = useState<string>(
    "Anatomy and physiology, pharmacology, nursing ethics, and patient care management."
  );
  const [experienceSummary, setExperienceSummary] = useState<string>(
    "I have a proven track record of delivering high-quality care while maintaining patient safety and satisfaction"
  );
  const [leadership, setLeadership] = useState<string>(
    `I received the "Outstanding Nursing Student" award during my time in nursing school, and I have been recognized for my contributions to patient safety and satisfaction in my current role`
  );
  const [communication, setCommunication] = useState<string>(
    `I have received several awards for my outstanding communication skills, including recognition for providing exceptional patient education and counseling.`
  );

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
        {/* Image */}
        <div className="flex items-end justify-end">
          <img
            src={profilePhoto}
            alt=""
            className="w-[207px] h-[205px] p-1 border border-black"
          />
        </div>
        <div className="pl-8 mt-10 flex flex-col">
          <p className="font-serif text-2xl font-medium">CONTACT</p>
          {/* Address */}
          <p className="text-sm font-inter font-normal mt-5 w-[70%]">
            {address}
          </p>
          <p className="text-sm font-inter font-normal w-[70%]">{email}</p>
          <p className="text-sm font-inter font-normal w-[70%]">{website}</p>
          <div className="h-[0.5px] bg-black mt-10"></div>
        </div>
        <div className="pl-8 mt-10 flex flex-col">
          <p className="font-serif text-2xl font-medium">COMMUNICATION</p>
          {/* Communication */}
          <p className="text-sm font-inter font-normal mt-5 w-[90%]">
            {communication}
          </p>
          <div className="h-[0.5px] bg-black mt-10"></div>
        </div>
        <div className="pl-8 my-10 flex flex-col">
          <p className="font-serif text-2xl font-medium">LEADERSHIP</p>
          {/* Leadership */}
          <p className="text-sm font-inter font-normal mt-5 w-[90%]">
            {leadership}
          </p>
          <div className="h-[0.5px] bg-black mt-10"></div>
        </div>
      </div>
      <div className="basis-[65%] bg-white pt-20 pb-80 px-10 pr-32 flex flex-col">
        {/* Name */}
        <div className="">
          <h1 className="uppercase font-serif text-6xl leading-16 tracking-widest">
            {firstName}
          </h1>
          <h1 className="uppercase font-serif text-6xl leading-16 text-[#999ab0] tracking-widest">
            {lastName}
          </h1>
          <div className="h-[0.5px] bg-black mt-5"></div>
        </div>
        {/* Occupation */}
        <div className="my-5">
          <p className="text-2xl tracking-wider font-medium uppercase">
            {occupation}
          </p>
        </div>
        {/* Education */}
        <div className="my-5">
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
        </div>

        {/* Experience */}
        <div className="my-5">
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
            <p className="text-sm font-inter font-normal">
              {experienceSummary}
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
