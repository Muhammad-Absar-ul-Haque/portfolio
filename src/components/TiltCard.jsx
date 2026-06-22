import { useRef, useEffect } from "react";

export default function TiltCard({ children, className, style, onClick }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // We only apply tilt if the user is using a fine pointer (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate tilt based on mouse position relative to center
      const tiltX = ((y - centerY) / centerY) * -8;
      const tiltY = ((x - centerX) / centerX) * 8;

      el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Add subtle lighting effect based on mouse position
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      el.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.06) 0%, transparent 60%), ${style.background || "transparent"}`;
    };

    const handleMouseLeave = () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      el.style.background = style.background || "transparent";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [style.background]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.2s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onClick={onClick}
    >
      <div style={{ transform: "translateZ(30px)", display: "flex", flexDirection: "column", height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
