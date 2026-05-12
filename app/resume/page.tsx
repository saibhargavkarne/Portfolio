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
          <p className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-2">
            Resume
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Saibhargav Karne
          </h1>
          <p className="text-gray-300 text-lg">Dynamics 365 & Power Apps Developer</p>
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
              linkedin.com/in/sbkarne
            </a>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h2 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">
              Professional Summary
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Power Platform Developer with 5+ years of experience, including 2+ years of hands-on
              expertise in Power Automate (Cloud & Desktop) for building scalable enterprise
              automation solutions. Skilled in designing workflows using triggers, actions,
              expressions, variables, loops, and conditions, with strong experience integrating
              SharePoint, Outlook, Teams, OneDrive, Dataverse, SQL, Excel, and REST APIs.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="mb-8">
            <h2 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              Employment
            </h2>
            <div className="space-y-4">
              {[
                {
                  role: "Lead Power Platform Developer",
                  company: "Kraft Heinz",
                  period: "Sep 2025 — Present",
                  location: "Chicago, Remote",
                },
                {
                  role: "Dynamics 365 CRM & Power Platform Developer",
                  company: "Microsoft",
                  period: "Jun 2023 — Sep 2025",
                  location: "Seattle, Remote",
                },
                {
                  role: "Dynamics CRM / Power Apps Developer",
                  company: "Accenture",
                  period: "May 2021 — Aug 2022",
                  location: "Hyderabad, India",
                },
                {
                  role: "Power Apps / Dynamics CRM Developer",
                  company: "Airen Technologies LLC",
                  period: "Dec 2019 — May 2021",
                  location: "Hyderabad, India",
                },
              ].map((job) => (
                <div
                  key={job.company}
                  className="flex items-start gap-3 pl-4 border-l-2 border-[#2563EB]/30"
                >
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">{job.role}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <span className="text-[#06B6D4] text-xs">{job.company}</span>
                      <span className="text-gray-600 text-xs">·</span>
                      <span className="text-gray-500 text-xs">{job.period}</span>
                      <span className="text-gray-600 text-xs">·</span>
                      <span className="text-gray-500 text-xs">{job.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
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
                  B.S. Computer Science and Engineering — 3.6 GPA
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  JNTUH – TKR College of Engineering · Jun 2017 – May 2021 · Hyderabad, India
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">
              Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.certNumber} className="flex items-center gap-2">
                  <BadgeCheck size={14} className="text-[#2563EB]" />
                  <span className="text-gray-300 text-sm">{cert.name}</span>
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
        <p className="text-gray-500 text-xs mt-3">
          PDF hosted on GitHub — always up to date.
        </p>
      </FadeUp>
    </div>
  );
}
