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
    "Senior Dynamics 365 CE and Power Platform engineer with 9+ years of experience in C# plugins, PCF controls, Power Apps, Power Automate, Dataverse, Azure integrations, and ALM.",
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
      "9+ years delivering D365 CE, Power Apps, Power Automate, C# plugins, PCF controls, Azure integrations, and ALM across Microsoft, C&S Wholesale, Sun Powered, and Deloitte.",
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
