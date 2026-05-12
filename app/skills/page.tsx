import SectionHeader from "@/components/SectionHeader";
import FadeUp from "@/components/FadeUp";
import { skills, certifications } from "@/lib/portfolio-data";
import { BadgeCheck, Calendar, Hash } from "lucide-react";

export const metadata = {
  title: "Skills & Certifications — Saibhargav Karne",
  description:
    "Technical skills across Dynamics 365, Power Platform, C#, Azure, SAP integration, and ALM — plus active Microsoft certifications.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeUp>
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Skills & Certifications"
          subtitle="Deep hands-on expertise across the full Microsoft Power Platform and Dynamics 365 ecosystem, from Dataverse architecture to C# plugin engineering, SAP integration, and ALM pipelines."
        />
      </FadeUp>

      {/* Skills grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {skills.map((skillGroup, i) => (
          <FadeUp key={skillGroup.category} delay={i * 0.06}>
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#2563EB] to-[#06B6D4]" />
                <h2 className="text-white font-bold text-base">{skillGroup.category}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 bg-[#0B1220] border border-[#1E293B] rounded-lg text-gray-300 text-xs hover:border-[#2563EB]/30 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Certifications */}
      <FadeUp>
        <div className="mb-8">
          <p className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-2">
            Certifications
          </p>
          <h2 className="text-2xl font-bold text-white">Microsoft Certified</h2>
        </div>
      </FadeUp>

      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert, i) => (
          <FadeUp key={cert.certNumber} delay={i * 0.08}>
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 hover:border-[#2563EB]/30 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0">
                  <BadgeCheck size={22} className="text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-white font-bold leading-snug">{cert.name}</h3>
                  <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-emerald-400/10 border border-emerald-400/20 rounded text-emerald-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {cert.status}
                  </span>
                </div>
              </div>

              {/* Badge pill */}
              <div className="inline-flex items-center px-3 py-1 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-lg mb-5">
                <span className="text-[#06B6D4] font-mono font-bold text-sm">{cert.badge}</span>
              </div>

              {/* Metadata */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Hash size={13} className="text-gray-600" />
                  <span className="text-gray-500 text-xs">Credential ID:</span>
                  <span className="font-mono text-xs text-gray-300">{cert.credentialId}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Hash size={13} className="text-gray-600" />
                  <span className="text-gray-500 text-xs">Cert Number:</span>
                  <span className="font-mono text-xs text-gray-300">{cert.certNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={13} className="text-gray-600" />
                  <span className="text-gray-500 text-xs">Earned:</span>
                  <span className="text-xs text-gray-300">{cert.earned}</span>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
