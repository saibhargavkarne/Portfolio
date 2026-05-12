import ProjectCard from "@/components/ProjectCard";
import FadeUp from "@/components/FadeUp";
import { projects } from "@/lib/portfolio-data";

export const metadata = {
  title: "Projects — Saibhargav Karne",
  description:
    "Dynamics 365 and Power Platform projects across Kraft Heinz, Microsoft, Adidas, and banking clients.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeUp>
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Work I&apos;ve shipped over the past five years across manufacturing, retail, financial
            services, and consulting.
          </p>
        </div>
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
