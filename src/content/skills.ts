export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Supabase", "MongoDB"],
  },
  {
    category: "Auth & Security",
    items: ["Auth0", "JWT", "OAuth 2.0", "RBAC"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "CI/CD", "Vercel"],
  },
  {
    category: "Integrations",
    items: ["Zoho CRM", "GoHighLevel", "Stripe", "Webhooks"],
  },
];
