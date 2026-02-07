export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "building-scalable-apis",
    title: "Building Scalable REST APIs with Node.js",
    excerpt:
      "A deep dive into structuring Node.js APIs for maintainability, performance, and team collaboration.",
    date: "2025-12-15",
    readTime: "6 min read",
    tags: ["Node.js", "API Design", "Backend"],
    content: `When building APIs that need to serve thousands of requests, architecture decisions made early on define the ceiling of your application.\n\nI've found that separating concerns into controllers, services, and repositories makes codebases dramatically easier to maintain. Combined with proper error handling middleware and input validation, you get APIs that are both robust and developer-friendly.\n\nKey takeaways:\n• Use a layered architecture from day one\n• Validate inputs at the edge, not deep in business logic\n• Design for horizontal scaling with stateless services`,
  },
  {
    slug: "modern-auth-patterns",
    title: "Modern Authentication Patterns for Web Apps",
    excerpt:
      "From JWTs to OAuth2 — choosing the right auth strategy for your next project.",
    date: "2025-11-02",
    readTime: "8 min read",
    tags: ["Auth", "Security", "OAuth"],
    content: `Authentication is the most critical piece of any application, yet it's often treated as an afterthought.\n\nIn this post, I walk through the trade-offs between session-based auth, JWTs, and OAuth2 flows. Each has its place, and the right choice depends on your application's specific needs.\n\nThe key insight: there's no universal "best" auth method. Match your auth strategy to your threat model and user experience goals.`,
  },
  {
    slug: "tailwind-design-systems",
    title: "Creating Design Systems with Tailwind CSS",
    excerpt:
      "How to build consistent, scalable UI with Tailwind's utility-first approach and custom tokens.",
    date: "2025-09-20",
    readTime: "5 min read",
    tags: ["Tailwind", "Design", "Frontend"],
    content: `Tailwind CSS isn't just utility classes — it's a framework for building design systems.\n\nBy leveraging CSS custom properties with Tailwind's configuration, you can create a token-based system that ensures consistency across your entire application. Semantic color names, spacing scales, and typography presets become the vocabulary your team speaks.\n\nThe result: faster development, fewer visual inconsistencies, and a codebase that's a joy to work with.`,
  },
];
