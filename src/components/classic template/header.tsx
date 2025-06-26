const Header = () => {
  return (
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
  );
};

export default Header;
