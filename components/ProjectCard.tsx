import { ArrowUpRight, Building2 } from "lucide-react";

interface Project {
  id: string;
  client: string;
  title: string;
  domain: string;
  role: string;
  period: string;
  overview: string;
  workflow: string;
  techStack: string[];
  impact: string[];
  color: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden hover:border-[#2563EB]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.08)] flex flex-col">
      {/* Header bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Client + Domain */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 size={14} className="text-[#06B6D4]" />
              <span className="text-[#06B6D4] text-xs font-semibold uppercase tracking-wide">
                {project.client}
              </span>
            </div>
            <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
            <p className="text-gray-500 text-xs mt-1">{project.domain}</p>
          </div>
          <span className="text-gray-500 text-xs whitespace-nowrap shrink-0 mt-1">{project.period}</span>
        </div>

        {/* Overview */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.overview}</p>

        {/* Workflow */}
        <div className="mb-5">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">
            Core Workflow
          </p>
          <p className="text-gray-300 text-sm leading-relaxed bg-[#0B1220] border border-[#1E293B] rounded-lg px-3 py-2.5 font-mono text-xs">
            {project.workflow}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-[#0B1220] border border-[#1E293B] rounded text-gray-400 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mt-auto">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">
            Business Impact
          </p>
          <ul className="space-y-1.5">
            {project.impact.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#06B6D4] mt-0.5 shrink-0 text-xs">▸</span>
                <span className="text-gray-400 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Role badge */}
        <div className="mt-5 pt-4 border-t border-[#1E293B] flex items-center justify-between">
          <span className="text-gray-500 text-xs">{project.role}</span>
          <ArrowUpRight
            size={14}
            className="text-gray-600 group-hover:text-[#06B6D4] transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
