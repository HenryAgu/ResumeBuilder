/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

// Updated schema with optional image field
 // eslint-disable-next-line react-refresh/only-export-components
 export const resumeSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  title: z.string().min(1, "Title is required"),
  address: z.string().min(1, "Address is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Invalid phone number"),
  image: z.string().optional().or(z.literal("")), // New optional image field
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  linkedIn: z.string().url("Invalid URL").optional().or(z.literal("")),
  github: z.string().url("Invalid URL").optional().or(z.literal("")),
  summary: z.string().min(10, "Summary is too short"),
  skills: z
    .array(
      z.object({
        skill: z.string().min(1, "Skill cannot be empty"),
      }),
    )
    .min(1, "Add at least one skill"),
  education: z
    .array(
      z.object({
        institution: z.string().min(1, "Institution is required"),
        degree: z.string().min(1, "Degree is required"),
        startDate: z.string().min(1, "Start date is required"),
        endDate: z.string().min(1, "End date is required"),
        description: z.string().optional().or(z.literal("")),
      }),
    )
    .min(1, "Add at least one education entry"),
  experience: z
    .array(
      z.object({
        company: z.string().min(1, "Company is required"),
        role: z.string().min(1, "Role is required"),
        startDate: z.string().min(1, "Start date is required"),
        endDate: z.string().min(1, "End date is required"),
        description: z.string().min(10, "Description is too short"),
      }),
    )
    .min(1, "Add at least one work experience"),
  certifications: z
    .array(
      z.object({
        title: z.string().min(1, "Title is required"),
        issuer: z.string().min(1, "Issuer is required"),
        date: z.string().min(1, "Date is required"),
      }),
    )
    .optional(),
  projects: z
    .array(
      z.object({
        name: z.string().min(1, "Project name is required"),
        description: z.string().min(10, "Description is too short"),
        link: z.string().url("Invalid URL").optional().or(z.literal("")),
        technologies: z.array(z.string()).optional(),
      }),
    )
    .optional(),
});

// Reusable InputField component
const InputField = ({
  name,
  label,
  placeholder,
  type = "text",
  control,
  accept,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  control: any;
  accept?: string;
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-sm font-medium text-gray-700">{label}</FormLabel>
        <FormControl>
          <Input
            type={type}
            placeholder={placeholder}
            accept={accept}
            className="border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            {...(type === "file"
              ? {
                onChange: (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      field.onChange(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  } else {
                    field.onChange("");
                  }
                },
                value: undefined, // File inputs don't use value
              }
              : field)}
          />
        </FormControl>
        <FormMessage className="text-red-500 text-xs" />
      </FormItem>
    )}
  />
);

export function ResumeForm() {
  const form = useForm<z.infer<typeof resumeSchema>>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      fullName: "",
      title: "",
      email: "",
      phone: "",
      address: "",
      image: "", // Default for new image field
      website: "",
      linkedIn: "",
      github: "",
      summary: "",
      skills: [{ skill: "" }],
      education: [
        {
          institution: "",
          degree: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
      experience: [
        {
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
      certifications: [],
      projects: [],
    },
    mode: "onChange",
    shouldUnregister: false,
  });

  const {
    formState: { isSubmitting, isValid },
  } = form;
  const navigate = useNavigate();
  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem("resumeFormData", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [form, form.watch]);
  async function onSubmit(data: z.infer<typeof resumeSchema>) {
    const finalData = {
      ...data,
      image: data.image || undefined, // Handle empty image as undefined
      certifications: data.certifications?.length ? data.certifications : undefined,
      projects: data.projects?.length ? data.projects : undefined,
    };

    toast(
      <div>
        <p className="font-bold">You submitted the following values:</p>
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(finalData, null, 2)}</code>
        </pre>
      </div>,
    );
    navigate({ to: "/resumePreview" });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl border border-gray-200"
      >
        {/* Personal Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              name="fullName"
              label="Full Name"
              placeholder="John Doe"
              control={form.control}
            />
            <InputField
              name="title"
              label="Title"
              placeholder="e.g. Software Engineer"
              control={form.control}
            />
            <InputField
              name="email"
              label="Email"
              placeholder="john@example.com"
              type="email"
              control={form.control}
            />
            <InputField
              name="phone"
              label="Phone Number"
              placeholder="+234 (805) 385 894"
              control={form.control}
            />
            <InputField
              name="address"
              label="Address"
              placeholder="123 Main St, City"
              control={form.control}
            />
            <InputField
              name="image"
              label="Profile Image (Optional)"
              type="file"
              accept="image/*"
              control={form.control}
            />
            <InputField
              name="website"
              label="Website (Optional)"
              placeholder="https://yourwebsite.com"
              control={form.control}
            />
            <InputField
              name="linkedIn"
              label="LinkedIn (Optional)"
              placeholder="https://linkedin.com/in/yourprofile"
              control={form.control}
            />
            <InputField
              name="github"
              label="GitHub (Optional)"
              placeholder="https://github.com/yourprofile"
              control={form.control}
            />
          </div>
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Summary</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Brief summary about yourself"
                    className="border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
              </FormItem>
            )}
          />
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
          {form.watch("skills").map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div key={index} className="flex items-end gap-4">
              <FormField
                control={form.control}
                name={`skills.${index}.skill`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Skill
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. JavaScript"
                        className="border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="h-10 w-10 hover:bg-red-600 transition-colors"
                onClick={() => {
                  if (form.getValues("skills").length > 1) {
                    form.setValue(
                      "skills",
                      form.getValues("skills").filter((_, i) => i !== index),
                    );
                  }
                }}
              >
                ×
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="hover:bg-gray-100 transition-colors"
            onClick={() =>
              form.setValue("skills", [...form.getValues("skills"), { skill: "" }])
            }
          >
            + Add Skill
          </Button>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          {form.watch("education").map((_, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  name={`education.${index}.institution`}
                  label="Institution"
                  placeholder="e.g. Harvard University"
                  control={form.control}
                />
                <InputField
                  name={`education.${index}.degree`}
                  label="Degree"
                  placeholder="e.g. B.Sc. Computer Science"
                  control={form.control}
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    name={`education.${index}.startDate`}
                    label="Start Date"
                    type="month"
                    control={form.control}
                    placeholder=""
                  />
                  <InputField
                    name={`education.${index}.endDate`}
                    label="End Date"
                    type="month"
                    control={form.control}
                    placeholder=""
                  />
                </div>
                <FormField
                  control={form.control}
                  name={`education.${index}.description`}
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Description (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Additional details about your education"
                          className="border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              {form.getValues("education").length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="mt-4 hover:bg-red-600 transition-colors"
                  onClick={() => {
                    form.setValue(
                      "education",
                      form.getValues("education").filter((_, i) => i !== index),
                    );
                  }}
                >
                  Remove Education
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="hover:bg-gray-100 transition-colors"
            onClick={() =>
              form.setValue("education", [
                ...form.getValues("education"),
                {
                  institution: "",
                  degree: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                },
              ])
            }
          >
            + Add Education
          </Button>
        </div>

        {/* Experience Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
          {form.watch("experience").map((_, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  name={`experience.${index}.company`}
                  label="Company"
                  placeholder="e.g. Google"
                  control={form.control}
                />
                <InputField
                  name={`experience.${index}.role`}
                  label="Role"
                  placeholder="e.g. Software Engineer"
                  control={form.control}
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    name={`experience.${index}.startDate`}
                    label="Start Date"
                    type="month"
                    control={form.control}
                    placeholder=""
                  />
                  <InputField
                    name={`experience.${index}.endDate`}
                    label="End Date"
                    type="month"
                    control={form.control}
                    placeholder=""
                  />
                </div>
                <FormField
                  control={form.control}
                  name={`experience.${index}.description`}
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your responsibilities and achievements"
                          className="border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              {form.getValues("experience").length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="mt-4 hover:bg-red-600 transition-colors"
                  onClick={() => {
                    form.setValue(
                      "experience",
                      form.getValues("experience").filter((_, i) => i !== index),
                    );
                  }}
                >
                  Remove Experience
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="hover:bg-gray-100 transition-colors"
            onClick={() =>
              form.setValue("experience", [
                ...form.getValues("experience"),
                {
                  company: "",
                  role: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                },
              ])
            }
          >
            + Add Experience
          </Button>
        </div>

        {/* Projects Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Projects (Optional)</h2>
          {form.watch("projects")?.map((_, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  name={`projects.${index}.name`}
                  label="Project Name"
                  placeholder="e.g. Portfolio Website"
                  control={form.control}
                />
                <InputField
                  name={`projects.${index}.technologies`}
                  label="Technologies Used (Optional)"
                  placeholder="e.g. React, Node.js"
                  control={form.control}
                  {...{
                    value: form.watch(`projects.${index}.technologies`)?.join(", ") || "",
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                      form.setValue(
                        `projects.${index}.technologies`,
                        e.target.value
                          .split(",")
                          .map((s) => s.trim())
                          .filter(Boolean),
                      ),
                  }}
                />
                <FormField
                  control={form.control}
                  name={`projects.${index}.description`}
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Brief details about project"
                          className="border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />
                <div className="md:col-span-2 flex items-end gap-4">
                  <InputField
                    name={`projects.${index}.link`}
                    label="Project Link (Optional)"
                    placeholder="https://yourprojectlink.com"
                    control={form.control}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="h-10 w-10 hover:bg-red-600 transition-colors"
                    onClick={() => {
                      form.setValue(
                        "projects",
                        (form.getValues("projects") ?? []).filter((_, i) => i !== index),
                      );
                    }}
                  >
                    ×
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="hover:bg-gray-100 transition-colors"
            onClick={() =>
              form.setValue("projects", [
                ...(form.getValues("projects") ?? []),
                { name: "", description: "", link: "", technologies: [] },
              ])
            }
          >
            + Add Project
          </Button>
        </div>

        {/* Certifications Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Certifications (Optional)</h2>
          {form.watch("certifications")?.map((_, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="p-8 border border-gray-200 rounded-lg shadow-sm bg-gray-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <InputField
                  name={`certifications.${index}.title`}
                  label="Title"
                  placeholder="e.g. AWS Certified Solutions Architect"
                  control={form.control}
                />
                <InputField
                  name={`certifications.${index}.issuer`}
                  label="Issuer"
                  placeholder="e.g. Amazon"
                  control={form.control}
                />
                <InputField
                  name={`certifications.${index}.date`}
                  label="Date"
                  type="month"
                  placeholder=""
                  control={form.control}
                />
              </div>
              <div className="mt-6 flex justify-end">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="hover:bg-red-600 transition-colors"
                  onClick={() => {
                    form.setValue(
                      "certifications",
                      (form.getValues("certifications") ?? []).filter(
                        (_, i) => i !== index,
                      ),
                    );
                  }}
                >
                  Remove Certification
                </Button>
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            className="hover:bg-gray-100 transition-colors"
            onClick={() =>
              form.setValue("certifications", [
                ...(form.getValues("certifications") ?? []),
                { title: "", issuer: "", date: "" },
              ])
            }
          >
            + Add Certification
          </Button>
        </div>

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          {isSubmitting ? "Generating..." : "Generate Resume"}
        </Button>
      </form>
    </Form>
  );
}