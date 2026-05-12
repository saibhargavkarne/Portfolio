import SectionHeader from "@/components/SectionHeader";
import PluginCard from "@/components/PluginCard";
import FadeUp from "@/components/FadeUp";
import { plugins, pluginConcepts } from "@/lib/portfolio-data";

export const metadata = {
  title: "Plugin Engineering — Saibhargav Karne",
  description:
    "C# Dynamics 365 plugin engineering — Pre-Validation, Pre-Operation, and Post-Operation synchronous and asynchronous plugins for enterprise business rules.",
};

export default function PluginsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeUp>
        <SectionHeader
          eyebrow="Backend Engineering"
          title="Plugin Engineering"
          subtitle="Server-side C# plugins enforce business rules, ensure data integrity, and control state transitions at the Dynamics 365 platform level — beyond what UI-layer JavaScript can guarantee."
        />
      </FadeUp>

      {/* Plugin cards */}
      <div className="grid md:grid-cols-2 gap-5 mb-16">
        {plugins.map((plugin, i) => (
          <FadeUp key={plugin.name} delay={i * 0.06}>
            <PluginCard plugin={plugin} />
          </FadeUp>
        ))}
      </div>

      {/* Plugin Technical Concepts */}
      <FadeUp>
        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8">
          <p className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-3">
            Technical Depth
          </p>
          <h2 className="text-xl font-bold text-white mb-6">Plugin SDK Concepts Applied</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pluginConcepts.map((concept) => (
              <div
                key={concept}
                className="flex items-center gap-2 px-3 py-2.5 bg-[#0B1220] border border-[#1E293B] rounded-lg"
              >
                <span className="text-[#06B6D4] text-xs shrink-0">▸</span>
                <span className="text-gray-300 text-sm">{concept}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Architecture note */}
      <FadeUp delay={0.1}>
        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {[
            {
              stage: "Pre-Validation",
              color: "text-rose-400 border-rose-400/20 bg-rose-400/5",
              desc: "Runs before platform validation. Used to block operations based on custom business rules before any database write begins.",
            },
            {
              stage: "Pre-Operation",
              color: "text-amber-400 border-amber-400/20 bg-amber-400/5",
              desc: "Runs inside the database transaction before the core operation. Used for field manipulation, state control, and required-field enforcement.",
            },
            {
              stage: "Post-Operation",
              color: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
              desc: "Runs after the core operation completes. Used for async tasks like integration triggers, audit logging, and notification dispatch.",
            },
          ].map((item) => (
            <div
              key={item.stage}
              className={`border rounded-2xl p-5 ${item.color}`}
            >
              <h3 className="font-semibold mb-2">{item.stage}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
