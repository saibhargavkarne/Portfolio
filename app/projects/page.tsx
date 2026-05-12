import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import FadeUp from "@/components/FadeUp";
import { projects } from "@/lib/portfolio-data";

export const metadata = {
  title: "Enterprise Projects — Saibhargav Karne",
  description:
    "Enterprise Dynamics 365 and Power Platform delivery projects across Kraft Heinz, Microsoft, Adidas, and banking clients.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeUp>
        <SectionHeader
          eyebrow="Delivery Portfolio"
          title="Enterprise Projects"
          subtitle="End-to-end delivery work across manufacturing, retail, financial services, and consulting — spanning Canvas Apps, Model-Driven Apps, Dataverse, C# plugins, Power Automate, and SAP integration."
        />
      </FadeUp>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <FadeUp key={project.id} delay={i * 0.07}>
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
