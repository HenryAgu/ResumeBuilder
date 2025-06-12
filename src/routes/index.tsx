import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="flex items-center h-screen justify-center w-full font-inter">
      <Link to="/templateSelector">
        <Button size="lg" className="cursor-pointer text-base">Get started</Button>
      </Link>
    </div>
  );
}
