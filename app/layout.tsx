import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saibhargav Karne — Dynamics 365 & Power Platform Developer",
  description:
    "Enterprise Dynamics 365 CE and Power Platform developer with 5+ years of experience in C# plugins, Power Apps, Power Automate, Dataverse, SAP integration, and ALM.",
  keywords: [
    "Dynamics 365 Developer",
    "Power Platform Developer",
    "Power Apps Developer",
    "Power Automate Developer",
    "Dataverse Developer",
    "C# Plugin Developer",
    "Dynamics 365 CE Consultant",
    "Power Apps Canvas Apps",
    "Model-Driven Apps",
    "SAP Integration",
    "Azure Functions",
    "Power Platform ALM",
    "Microsoft Power Platform Portfolio",
    "Dynamics CRM Developer",
  ],
  authors: [{ name: "Saibhargav Karne" }],
  openGraph: {
    title: "Saibhargav Karne — Enterprise Dynamics 365 & Power Platform Developer",
    description:
      "5+ years delivering enterprise D365 CE, Power Apps, Power Automate, C# plugins, SAP integration, and ALM across Kraft Heinz and Microsoft.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0B1220] text-[#F8FAFC] antialiased">
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
