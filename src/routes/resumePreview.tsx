
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import { ModernTemplateComponent } from "./modern-template";
import { useNavigate } from "@tanstack/react-router";
import { resumeSchema } from "@/components/resumeform";

export const Route = createFileRoute({
  component: ResumePreview,
});

function ResumePreview() {
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Retrieve form data and template type from localStorage
  const templateType = localStorage.getItem("templateType") as "classic" | "modern" | null;
  let formData: z.infer<typeof resumeSchema> | null = null;
  try {
    const storedData = localStorage.getItem("resumeFormData");
    if (storedData) {
      formData = resumeSchema.parse(JSON.parse(storedData));
    }
  } catch (error) {
    console.error("Failed to parse form data:", error);
  }

  // Redirect to form if no data or template
  if (!templateType || !formData) {
    navigate({ to: "/resumeForm" });
    toast.error("No resume data found. Please fill out the form first.");
    return null;
  }

  const handleExportPDF = async () => {
    if (!previewRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(previewRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${formData.fullName || "resume"}.pdf`);
      toast.success("PDF exported successfully!");
    } catch (error) {
      toast.error("Failed to export PDF. Please try again.");
      console.error(error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportHTML = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${formData.fullName || "Resume"} - Resume</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .resume-container { max-width: 800px; margin: auto; }
        </style>
      </head>
      <body>
        <div class="resume-container">
          ${previewRef.current?.outerHTML || ""}
        </div>
      </body>
      </html>
    `;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formData.fullName || "resume"}.html`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("HTML exported successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Resume Preview</h1>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
          Review your resume below. You can go back to edit or export it as HTML or PDF.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div ref={previewRef}>
          {templateType === "modern" ? (
            <ModernTemplateComponent data={formData} />
          ) : ( "")}
          {/* // ) : (
          //   <ClassicTemplate data={formData} />
          // )} */}
        </div>
        <div className="flex gap-4 mt-6 justify-center">
          <Button
            onClick={() => navigate({ to: "/resumeForm" })}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Back to Edit
          </Button>
          <Button
            disabled={isExporting}
            onClick={handleExportPDF}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {isExporting ? "Exporting..." : "Export PDF"}
          </Button>
          <Button
            disabled={isExporting}
            onClick={handleExportHTML}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Export HTML
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}