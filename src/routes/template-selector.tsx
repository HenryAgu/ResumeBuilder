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
      image: "/images/template1.png",
    },
    {
      path: "/modern-template",
      title: "Modern Template",
      image: "/images/template2.png",
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
              className="h-[500px] w-[350px] overflow-hidden bg-red-900 transition-all duration-200 ease-in scale-100"
            >
              <img
                src={template.image}
                alt={template.title}
                className="w-[350px] h-[500px] border object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
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
