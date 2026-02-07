import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socials } from "@/content/socials";
import { siteConfig } from "@/content/config";

gsap.registerPlugin(ScrollTrigger);

const SocialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".social-item") || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-spacing">
      <div className="section-container">
        <div className="mb-16">
          <span className="accent-dot mb-4 block" />
          <h2 className="heading-section text-foreground mb-4">Get in Touch</h2>
          <p className="text-body max-w-lg">
            Interested in working together? Feel free to reach out through any of
            these channels.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.openInNewTab ? "_blank" : undefined}
              rel={social.openInNewTab ? "noopener noreferrer" : undefined}
              className="social-item card-surface-hover flex flex-col items-center gap-3 py-8 group"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-muted-foreground group-hover:fill-primary transition-colors"
              >
                <path d={social.svgPath} />
              </svg>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with precision & purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
