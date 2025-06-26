const Header = () => {
  // Resume details
  const firstName:string = "KRISTI";
  const lastName:string = "LAAR";
  const occupation:string = "REGISTERED NURSE";
  const phoneNumber:string = "07059633957";
  const email:string = "kristi@example.com";
  const linkedinUrl:string = "linkedin.com/aguhenry";
  const location:string = "Rivers, Nigeria";


  return (
    <section className="mt-5 flex flex-col gap-y-0.5 items-center justify-center text-center w-full">
      <h1 className="uppercase text-center font-black text-2xl">
        {`${firstName} ${lastName}`}
      </h1>
      <h4 className="capitalize text-sm text-black font-normal">
        {occupation}
      </h4>
      <div className="flex items-center gap-x-2">
        <p className="text-sm text-black font-light">{phoneNumber}</p>
        <span>*</span>
        <p className="text-sm text-black font-light">{email}</p>
        <span>*</span>
        <p className="text-sm text-black font-light">{linkedinUrl}</p>
        <span>*</span>
        <p className="text-sm text-black font-light">{location}</p>
      </div>
    </section>
  );
};

export default Header;
