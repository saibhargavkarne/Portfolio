import Link from "next/link";
import { ArrowRight, Download, Mail, ChevronRight } from "lucide-react";
import { LinkedInIcon } from "@/components/SocialIcons";
import FadeUp from "@/components/FadeUp";
import {
  metrics,
  positioningTags,
  projects,
  skills,
  contact,
  RESUME_URL,
} from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2563EB]/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#06B6D4]/6 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
              <span className="text-[#06B6D4] text-xs font-semibold tracking-wide">
                Available for Senior D365 / Power Platform Roles
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
              Enterprise{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                Dynamics 365
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">
                Power Platform
              </span>{" "}
              Developer
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-4">
              I build scalable enterprise business applications using Dynamics 365 CE, Power Apps,
              Dataverse, C# Plugins, Power Automate, Azure, REST APIs, and SAP integrations.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-gray-400 text-base max-w-2xl leading-relaxed mb-10">
              5+ years of experience delivering enterprise workflow automation, model-driven and
              canvas applications, Dataverse architecture, plugin-based validations, approval
              systems, integration pipelines, and ALM across Dev/Test/Prod environments.
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#2563EB] text-white rounded-xl font-medium hover:bg-[#1D4ED8] transition-colors"
              >
                View Enterprise Projects
                <ArrowRight size={16} />
              </Link>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-[#1E293B] text-white rounded-xl font-medium hover:bg-white/10 hover:border-[#06B6D4]/30 transition-colors"
              >
                <Download size={16} />
                Download Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-[#1E293B] text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                <Mail size={16} />
                Contact Me
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex items-center gap-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-400 text-sm hover:text-[#06B6D4] transition-colors"
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </a>
              <span className="text-gray-700">·</span>
              <span className="text-gray-400 text-sm">{contact.location}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Metrics ──────────────────────────────────────────────── */}
      <section className="border-y border-[#1E293B] bg-[#111827]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {metrics.map((m, i) => (
              <FadeUp key={m.label} delay={i * 0.06}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mb-1">
                    {m.value}
                  </p>
                  <p className="text-gray-400 text-xs leading-snug">{m.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeUp>
            <div>
              <p className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-3">
                About
              </p>
              <h2 className="text-3xl font-bold text-white mb-6">
                Enterprise-grade delivery across the full Power Platform stack
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                I am a Dynamics 365 CE and Power Platform developer focused on building
                enterprise-grade business applications that connect people, processes, and systems.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                My work spans Canvas Apps, Model-Driven Apps, Dataverse schema design, C# plugins,
                JavaScript customizations, Power Automate cloud/desktop flows, REST API
                integrations, SAP writebacks, Azure services, and ALM release management.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I enjoy solving workflow-heavy business problems where reliability, security,
                performance, and maintainability matter.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-4">
                Expertise Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {positioningTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[#111827] border border-[#1E293B] rounded-lg text-sm text-gray-300 hover:border-[#2563EB]/40 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Projects Preview ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <FadeUp>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-1">
                Enterprise Projects
              </p>
              <h2 className="text-2xl font-bold text-white">Featured Delivery Work</h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1.5 text-[#06B6D4] text-sm font-medium hover:text-white transition-colors"
            >
              View all <ChevronRight size={16} />
            </Link>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.08}>
              <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5 hover:border-[#2563EB]/30 transition-all duration-300 h-full">
                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${p.color} mb-4`} />
                <p className="text-[#06B6D4] text-xs font-semibold uppercase tracking-wide mb-1">
                  {p.client}
                </p>
                <h3 className="text-white font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {p.overview}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.techStack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-[#0B1220] border border-[#1E293B] rounded text-gray-400 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                  {p.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-gray-500 text-xs">
                      +{p.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-[#06B6D4] text-sm font-medium"
          >
            View all projects <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Skills Preview ───────────────────────────────────────── */}
      <section className="border-t border-[#1E293B] bg-[#111827]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeUp>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-1">
                  Technical Skills
                </p>
                <h2 className="text-2xl font-bold text-white">Full-Stack Power Platform Depth</h2>
              </div>
              <Link
                href="/skills"
                className="hidden sm:flex items-center gap-1.5 text-[#06B6D4] text-sm font-medium hover:text-white transition-colors"
              >
                Full list <ChevronRight size={16} />
              </Link>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.slice(0, 6).map((s, i) => (
              <FadeUp key={s.category} delay={i * 0.06}>
                <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-3">{s.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.slice(0, 6).map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 bg-[#0B1220] border border-[#1E293B] rounded text-gray-400 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                    {s.items.length > 6 && (
                      <span className="px-2 py-0.5 text-gray-500 text-xs">
                        +{s.items.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeUp>
          <div className="relative bg-gradient-to-r from-[#2563EB]/15 to-[#06B6D4]/15 border border-[#2563EB]/20 rounded-3xl p-10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-transparent pointer-events-none" />
            <p className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-3">
              Open to Opportunities
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Let&apos;s build enterprise-grade D365 solutions together
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Available for senior Dynamics 365 / Power Platform developer roles, consulting
              engagements, and enterprise automation projects.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-xl font-medium hover:bg-[#1D4ED8] transition-colors"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-[#1E293B] text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                <LinkedInIcon size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
