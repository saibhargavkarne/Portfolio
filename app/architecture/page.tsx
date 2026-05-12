import SectionHeader from "@/components/SectionHeader";
import FadeUp from "@/components/FadeUp";
import { architectureLayers, architectureCards } from "@/lib/portfolio-data";
import {
  LayoutDashboard,
  Database,
  Code2,
  Zap,
  Plug,
  Globe,
  Bell,
} from "lucide-react";

export const metadata = {
  title: "Integration Architecture — Saibhargav Karne",
  description:
    "Enterprise Dynamics 365 and Power Platform integration architecture — Dataverse, plugins, Power Automate, SAP, Azure Functions, and ALM.",
};

const iconMap: Record<string, React.ReactNode> = {
  Layout: <LayoutDashboard size={18} />,
  Database: <Database size={18} />,
  Code2: <Code2 size={18} />,
  Zap: <Zap size={18} />,
  Plug: <Plug size={18} />,
  Globe: <Globe size={18} />,
  Bell: <Bell size={18} />,
};

export default function ArchitecturePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeUp>
        <SectionHeader
          eyebrow="System Design"
          title="Integration Architecture"
          subtitle="End-to-end enterprise integration patterns connecting Power Platform, Dataverse, C# plugins, Power Automate, Azure, and external systems like SAP."
        />
      </FadeUp>

      {/* Stack diagram */}
      <FadeUp delay={0.05}>
        <div className="mb-16">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-6">
            Standard Enterprise Stack
          </p>
          <div className="relative max-w-2xl">
            {architectureLayers.map((layer, i) => (
              <div key={layer.label} className="relative flex items-start gap-4 mb-0">
                {/* Connector line */}
                {i < architectureLayers.length - 1 && (
                  <div className="absolute left-5 top-10 w-px h-8 bg-gradient-to-b from-[#2563EB]/40 to-[#06B6D4]/20" />
                )}

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#111827] border border-[#1E293B] flex items-center justify-center text-[#06B6D4] shrink-0 mt-1">
                  {iconMap[layer.icon]}
                </div>

                {/* Content */}
                <div className="bg-[#111827] border border-[#1E293B] rounded-xl px-4 py-3 flex-1 mb-3 hover:border-[#2563EB]/30 transition-colors">
                  <p className="text-white font-semibold text-sm">{layer.label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Architecture cards */}
      <FadeUp>
        <p className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-6">
          Architecture Patterns
        </p>
      </FadeUp>
      <div className="grid md:grid-cols-2 gap-5">
        {architectureCards.map((card, i) => (
          <FadeUp key={card.title} delay={i * 0.06}>
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 hover:border-[#2563EB]/30 transition-all duration-300 h-full">
              <h3 className="text-white font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{card.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[#0B1220] border border-[#1E293B] rounded text-gray-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
