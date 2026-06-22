import { useState, useEffect } from "react";
import COLORS from "../styles/colors";
import { navLinks } from "../data";

export default function Nav({ active, setActive }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 80) setMenuOpen(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const hasBg = scrolled || menuOpen;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: hasBg ? `${COLORS.bg}f0` : "transparent",
          backdropFilter: hasBg ? "blur(16px)" : "none",
          WebkitBackdropFilter: hasBg ? "blur(16px)" : "none",
          borderBottom: hasBg ? `1px solid ${COLORS.border}` : "none",
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
          {/* Logo */}
          <button
            onClick={() => scrollTo("Home")}
            style={{
              background: "none",
              border: "none",
              fontFamily: "monospace",
              fontSize: 20,
              fontWeight: 700,
              color: COLORS.accent,
              letterSpacing: 1,
              padding: 0,
            }}
          >
            {"<MA />"}
          </button>

          {/* Desktop links */}
          <div className="nav-links">
            {navLinks.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                style={{
                  position: "relative",
                  background: "none",
                  border: "none",
                  padding: "6px 14px",
                  borderRadius: 6,
                  fontSize: 13,
                  color: active === l ? COLORS.accent : COLORS.textDim,
                  fontWeight: active === l ? 600 : 400,
                  transition: "color 0.3s, transform 0.3s cubic-bezier(0.175,0.885,0.32,1.275)",
                  fontFamily: "monospace",
                }}
              >
                {l}
                {active === l && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0, left: "15%",
                      width: "70%", height: 2,
                      background: COLORS.accent,
                      borderRadius: 2,
                      boxShadow: `0 0 10px ${COLORS.accentGlow}`,
                      animation: "fadeInUp 0.3s cubic-bezier(0.175,0.885,0.32,1.275) forwards",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: `1px solid ${menuOpen ? COLORS.accent : COLORS.border}`,
              borderRadius: 8,
              padding: "7px 9px",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
              width: 40, height: 40,
              transition: "border-color 0.2s",
            }}
          >
            <span style={{
              display: "block", width: 18, height: 2,
              background: menuOpen ? COLORS.accent : COLORS.textDim,
              borderRadius: 2,
              transition: "all 0.25s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: 18, height: 2,
              background: menuOpen ? COLORS.accent : COLORS.textDim,
              borderRadius: 2,
              transition: "all 0.25s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 18, height: 2,
              background: menuOpen ? COLORS.accent : COLORS.textDim,
              borderRadius: 2,
              transition: "all 0.25s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <div className={`mobile-nav-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map((l, i) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            style={{
              background: "none",
              border: "none",
              borderBottom: i < navLinks.length - 1 ? `1px solid ${COLORS.border}` : "none",
              padding: "14px 0",
              fontSize: 15,
              color: active === l ? COLORS.accent : COLORS.textDim,
              fontWeight: active === l ? 600 : 400,
              fontFamily: "monospace",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: 10,
              transition: "color 0.2s",
            }}
          >
            <span style={{ color: COLORS.accent, opacity: active === l ? 1 : 0.3, fontSize: 12 }}>
              ›
            </span>
            {l}
          </button>
        ))}
      </div>
    </>
  );
}
