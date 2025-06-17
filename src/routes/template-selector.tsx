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
      path: "/classic-template",
      title: "Classic Template",
      image: "/images/template2.png",
    },
    {
      path: "/modern-template",
      title: "Modern Template",
      image: "/images/template1.png",
    },
  ];
  return (
    <main className="my-14 w-[80%] mx-auto font-inter">
      <h2 className="text-center text-3xl font-bold">Pick a template!</h2>
      <div className="mt-10 flex justify-center items-center gap-x-10">
        {selectTemplate.map((template) => (
          <div className="group">
            <div className="h-[600px] w-[450px] border overflow-hidden">
              <Link
                to={template.path}
              >
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full border object-cover  transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </Link>
            </div>
            <p className="text-center mt-2.5 text-base font-semibold font-poppins">
              {template.title}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
