import { Link } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: RouteComponent,
});

interface SelectTemplate {
  path: string;
  title: string;
  image: string;
}

function RouteComponent() {
  const selectTemplate: SelectTemplate[] = [
    {
      path: "/",
      title: "Classic Template",
      image: "../../public/images/template1.png",
    },
    {
      path: "/",
      title: "Modern Template",
      image: "../../public/images/template2.png",
    },
  ];
  return (
    <main className="my-14 w-[80%] mx-auto font-inter">
      <h2 className="text-center text-3xl font-bold">Pick a template!</h2>
      <div className="mt-10 flex justify-center items-center gap-x-10">
        {selectTemplate.map((template) => (
          <div className="group">
            <Link
              to={template.path}
              className=""
            >
              <img
                src={template.image}
                alt={template.title}
                className="w-[350px] border border-black hover:border-2 transition-all duration-200 ease-in-out"
              />
            </Link>
            <p className="text-center mt-2.5 text-base font-semibold font-poppins">
              {template.title}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
