import Link from "next/link";
import { ArrowRight, Download, ChevronRight } from "lucide-react";
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
      <section className="min-h-[88vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <FadeUp>
            <p className="text-gray-500 text-sm mb-6 tracking-wide">
              Dallas, TX &nbsp;·&nbsp; Open to new roles
            </p>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
              Dynamics 365{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                &amp;
              </span>{" "}
              Power Platform Developer
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
              I work across the full D365 and Power Platform stack — Canvas Apps, Model-Driven
              Apps, Dataverse, C# plugins, Power Automate, SAP integrations, and Azure.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-gray-500 text-base max-w-xl leading-relaxed mb-10">
              Nine years in. The part I enjoy most is the architecture — getting the data model and
              plugin layer right before the canvas app is even opened.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#2563EB] text-white rounded-xl font-medium hover:bg-[#1D4ED8] transition-colors"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-[#1E293B] text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="flex items-center gap-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-500 text-sm hover:text-[#06B6D4] transition-colors"
              >
                <LinkedInIcon size={14} />
                LinkedIn
              </a>
              <span className="text-gray-700">·</span>
              <a
                href={`mailto:${contact.email}`}
                className="text-gray-500 text-sm hover:text-[#06B6D4] transition-colors"
              >
                {contact.email}
              </a>
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
                  <p className="text-gray-500 text-xs leading-snug">{m.label}</p>
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
              <h2 className="text-2xl font-bold text-white mb-6">How I work</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                I&apos;m a D365 and Power Platform developer based in Dallas. Nine years across
                manufacturing, retail, financial services, and consulting — most of it on
                Dataverse-heavy projects with complex approval workflows and integrations.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                The projects I find most interesting sit at the intersection of Dataverse
                architecture, plugin engineering, and automation — where the data model,
                server-side logic, and flow layer all need to fit together cleanly.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I care about getting the schema right before building the app, writing plugins that
                don&apos;t step on each other, and building flows with real error handling — not
                just the happy path.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              <p className="text-gray-600 text-xs font-medium uppercase tracking-wide mb-4">
                Areas of focus
              </p>
              <div className="flex flex-wrap gap-2">
                {positioningTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[#111827] border border-[#1E293B] rounded-lg text-sm text-gray-400 hover:border-[#2563EB]/40 hover:text-white transition-colors"
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
            <h2 className="text-xl font-bold text-white">Projects</h2>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1.5 text-[#06B6D4] text-sm hover:text-white transition-colors"
            >
              All projects <ChevronRight size={15} />
            </Link>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.08}>
              <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5 hover:border-[#2563EB]/30 transition-all duration-300 h-full">
                <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${p.color} mb-4`} />
                <p className="text-[#06B6D4] text-xs mb-1">{p.client}</p>
                <h3 className="text-white font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {p.overview}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.techStack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-[#0B1220] border border-[#1E293B] rounded text-gray-500 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                  {p.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-gray-600 text-xs">
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
            className="inline-flex items-center gap-1.5 text-[#06B6D4] text-sm"
          >
            All projects <ChevronRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── Skills Preview ───────────────────────────────────────── */}
      <section className="border-t border-[#1E293B] bg-[#111827]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeUp>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">Skills</h2>
              <Link
                href="/skills"
                className="hidden sm:flex items-center gap-1.5 text-[#06B6D4] text-sm hover:text-white transition-colors"
              >
                Full list <ChevronRight size={15} />
              </Link>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.slice(0, 6).map((s, i) => (
              <FadeUp key={s.category} delay={i * 0.06}>
                <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-3">{s.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.slice(0, 6).map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 bg-[#0B1220] border border-[#1E293B] rounded text-gray-500 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                    {s.items.length > 6 && (
                      <span className="px-2 py-0.5 text-gray-600 text-xs">
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

      {/* ── Contact nudge ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeUp>
          <div className="border-t border-[#1E293B] pt-12">
            <h2 className="text-xl font-bold text-white mb-2">Working on something?</h2>
            <p className="text-gray-500 mb-6 text-sm">
              I&apos;m open to D365 / Power Platform roles and consulting projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white rounded-lg font-medium hover:bg-[#1D4ED8] transition-colors text-sm"
              >
                Get in touch
                <ArrowRight size={15} />
              </Link>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-[#1E293B] text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-sm"
              >
                <LinkedInIcon size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
