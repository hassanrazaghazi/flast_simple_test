import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogs, type BlogPost } from "@/content/blogs";

gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({
  post,
  onClick,
}: {
  post: BlogPost;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="project-card card-surface-hover text-left w-full group"
  >
    <div className="flex flex-wrap gap-2 mb-3">
      {post.tags.map((tag) => (
        <span
          key={tag}
          className="text-[10px] font-semibold tracking-widest uppercase text-primary"
        >
          {tag}
        </span>
      ))}
    </div>
    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
      {post.title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      {post.excerpt}
    </p>
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
      <span>·</span>
      <span>{post.readTime}</span>
    </div>
  </button>
);

const BlogModal = ({
  post,
  onClose,
}: {
  post: BlogPost;
  onClose: () => void;
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(
      contentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out", delay: 0.1 }
    );

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-background/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={contentRef}
        className="w-full max-w-2xl rounded-xl border border-border bg-card p-8 md:p-12 mb-20"
      >
        <button
          onClick={onClose}
          className="mb-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to posts
        </button>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-widest uppercase text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
          {post.title}
        </h2>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
          <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <div className="prose prose-sm max-w-none">
          {post.content.split("\n").map((paragraph, i) =>
            paragraph.trim() ? (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground mb-4">
                {paragraph}
              </p>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".project-card");
      if (!cards) return;

      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} id="blog" className="section-spacing">
        <div className="section-container">
          <div className="mb-16">
            <span className="accent-dot mb-4 block" />
            <h2 className="heading-section text-foreground mb-4">Blog</h2>
            <p className="text-body max-w-lg">
              Thoughts on development, architecture, and building better software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </>
  );
};

export default BlogSection;
