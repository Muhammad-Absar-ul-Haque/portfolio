import { useState, useEffect } from "react";
import COLORS from "../styles/colors";
import { navLinks } from "../data";

export default function Nav({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? `${COLORS.bg}ee` : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
        transition: "all 0.3s ease",
        padding: "0 5%",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 20,
            fontWeight: 700,
            color: COLORS.accent,
            letterSpacing: 1,
          }}
        >
          {"<MA />"}
        </div>

        <div style={{ display: "flex", gap: 4 }}>
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              style={{
                position: "relative",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 14px",
                borderRadius: 6,
                fontSize: 13,
                color: active === l ? COLORS.accent : COLORS.textDim,
                fontWeight: active === l ? 600 : 400,
                transition: "color 0.3s, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fontFamily: "monospace",
              }}
            >
              {l}
              {active === l && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "15%",
                    width: "70%",
                    height: 2,
                    background: COLORS.accent,
                    borderRadius: 2,
                    boxShadow: `0 0 10px ${COLORS.accentGlow}`,
                    animation: "fadeInUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards"
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
