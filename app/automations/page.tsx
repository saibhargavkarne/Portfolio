import SectionHeader from "@/components/SectionHeader";
import FlowCard from "@/components/FlowCard";
import FadeUp from "@/components/FadeUp";
import { flows } from "@/lib/portfolio-data";

export const metadata = {
  title: "Power Automate Flows — Saibhargav Karne",
  description:
    "Enterprise Power Automate cloud flows — multi-level approvals, SAP writeback, SLA escalation, and error-handling patterns.",
};

export default function AutomationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeUp>
        <SectionHeader
          eyebrow="Workflow Engineering"
          title="Automation & Power Automate Flows"
          subtitle="Enterprise-grade Power Automate cloud flows designed with reliability-first patterns — scopes, try/catch/finally, retry policies, concurrency control, and error audit logging."
        />
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-5 mb-16">
        {flows.map((flow, i) => (
          <FadeUp key={flow.name} delay={i * 0.06}>
            <FlowCard flow={flow} />
          </FadeUp>
        ))}
      </div>

      {/* Reliability patterns */}
      <FadeUp>
        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8">
          <p className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-3">
            Engineering Discipline
          </p>
          <h2 className="text-xl font-bold text-white mb-6">
            Reliability Patterns Applied Across All Flows
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Scope-based Try/Catch/Finally",
              "Retry Policies on HTTP Actions",
              "Timeout & SLA Escalation Logic",
              "Failure Notification Flows",
              "Error Log Tables in Dataverse",
              "Concurrency Control Settings",
              "Pagination for Large Datasets",
              "Duplicate Alert Prevention",
              "Sensitive Data Handling",
              "Resubmission Support",
              "Run History Debugging",
              "Filter Query Optimization",
            ].map((pattern) => (
              <div
                key={pattern}
                className="flex items-center gap-2 px-3 py-2.5 bg-[#0B1220] border border-[#1E293B] rounded-lg"
              >
                <span className="text-[#06B6D4] text-xs shrink-0">▸</span>
                <span className="text-gray-300 text-sm">{pattern}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
