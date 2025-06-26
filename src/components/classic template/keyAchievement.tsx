interface Achievement {
  title: string;
  place: string;
  startYear: number;
  endYear: number;
}

const KeyAchievement = () => {
  const achievement: Achievement[] = [
    {
      title: "Core Member, Finomaniac",
      place: "Finance Club, MBA, BITS Pilani,",
      startYear: 2013,
      endYear: 2014,
    },
    {
      title: "Core Member, Finomaniac",
      place: "Finance Club, MBA, BITS Pilani,",
      startYear: 2013,
      endYear: 2014,
    },
    {
      title: "Core Member, Finomaniac",
      place: "Finance Club, MBA, BITS Pilani,",
      startYear: 2013,
      endYear: 2014,
    },
  ];
  return (
    <section className="my-10 flex flex-col gap-y-0.5">
      <p className="pb-2 border-b-[1.5px] border-black w-full text-center text-base font-medium">
        Key Achievement
      </p>
      <div className="grid grid-cols-3 gap-10 mt-2">
        {achievement.map((item) => (
          <div className="flex flex-col">
            <p className="text-base text-black font-normal">{item.title}</p>
            <span className="text-sm text-black font-light">
              {`${item.place}, ${item.startYear}-${item.endYear}`}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyAchievement;
