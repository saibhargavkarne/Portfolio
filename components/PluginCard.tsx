interface Plugin {
  name: string;
  entity: string;
  message: string;
  stage: string;
  mode: string;
  purpose: string;
}

const stageColors: Record<string, string> = {
  "Pre-Validation": "text-rose-400 bg-rose-400/10 border-rose-400/20",
  "Pre-Operation": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "Post-Operation": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
};

const modeColors: Record<string, string> = {
  Synchronous: "text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/20",
  Asynchronous: "text-violet-400 bg-violet-400/10 border-violet-400/20",
};

export default function PluginCard({ plugin }: { plugin: Plugin }) {
  return (
    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5 hover:border-[#2563EB]/30 transition-all duration-300 hover:shadow-[0_0_24px_rgba(37,99,235,0.06)]">
      {/* Name */}
      <h3 className="text-white font-semibold text-base mb-3 leading-tight">{plugin.name}</h3>

      {/* Metadata grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Entity</p>
          <p className="text-gray-300 text-xs leading-snug">{plugin.entity}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Message</p>
          <p className="text-gray-300 text-xs leading-snug">{plugin.message}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span
          className={`px-2 py-0.5 rounded border text-xs font-medium ${
            stageColors[plugin.stage] ?? "text-gray-400 bg-gray-400/10 border-gray-400/20"
          }`}
        >
          {plugin.stage}
        </span>
        <span
          className={`px-2 py-0.5 rounded border text-xs font-medium ${
            modeColors[plugin.mode] ?? "text-gray-400 bg-gray-400/10 border-gray-400/20"
          }`}
        >
          {plugin.mode}
        </span>
      </div>

      {/* Purpose */}
      <p className="text-gray-400 text-sm leading-relaxed">{plugin.purpose}</p>
    </div>
  );
}
