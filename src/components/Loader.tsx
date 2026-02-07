import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<SVGSVGElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || !textRef.current || !containerRef.current) return;

    const paths = textRef.current.querySelectorAll("text");
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.02,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete,
        });
      },
    });

    // Animate stroke drawing
    tl.fromTo(
      paths,
      {
        strokeDasharray: "100%",
        strokeDashoffset: "100%",
        fillOpacity: 0,
      },
      {
        strokeDashoffset: "0%",
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.15,
      }
    ).to(
      paths,
      {
        fillOpacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, [ready, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <svg
        ref={textRef}
        viewBox="0 0 800 120"
        className="w-[90vw] max-w-[700px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="400"
          y="55"
          textAnchor="middle"
          className="fill-foreground font-display"
          style={{
            fontSize: "48px",
            fontWeight: 700,
            stroke: "hsl(var(--foreground))",
            strokeWidth: 1.5,
            fillOpacity: 0,
            paintOrder: "stroke",
          }}
        >
          Hassan Raza Ghazi
        </text>
        <text
          x="400"
          y="95"
          textAnchor="middle"
          className="fill-primary font-sans"
          style={{
            fontSize: "18px",
            fontWeight: 400,
            stroke: "hsl(var(--primary))",
            strokeWidth: 0.8,
            fillOpacity: 0,
            letterSpacing: "0.2em",
          }}
        >
          FULL-STACK DEVELOPER
        </text>
      </svg>
    </div>
  );
};

export default Loader;
