export const RESUME_URL =
  "https://raw.githubusercontent.com/saibhargavkarne/Portfolio/main/public/Saibhargav_Karne_Dynamics_365_Power_Platform_Developer_Resume.pdf";

export const contact = {
  email: "saibhargav5088@gmail.com",
  phone: "(469) 666-7274",
  location: "Dallas, Texas",
  linkedin: "https://www.linkedin.com/in/sbkarne/",
  github: "https://github.com/saibhargavkarne",
};

export const metrics = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Plants Supported in PO Management" },
  { value: "200+", label: "Active Retail Operations Users" },
  { value: "$1M+", label: "Quarterly Cost Savings via Automation" },
  { value: "40+s", label: "Performance Improvement in App Load" },
];

export const positioningTags = [
  "Dynamics 365 CE Developer",
  "Power Apps Engineer",
  "Dataverse Architect",
  "C# Plugin Developer",
  "Power Automate Specialist",
  "SAP Integration Engineer",
  "Azure Integration Developer",
  "ALM / DevOps Practitioner",
];

export const projects = [
  {
    id: "kraft-heinz-po",
    client: "Kraft Heinz",
    title: "PO Management Platform",
    domain: "Manufacturing / Procurement Automation",
    role: "Lead Power Platform Developer",
    period: "Sep 2025 – Present",
    overview:
      "Centralized PO lifecycle management across 30+ plants with Canvas App, Dataverse, Power Automate approvals, SAP integration, REST APIs, custom connectors, SharePoint, Azure integration, and ALM across Dev/Test/Prod.",
    workflow:
      "Received from SAP → Review/Update → Submit for Approval → Manager/Finance Approval → SAP Writeback → Completed/Closed",
    techStack: [
      "Canvas Apps",
      "Dataverse",
      "Power Automate",
      "SAP REST APIs",
      "Custom Connectors",
      "SharePoint",
      "Teams",
      "Outlook",
      "SQL",
      "Azure Functions",
      "Application Insights",
      "ALM",
      "Managed Solutions",
    ],
    impact: [
      "Reduced manual entry across 30+ plants",
      "Improved approval turnaround time significantly",
      "Strengthened data quality across procurement pipeline",
      "Contributed to $1M+ quarterly savings through automation",
      "Implemented robust ALM across Dev/Test/Prod environments",
    ],
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: "microsoft-slop",
    client: "Microsoft",
    title: "SLOP — Store Level Operational Processes",
    domain: "Retail Operations Platform",
    role: "Dynamics 365 CRM & Power Platform Developer",
    period: "Jun 2023 – Sep 2025",
    overview:
      "Canvas application digitizing daily store operations across 17 Experience Centers and 200+ active users. Automated shift management, sales monitoring, inbound delivery tracking, customer queue tracking, and issue escalation.",
    workflow:
      "Daily activity entry → Validation → Workflow automation → Escalation → Reporting and analytics",
    techStack: [
      "Power Apps Canvas",
      "Dataverse",
      "Power Automate",
      "REST APIs",
      "JavaScript",
      "C# Plugins",
      "Power BI",
      "Azure Integration",
      "App Insights",
    ],
    impact: [
      "Reduced manual workload by 60% across 17 Experience Centers",
      "Reduced operational service risk by $2M",
      "Optimized working capital by $10M through real-time visibility",
      "Enhanced app performance by 40+ seconds via delegation optimization",
      "Served 200+ active users across retail locations",
    ],
    color: "from-violet-600 to-blue-600",
  },
  {
    id: "microsoft-vendor-contract",
    client: "Microsoft",
    title: "Vendor Contract Coverage",
    domain: "Vendor Contract Lifecycle Management",
    role: "Dynamics 365 CRM & Power Platform Developer",
    period: "Jun 2023 – Sep 2025",
    overview:
      "Canvas App enabling store managers to review vendor performance, decide renewals or cancellations, and automate approvals through Power Automate flows with SAP and Dataverse synchronization.",
    workflow:
      "Vendor performance review → Renewal/Cancellation decision → Approval workflow → Status update → SAP/Dataverse synchronization",
    techStack: [
      "Canvas Apps",
      "Dataverse",
      "Power Automate Approvals",
      "Custom API Connectors",
      "SAP",
      "REST/OData APIs",
      "Azure Functions",
      "Logic Apps",
      "Application Insights",
    ],
    impact: [
      "Improved contract decision accuracy for procurement teams",
      "Reduced approval delays through automated routing",
      "Improved procurement/finance collaboration",
      "Seamless SAP writeback on contract decisions",
    ],
    color: "from-cyan-600 to-teal-600",
  },
  {
    id: "adidas-store-tracker",
    client: "Adidas (via Accenture)",
    title: "Retail Store Performance Tracker",
    domain: "Retail Analytics & Store Operations",
    role: "Dynamics CRM / Power Apps Developer",
    period: "May 2021 – Aug 2022",
    overview:
      "Power Apps Canvas application for store managers to track sales performance, inventory levels, footfall, promotions, and store KPIs across multiple locations with SAP integration and embedded Power BI dashboards.",
    workflow:
      "Daily sales/inventory updates → Dataverse CRUD → SAP data integration → Power BI dashboard visualization → Low-stock alerts",
    techStack: [
      "Power Apps Canvas",
      "Dataverse",
      "SAP Integration",
      "Power BI Embedded",
      "Power Automate",
      "ALM",
      "SQL",
      "REST APIs",
    ],
    impact: [
      "Improved data load time by 40% through delegation optimization",
      "Increased app adoption across retail locations",
      "Improved replenishment responsiveness via automated alerts",
      "Real-time KPI visibility across multiple store locations",
    ],
    color: "from-emerald-600 to-cyan-600",
  },
  {
    id: "adidas-d365-marketing",
    client: "Adidas (via Accenture)",
    title: "D365 Marketing & Sales Application",
    domain: "Dynamics 365 CE Sales & Marketing",
    role: "Dynamics CRM / Power Apps Developer",
    period: "May 2021 – Aug 2022",
    overview:
      "Customized Dynamics 365 Marketing/Sales module for lead-to-opportunity lifecycle, email notifications, logistics tracking, delivery SLA alerts, and regional retail data capture.",
    workflow:
      "Lead creation → Qualification → Opportunity tracking → Delivery linking → SLA monitoring → Notification/Escalation",
    techStack: [
      "Dynamics 365 CE Sales/Marketing",
      "Model-Driven Apps",
      "Dataverse",
      "C# Plugins",
      "Power Automate",
      "Outlook Connector",
    ],
    impact: [
      "Improved lead tracking across Adidas' sales pipeline",
      "Real-time delivery visibility within the Sales module",
      "Automated SLA breach alerts via C# plugin logic",
      "Streamlined sales team process automation",
    ],
    color: "from-orange-600 to-rose-600",
  },
  {
    id: "banking-onboarding",
    client: "Banking Client (via Airen Technologies)",
    title: "Customer Onboarding & Loan Processing",
    domain: "Financial Services Workflow Automation",
    role: "Power Apps / Dynamics CRM Developer",
    period: "Dec 2019 – May 2021",
    overview:
      "Hybrid Canvas + Model-Driven solution for KYC intake, loan request capture, document handling, approval tracking, credit-check request automation, and sensitive field security for a banking client.",
    workflow:
      "Customer intake → KYC data capture → Document upload → Credit check → Loan approval → Notification → Portfolio tracking",
    techStack: [
      "Canvas Apps",
      "Model-Driven Apps",
      "Dataverse",
      "SharePoint",
      "Power Automate",
      "Outlook",
      "REST APIs",
      "Security Roles",
      "Field-Level Security",
    ],
    impact: [
      "Improved onboarding efficiency for front-office teams",
      "Secured sensitive financial data with field-level permissions",
      "Automated loan approval notifications and credit-check requests",
      "Compliant with banking security policies and data protection standards",
    ],
    color: "from-indigo-600 to-violet-600",
  },
];

export const plugins = [
  {
    name: "Opportunity Rebate Model Validation Plugin",
    entity: "Opportunity",
    message: "Win / Close as Won",
    stage: "Pre-Validation",
    mode: "Synchronous",
    purpose:
      "Blocks opportunity close as won when the Spectrum Rebate Engagement Model field is missing. Enforces server-side validation beyond form-level JavaScript.",
  },
  {
    name: "PO Approval Validation Plugin",
    entity: "Purchase Order (custom table)",
    message: "Create/Update or custom Submit action",
    stage: "Pre-Operation",
    mode: "Synchronous",
    purpose:
      "Validates required PO fields, plant information, amount thresholds, approval readiness, and SAP-required values before submission.",
  },
  {
    name: "PO State Transition Plugin",
    entity: "Purchase Order (custom table)",
    message: "Update",
    stage: "Pre-Operation",
    mode: "Synchronous",
    purpose:
      "Controls valid transitions between Draft, Submitted, Approved, Synced, Completed, and Closed states.",
  },
  {
    name: "SAP Sync Trigger Plugin",
    entity: "Purchase Order / Contract",
    message: "Update after approval",
    stage: "Post-Operation",
    mode: "Asynchronous",
    purpose:
      "Creates integration trigger/event after approval so outbound SAP writeback can execute reliably without blocking the user transaction.",
  },
  {
    name: "Duplicate PO / Vendor Detection Plugin",
    entity: "PO / Vendor tables",
    message: "Create",
    stage: "Pre-Validation",
    mode: "Synchronous",
    purpose:
      "Prevents duplicate records by checking business keys such as PO number, vendor number, plant, and date.",
  },
  {
    name: "Delivery SLA Delay Plugin",
    entity: "Delivery / Shipment / Opportunity related tables",
    message: "Update",
    stage: "Post-Operation",
    mode: "Asynchronous",
    purpose:
      "Detects delayed delivery records and updates related opportunity/stage/status while triggering alerts through automation.",
  },
  {
    name: "KYC Validation Plugin",
    entity: "Customer Onboarding / Loan Application",
    message: "Create/Update",
    stage: "Pre-Operation",
    mode: "Synchronous",
    purpose:
      "Ensures required KYC and loan application data is complete before moving the application into back-office review.",
  },
  {
    name: "Sensitive Field Audit Plugin",
    entity: "Financial / Contract entities",
    message: "Update",
    stage: "Post-Operation",
    mode: "Asynchronous",
    purpose:
      "Captures sensitive field changes into an audit/history entity for compliance and traceability.",
  },
];

export const pluginConcepts = [
  "IPluginExecutionContext",
  "IOrganizationService",
  "ITracingService",
  "Pre Images & Post Images",
  "Pre-Validation vs Pre-Operation vs Post-Operation",
  "Synchronous vs Asynchronous Steps",
  "Depth checks to avoid recursion",
  "Secure/Unsecure Configuration",
  "Plugin Trace Logs",
  "Solution-aware Deployment",
];

export const flows = [
  {
    name: "Multi-Level PO Approval Flow",
    trigger: "Dataverse row selected or status changed to Submitted",
    connectors: ["Dataverse", "Approvals", "Teams", "Outlook", "SharePoint", "SAP custom connector"],
    logic:
      "Routes PO from plant user to manager to finance, applies conditional approval logic, updates status, records approval history, and sends notifications.",
    reliability:
      "Scopes, try/catch/finally pattern, retries, timeout handling, failure notification, error log table.",
  },
  {
    name: "SAP Writeback Flow",
    trigger: "PO approved / manual writeback button / Dataverse update",
    connectors: ["Dataverse", "HTTP/REST", "SAP custom connector", "JSON", "Teams"],
    logic:
      "Builds JSON payload, sends approved PO data to SAP, parses SAP response, updates transmission success/failure fields, and logs response message.",
    reliability:
      "Retry policy, response code handling, payload validation, failed run notification, resubmission support.",
  },
  {
    name: "Overdue Approval Escalation Flow",
    trigger: "Scheduled recurrence",
    connectors: ["Dataverse", "Teams", "Outlook"],
    logic:
      "Finds approvals pending beyond SLA, sends reminders, escalates to manager/finance, and updates escalation status.",
    reliability:
      "Uses pagination, filter queries, concurrency control, and error scopes.",
  },
  {
    name: "Vendor Contract Approval Flow",
    trigger: "Contract renewal/cancellation decision submitted",
    connectors: ["Power Apps", "Dataverse", "Approvals", "Outlook", "SAP API"],
    logic:
      "Automates vendor contract review, approval routing, status updates, procurement/finance notifications, and SAP synchronization.",
    reliability:
      "Captures approval responses, handles rejection paths, and logs status changes.",
  },
  {
    name: "Store Issue Escalation Flow",
    trigger: "Store issue created or priority updated",
    connectors: ["Dataverse", "Teams", "Outlook"],
    logic:
      "Evaluates store issue priority, routes urgent issues to leadership, tracks resolution, and updates dashboard status.",
    reliability:
      "Condition blocks, switch cases, retry policies, and owner assignment logic.",
  },
  {
    name: "Low Stock Alert Flow",
    trigger: "Inventory below threshold",
    connectors: ["Dataverse", "SAP", "Teams", "Outlook"],
    logic:
      "Detects low-stock products, sends alerts, and triggers replenishment visibility for store managers.",
    reliability:
      "Threshold-based logic, duplicate alert prevention, run history debugging.",
  },
  {
    name: "KYC / Loan Approval Notification Flow",
    trigger: "Loan application moved to review/approved/rejected",
    connectors: ["Dataverse", "SharePoint", "Outlook", "REST API"],
    logic:
      "Sends approval notifications, triggers credit-check request, validates documents, and updates applicant/application status.",
    reliability:
      "Sensitive data handling, validation branch, API error handling.",
  },
  {
    name: "Document Processing Flow",
    trigger: "File uploaded to SharePoint",
    connectors: ["SharePoint", "Dataverse", "OneDrive", "Outlook"],
    logic:
      "Captures document metadata, links files to Dataverse records, and notifies assigned users.",
    reliability:
      "File validation, duplicate detection, exception handling.",
  },
];

export const skills = [
  {
    category: "Dynamics 365 / Dataverse",
    items: [
      "Dynamics 365 CE Sales",
      "Dynamics 365 Customer Service",
      "Dynamics 365 Marketing",
      "Finance & Operations",
      "Model-Driven Apps",
      "Dataverse Tables & Relationships",
      "Business Rules",
      "Business Process Flows",
      "Security Roles",
      "Field-Level Security",
      "Field Security Profiles",
      "XRMToolBox",
      "Auditing",
    ],
  },
  {
    category: "Power Platform",
    items: [
      "Canvas Apps",
      "Power Automate Cloud Flows",
      "Power Automate Desktop",
      "Power Pages (Portals)",
      "Power BI",
      "Row-Level Security (RLS)",
      "Custom Connectors",
      "Power Fx",
    ],
  },
  {
    category: "Development",
    items: [
      "C#",
      ".NET",
      "JavaScript",
      "jQuery",
      "TypeScript",
      "REST APIs",
      "SOAP",
      "OData",
      "FetchXML",
      "JSON",
      "SQL",
      "Python",
    ],
  },
  {
    category: "Plugins & Customization",
    items: [
      "C# Plugins",
      "Custom Workflow Activities",
      "PCF Controls",
      "Plugin Pipeline",
      "Pre/Post Images",
      "Synchronous/Asynchronous Steps",
      "JavaScript Form Scripting",
      "Ribbon Customization",
      "Form & View Customization",
      "Liquid Templates",
    ],
  },
  {
    category: "Integration & Data",
    items: [
      "Azure Functions",
      "Logic Apps",
      "Service Bus",
      "Azure AD / B2C",
      "SAP REST Integration",
      "SharePoint Online",
      "SSIS",
      "SSRS",
      "SQL Server",
      "Oracle",
      "Dataverse Web API",
      "Teams",
      "OneDrive",
      "Application Insights",
    ],
  },
  {
    category: "ALM / DevOps",
    items: [
      "Azure DevOps",
      "PAC CLI",
      "Managed Solutions",
      "Connection References",
      "Environment Variables",
      "Dev/Test/Prod Deployments",
      "Agile / Scrum",
      "JIRA",
      "Figma",
      "Visual Studio",
      "Lucidchart",
    ],
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Power Platform Developer Associate",
    status: "Active",
    credentialId: "1A0F2BF590189A86",
    certNumber: "8A0CLF-623514",
    earned: "October 8, 2024",
    badge: "PL-400",
  },
  {
    name: "Microsoft Certified: Power Platform Functional Consultant",
    status: "Active",
    credentialId: "C16B0ED725B5AF0",
    certNumber: "I99185-217455",
    earned: "January 5, 2025",
    badge: "PL-200",
  },
];

export const architectureLayers = [
  {
    label: "Canvas App / Model-Driven App",
    description: "User-facing application layer built on Power Apps",
    icon: "Layout",
  },
  {
    label: "Dataverse Tables + Security Roles",
    description: "Enterprise data platform with row/column-level security",
    icon: "Database",
  },
  {
    label: "C# Plugin Layer + Business Rules",
    description: "Server-side validation, state control, and complex logic",
    icon: "Code2",
  },
  {
    label: "Power Automate Cloud Flows",
    description: "Approval orchestration, notifications, and automation",
    icon: "Zap",
  },
  {
    label: "Custom Connector / Azure Function",
    description: "Middleware bridging Power Platform to external systems",
    icon: "Plug",
  },
  {
    label: "SAP REST API / External System",
    description: "ERP writeback and bidirectional data synchronization",
    icon: "Globe",
  },
  {
    label: "Status Update + Teams/Outlook Notification",
    description: "Closing the loop with real-time user communication",
    icon: "Bell",
  },
];

export const architectureCards = [
  {
    title: "Dataverse-First Application Architecture",
    description:
      "All business data lives in Dataverse with well-designed tables, relationships, and security roles. Apps are delegation-aware and performant at enterprise scale.",
    tags: ["Dataverse", "Security Roles", "Canvas Apps", "Model-Driven Apps"],
  },
  {
    title: "Plugin-Based Server-Side Validation",
    description:
      "C# plugins enforce critical business rules at the platform level — not just in the UI — ensuring data integrity regardless of how records are created or updated.",
    tags: ["C# Plugins", "Pre-Validation", "Pre-Operation", "Post-Operation"],
  },
  {
    title: "Power Automate Approval Orchestration",
    description:
      "Multi-level approval flows with conditional routing, SLA escalation, try/catch error handling, and full audit trails recorded in Dataverse.",
    tags: ["Power Automate", "Approvals", "Error Handling", "Audit Trail"],
  },
  {
    title: "SAP Writeback Integration Pipeline",
    description:
      "JSON payloads constructed in Power Automate and sent to SAP REST endpoints via custom connectors. Responses parsed, statuses updated, and failures handled with retry logic.",
    tags: ["SAP REST API", "Custom Connectors", "JSON", "Retry Policy"],
  },
  {
    title: "SharePoint Document Storage Integration",
    description:
      "Document uploads captured from Canvas Apps and stored in SharePoint with metadata linked back to Dataverse records for compliance and traceability.",
    tags: ["SharePoint", "OneDrive", "Document Management", "Dataverse"],
  },
  {
    title: "Azure Functions / Logic Apps Integration Layer",
    description:
      "Azure Functions serve as lightweight middleware for complex transformations, external API orchestration, and data enrichment outside Power Platform limits.",
    tags: ["Azure Functions", "Logic Apps", "REST APIs", "Middleware"],
  },
  {
    title: "Application Insights Monitoring & Telemetry",
    description:
      "End-to-end observability across Canvas Apps and flows using Application Insights for performance tracking, error alerting, and user behavior analytics.",
    tags: ["Application Insights", "Monitoring", "Telemetry", "Performance"],
  },
  {
    title: "Dev/Test/Prod ALM Deployment Model",
    description:
      "Managed solutions deployed through Azure DevOps pipelines using PAC CLI. Environment variables and connection references ensure zero-config environment transitions.",
    tags: ["ALM", "Azure DevOps", "PAC CLI", "Managed Solutions"],
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Plugins", href: "/plugins" },
  { label: "Automation", href: "/automations" },
  { label: "Architecture", href: "/architecture" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
