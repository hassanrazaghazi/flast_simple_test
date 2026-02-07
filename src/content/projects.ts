export interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with real-time inventory, Stripe payments, and an admin dashboard for managing products and orders.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind"],
    link: "#",
    featured: true,
  },
  {
    title: "CRM Integration Suite",
    description:
      "Custom middleware connecting Zoho CRM with GoHighLevel, automating lead routing and syncing contact data across platforms.",
    stack: ["Node.js", "Express", "REST APIs", "Webhooks"],
    featured: true,
  },
  {
    title: "Real-Time Dashboard",
    description:
      "Analytics dashboard with live data visualization, role-based access control, and exportable reports for business intelligence.",
    stack: ["React", "PostgreSQL", "Chart.js", "JWT Auth"],
    link: "#",
    featured: true,
  },
  {
    title: "Auth Microservice",
    description:
      "Standalone authentication service with OAuth2, magic links, and multi-tenant support for SaaS applications.",
    stack: ["Node.js", "Auth0", "PostgreSQL", "Docker"],
    github: "#",
  },
];
