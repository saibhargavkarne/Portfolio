import FadeUp from "@/components/FadeUp";
import { contact, certifications, RESUME_URL } from "@/lib/portfolio-data";
import { Download, MapPin, Mail, BadgeCheck, ExternalLink } from "lucide-react";
import { LinkedInIcon } from "@/components/SocialIcons";

export const metadata = {
  title: "Resume — Saibhargav Karne",
  description:
    "Download Saibhargav Karne's Dynamics 365 & Power Platform Developer resume.",
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeUp>
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Saibhargav Karne</h1>
          <p className="text-gray-400 text-lg">Senior Dynamics 365 CE &amp; Power Platform Engineer</p>
        </div>
      </FadeUp>

      {/* Preview card */}
      <FadeUp delay={0.05}>
        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 mb-8">
          {/* Contact info */}
          <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-[#1E293B]">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={14} className="text-[#06B6D4]" />
              {contact.location}
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#06B6D4] transition-colors"
            >
              <Mail size={14} className="text-[#06B6D4]" />
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#06B6D4] transition-colors"
            >
              <LinkedInIcon size={14} className="text-[#06B6D4]" />
              linkedin.com/in/bhargav-k-217b222b3
            </a>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h2 className="text-white font-semibold text-xs uppercase tracking-wide mb-3">
              Summary
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Microsoft Dynamics 365 &amp; Power Platform Specialist with 9+ years of hands-on
              experience delivering CRM and business application solutions. Deep expertise in
              Dynamics 365 CE, Dataverse, Model-Driven Apps, Canvas Apps, and Power Pages. Strong
              background in C# plugins, custom workflow activities, PCF controls, JavaScript form
              scripting, and advanced Power Automate solutions for approvals, data synchronization,
              and cross-system automation.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="mb-8">
            <h2 className="text-white font-semibold text-xs uppercase tracking-wide mb-4">
              Experience
            </h2>
            <div className="space-y-5">
              {[
                {
                  role: "Senior Dynamics 365 CE & Power Platform Engineer",
                  company: "Microsoft (Aptly Technology Corporation)",
                  period: "Aug 2022 — Present",
                  location: "Seattle, WA",
                  bullets: [
                    "Architected custom plugins and event handlers improving data validation accuracy by 35%.",
                    "Built advanced C# plugins, custom workflow activities, and JavaScript extensions for complex business logic.",
                    "Designed integrations between Dynamics 365 and external systems using Azure Functions, Logic Apps, and REST APIs processing 1M+ records monthly.",
                    "Optimized Dataverse queries and form performance, reducing load times by 45% in high-volume environments.",
                    "Implemented SSO using Azure AD and SAML, reducing login-related incidents by 50%.",
                    "Deployed managed solutions via Azure DevOps CI/CD pipelines, cutting release cycles by 40%.",
                  ],
                },
                {
                  role: "Dynamics 365 CE & Power Platform Consultant",
                  company: "C&S Wholesale Grocers Inc.",
                  period: "Apr 2021 — Jul 2022",
                  location: "Keene, NH",
                  bullets: [
                    "Designed and deployed custom Dynamics modules replacing manual tracking tools, improving efficiency by 38%.",
                    "Integrated Dynamics with third-party supply chain systems via REST APIs and ETL jobs, syncing 500K+ monthly records.",
                    "Built automated CI pipelines using Azure DevOps for managed solution deployments across Dev/Test/Prod.",
                    "Performed performance tuning of plugins and workflows, reducing async job failures by 42%.",
                  ],
                },
                {
                  role: "Dynamics 365 CRM & Power Platform Developer",
                  company: "Sun Powered Productions",
                  period: "Dec 2018 — Mar 2021",
                  location: "Richmond, CA",
                  bullets: [
                    "Delivered full lifecycle Dynamics 365 CE implementations including requirements, design, development, and user training.",
                    "Developed custom workflows, plugins, and JavaScript customizations for out-of-box and custom entities.",
                    "Built custom ETL scripts and SSIS packages to migrate 750K+ legacy records into Dynamics.",
                    "Developed Power BI dashboards enabling leadership to track KPIs in real time.",
                  ],
                },
                {
                  role: "MS Dynamics CRM Developer",
                  company: "Deloitte",
                  period: "Sep 2016 — Nov 2018",
                  location: "Hyderabad, India",
                  bullets: [
                    "Customized Dynamics CRM for enterprise clients across Sales and Service modules supporting multi-region user bases.",
                    "Executed large-scale data migrations using SSIS and SQL with 99.8% data accuracy validation.",
                    "Configured advanced security models including business units, teams, and role hierarchies.",
                    "Supported multi-environment deployments (Dev, SIT, UAT, Prod) with release documentation.",
                  ],
                },
              ].map((job) => (
                <div key={job.company} className="pl-4 border-l-2 border-[#2563EB]/30">
                  <p className="text-white font-semibold text-sm">{job.role}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5 mb-2">
                    <span className="text-[#06B6D4] text-xs">{job.company}</span>
                    <span className="text-gray-600 text-xs">·</span>
                    <span className="text-gray-500 text-xs">{job.period}</span>
                    <span className="text-gray-600 text-xs">·</span>
                    <span className="text-gray-500 text-xs">{job.location}</span>
                  </div>
                  <ul className="space-y-1">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed">
                        <span className="text-[#06B6D4] mt-0.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-white font-semibold text-xs uppercase tracking-wide mb-4">
              Education
            </h2>
            <div className="space-y-3">
              <div className="pl-4 border-l-2 border-[#06B6D4]/30">
                <p className="text-white text-sm font-medium">
                  M.S. Information Systems and Technology — 3.8 GPA
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  University of North Texas · Aug 2022 – Dec 2023 · Denton, TX
                </p>
              </div>
              <div className="pl-4 border-l-2 border-[#06B6D4]/30">
                <p className="text-white text-sm font-medium">
                  B.S. Computer Science and Engineering
                </p>
                <p className="text-gray-500 text-xs mt-0.5">2016</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-white font-semibold text-xs uppercase tracking-wide mb-3">
              Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.certNumber} className="flex items-center gap-2">
                  <BadgeCheck size={14} className="text-[#2563EB]" />
                  <span className="text-gray-300 text-sm">{cert.name}</span>
                  <span className="text-[#06B6D4] font-mono text-xs">· {cert.badge}</span>
                  <span className="text-emerald-400 text-xs">· Active</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Download CTA */}
      <FadeUp delay={0.1}>
        <div className="flex flex-wrap gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-xl font-medium hover:bg-[#1D4ED8] transition-colors"
          >
            <Download size={16} />
            Download Full Resume (PDF)
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-[#1E293B] text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={16} />
            View on GitHub
          </a>
        </div>
        <p className="text-gray-600 text-xs mt-3">PDF hosted on GitHub — always up to date.</p>
      </FadeUp>
    </div>
  );
}
