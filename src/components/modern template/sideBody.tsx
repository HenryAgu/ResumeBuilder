const SideBody = () => {
  const leadership: string = `I received the "Outstanding Nursing Student" award during my time in nursing school, and I have been recognized for my contributions to patient safety and satisfaction in my current role`;
  const communication: string = `I have received several awards for my outstanding communication skills, including recognition for providing exceptional patient education and counseling.`;

  return (
    <div>
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
  );
};

export default SideBody;
