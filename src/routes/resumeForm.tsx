import { ResumeForm } from "@/components/resumeform"
import { Toaster } from "sonner"

export const Route = createFileRoute({
  component: RouteComponent,
})



function RouteComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center"> <h1 className="text-3xl font-bold tracking-tight">Build Your Resume</h1> <p className="mt-2 text-muted-foreground max-w-xl mx-auto"> Fill out the form below to create a professional resume. You can preview your changes in real time and export your resume as HTML or PDF when you're done. </p> </div>
      <ResumeForm />
      <Toaster />
    </div>
  )
}
