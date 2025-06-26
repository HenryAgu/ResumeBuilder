const Summary = () => {
  const summary: string =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet nihil exercitationem, asperiores cupiditate deserunt vero expedita quo nemo dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet nihil exercitationem, asperiores cupiditate deserunt vero expedita quo nemo dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet nihil exercitationem, asperiores cupiditate deserunt vero expedita quo nemo dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet nihil exercitationem, asperiores cupiditate deserunt vero expedita quo nemo dolores!";
  return (
    <section className="mt-5 flex flex-col items-center justify-center text-center gap-y-0.5">
      <p className="pb-2 border-b-[1.5px] border-black w-full text-base font-medium">
        Summary
      </p>
      <p className="text-sm text-black font-light text-left pt-2">{summary}</p>
    </section>
  );
};

export default Summary;
