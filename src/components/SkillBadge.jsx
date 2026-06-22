import { useState, useEffect, useRef } from "react";
import COLORS from "../styles/colors";

export default function SkillBadge({ skill, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 16px",
        margin: "0 8px 10px 0",
        background: isHovered ? `${COLORS.accent}15` : `${COLORS.bgCardHover}90`,
        border: `1px solid ${isHovered ? COLORS.accent : COLORS.border}`,
        borderRadius: "20px",
        color: isHovered ? COLORS.accent : COLORS.text,
        fontSize: "13.5px",
        fontWeight: "500",
        letterSpacing: "0.3px",
        cursor: "default",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transform: isVisible 
          ? (isHovered ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)") 
          : "translateY(20px) scale(0.9)",
        opacity: isVisible ? 1 : 0,
        boxShadow: isHovered ? `0 6px 16px ${COLORS.accentGlow}` : "none",
      }}
    >
      <span style={{ 
        marginRight: "6px", 
        color: isHovered ? COLORS.accent : COLORS.accentAlt,
        transition: "color 0.3s ease",
        fontSize: "14px",
        lineHeight: "1"
      }}>
        ❖
      </span>
      {skill}
    </div>
  );
}
