import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/SocialIcons";
import { contact, navLinks } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E293B] bg-[#0B1220] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white font-bold text-sm">
                SK
              </div>
              <span className="text-white font-semibold">Saibhargav Karne</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enterprise Dynamics 365 & Power Platform Developer. Building scalable business
              applications that connect people, processes, and systems.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#06B6D4] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#06B6D4] transition-colors"
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#06B6D4] transition-colors"
              >
                <Mail size={15} />
                {contact.email}
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#06B6D4] transition-colors"
              >
                <GitHubIcon size={15} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Saibhargav Karne. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Dynamics 365 · Power Platform · Dataverse · C# Plugins · Power Automate
          </p>
        </div>
      </div>
    </footer>
  );
}
