import { Zap } from "lucide-react";

interface Flow {
  name: string;
  trigger: string;
  connectors: string[];
  logic: string;
  reliability: string;
}

export default function FlowCard({ flow }: { flow: Flow }) {
  return (
    <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-5 hover:border-[#06B6D4]/30 transition-all duration-300 hover:shadow-[0_0_24px_rgba(6,182,212,0.06)]">
      {/* Name */}
      <div className="flex items-start gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center shrink-0 mt-0.5">
          <Zap size={13} className="text-[#06B6D4]" />
        </div>
        <h3 className="text-white font-semibold text-base leading-tight">{flow.name}</h3>
      </div>

      {/* Trigger */}
      <div className="mb-3">
        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">Trigger</p>
        <p className="text-gray-300 text-sm">{flow.trigger}</p>
      </div>

      {/* Connectors */}
      <div className="mb-3">
        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Connectors</p>
        <div className="flex flex-wrap gap-1.5">
          {flow.connectors.map((c) => (
            <span
              key={c}
              className="px-2 py-0.5 bg-[#0B1220] border border-[#1E293B] rounded text-gray-400 text-xs"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Logic */}
      <div className="mb-3">
        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">Core Logic</p>
        <p className="text-gray-400 text-sm leading-relaxed">{flow.logic}</p>
      </div>

      {/* Reliability */}
      <div className="pt-3 border-t border-[#1E293B]">
        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-1">
          Reliability Design
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">{flow.reliability}</p>
      </div>
    </div>
  );
}
