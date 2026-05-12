import FadeUp from "@/components/FadeUp";
import { contact, RESUME_URL } from "@/lib/portfolio-data";
import { Mail, MapPin, Download, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/SocialIcons";

export const metadata = {
  title: "Contact — Saibhargav Karne",
  description:
    "Get in touch with Saibhargav Karne for Dynamics 365, Power Platform, and enterprise automation opportunities.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <FadeUp>
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let&apos;s talk</h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            I&apos;m based in Dallas and open to remote work. Looking for a D365 or Power Platform
            developer for a role or project? Reach out.
          </p>
        </div>
      </FadeUp>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact cards */}
        <FadeUp>
          <div className="space-y-3">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 bg-[#111827] border border-[#1E293B] rounded-2xl p-5 hover:border-[#2563EB]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#2563EB]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">Email</p>
                <p className="text-white text-sm group-hover:text-[#06B6D4] transition-colors">
                  {contact.email}
                </p>
              </div>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#111827] border border-[#1E293B] rounded-2xl p-5 hover:border-[#06B6D4]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center shrink-0">
                <LinkedInIcon size={18} className="text-[#06B6D4]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">LinkedIn</p>
                <p className="text-white text-sm group-hover:text-[#06B6D4] transition-colors">
                  linkedin.com/in/sbkarne
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-[#111827] border border-[#1E293B] rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#1E293B] flex items-center justify-center shrink-0">
                <Phone size={18} className="text-gray-500" />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">Phone</p>
                <p className="text-white text-sm">{contact.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#111827] border border-[#1E293B] rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#1E293B] flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-gray-500" />
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">Location</p>
                <p className="text-white text-sm">{contact.location}</p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Right panel */}
        <FadeUp delay={0.1}>
          <div className="space-y-5">
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6">
              <p className="text-gray-400 text-sm font-medium mb-4">Open to</p>
              <ul className="space-y-2.5">
                {[
                  "Senior Dynamics 365 Developer roles",
                  "Power Platform Developer positions",
                  "Power Automate consulting",
                  "Dataverse / C# Plugin engineering",
                  "SAP & Azure integration projects",
                  "ALM / DevOps for Power Platform",
                  "Freelance consulting engagements",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#06B6D4] text-xs shrink-0">▸</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6">
              <p className="text-white font-medium text-sm mb-1">Resume</p>
              <p className="text-gray-500 text-sm mb-4">
                PDF with full project breakdowns and certifications.
              </p>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg font-medium text-sm hover:bg-[#1D4ED8] transition-colors"
              >
                <Download size={14} />
                Download PDF
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
