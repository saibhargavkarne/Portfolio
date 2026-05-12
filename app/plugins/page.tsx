import PluginCard from "@/components/PluginCard";
import FadeUp from "@/components/FadeUp";
import { plugins, pluginConcepts } from "@/lib/portfolio-data";

export const metadata = {
  title: "Plugin Engineering — Saibhargav Karne",
  description:
    "C# Dynamics 365 plugin engineering — Pre-Validation, Pre-Operation, and Post-Operation plugins for enterprise business rules.",
};

export default function PluginsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeUp>
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Plugin Engineering</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            C# plugins run server-side in the D365 plugin pipeline. They enforce business rules
            regardless of how a record gets created or updated — the UI can&apos;t bypass them.
          </p>
        </div>
      </FadeUp>

      {/* Plugin cards */}
      <div className="grid md:grid-cols-2 gap-5 mb-16">
        {plugins.map((plugin, i) => (
          <FadeUp key={plugin.name} delay={i * 0.06}>
            <PluginCard plugin={plugin} />
          </FadeUp>
        ))}
      </div>

      {/* Pipeline stages */}
      <FadeUp>
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {[
            {
              stage: "Pre-Validation",
              color: "border-rose-400/20 text-rose-400",
              bg: "bg-rose-400/5",
              desc: "Runs before platform validation. Blocks the operation before any database write begins.",
            },
            {
              stage: "Pre-Operation",
              color: "border-amber-400/20 text-amber-400",
              bg: "bg-amber-400/5",
              desc: "Inside the database transaction, before the core operation. Used for field manipulation and state control.",
            },
            {
              stage: "Post-Operation",
              color: "border-emerald-400/20 text-emerald-400",
              bg: "bg-emerald-400/5",
              desc: "After the operation completes. Used for async tasks — integration triggers, audit logging, notifications.",
            },
          ].map((item) => (
            <div
              key={item.stage}
              className={`border rounded-xl p-5 ${item.color} ${item.bg}`}
            >
              <h3 className="font-semibold mb-2 text-sm">{item.stage}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* SDK concepts */}
      <FadeUp>
        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8">
          <h2 className="text-base font-semibold text-white mb-5">SDK concepts I work with</h2>
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
    </div>
  );
}
