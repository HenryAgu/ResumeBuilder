const MainHeader = () => {
  const firstName: string = "KRISTI";
  const lastName: string = "LAAR";
  const occupation: string = "REGISTERED NURSE";
  return (
    <div>
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
    </div>
  );
};

export default MainHeader;
