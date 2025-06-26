const Skills = () => {
  const skills: string =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugiat dolores, facilis dolorem rerum exercitationem accusamus, quisquam voluptate, temporibus laudantium nemo enim magnam. Ea, debitis.";
  return (
    <section className="mt-5 flex flex-col items-center justify-center text-center gap-y-0.5">
      <p className="pb-2 border-b-[1.5px] border-black w-full text-base font-medium">
        Skills
      </p>
      <p className="text-sm text-black font-light text-left pt-2">{skills}</p>
    </section>
  );
};

export default Skills;
