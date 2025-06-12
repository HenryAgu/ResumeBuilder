import { Link } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="flex items-center h-screen justify-center w-full">
      <Link
        to="/resumeForm"
        className="bg-black text-white text-base px-6 py-3.5 rounded-sm transition-all duration-200 ease-in-out hover:opacity-75"
      >
        Get started
      </Link>
    </div>
  );
}
