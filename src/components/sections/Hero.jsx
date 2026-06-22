import COLORS from "../../styles/colors";
import useTyping from "../../hooks/useTyping";
import { typingRoles, stats, contact, heroTagline } from "../../data";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  const typed = useTyping(typingRoles);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Gradient overlays */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 20% 50%, ${COLORS.accentAlt}15 0%, transparent 60%)`,
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 80% 30%, ${COLORS.accent}08 0%, transparent 50%)`,
      }} />

      <div
        style={{
          position: "relative",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "80px 5% 40px",
          width: "100%",
        }}
      >
        {/* Greeting */}
        <div
          style={{
            fontFamily: "monospace",
            color: COLORS.accentGreen,
            fontSize: 14,
            marginBottom: 20,
            letterSpacing: 2,
          }}
        >
          {"// Hello, World!"}
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 16,
          }}
        >
          <span className="reveal-text-container">
            <span className="reveal-text">Muhammad</span>
          </span>
          <br />
          <span className="reveal-text-container">
            <span
              className="reveal-text reveal-delay-1"
              style={{ color: COLORS.accent, textShadow: `0 0 40px ${COLORS.accentGlow}` }}
            >
              Absar
            </span>
          </span>
        </h1>

        {/* Typing role */}
        <div
          style={{
            fontSize: "clamp(16px, 2.5vw, 24px)",
            color: COLORS.textDim,
            marginBottom: 20,
            fontFamily: "monospace",
            minHeight: 36,
          }}
        >
          <span style={{ color: COLORS.accentGreen }}>{">"}</span>{" "}
          <span style={{ color: COLORS.text }}>{typed}</span>
          <span style={{ animation: "blink 1s infinite", color: COLORS.accent }}>|</span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 16px)",
            color: COLORS.textMuted,
            maxWidth: 540,
            lineHeight: 1.8,
            marginBottom: 36,
          }}
        >
          {heroTagline}
        </p>

        {/* CTA buttons */}
        <div className="hero-ctas">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="cta-btn"
            style={{
              background: COLORS.accent,
              color: COLORS.bg,
              border: `1px solid ${COLORS.accent}`,
              padding: "12px 28px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              transition: "all 0.3s",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            View Projects →
          </button>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: COLORS.textDim,
              border: `1px solid ${COLORS.border}`,
              padding: "12px 24px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.25s",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = COLORS.accent;
              e.currentTarget.style.color = COLORS.accent;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = COLORS.border;
              e.currentTarget.style.color = COLORS.textDim;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <GithubIcon /> GitHub
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: COLORS.textDim,
              border: `1px solid ${COLORS.border}`,
              padding: "12px 24px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.25s",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#0A66C2";
              e.currentTarget.style.color = "#0A66C2";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = COLORS.border;
              e.currentTarget.style.color = COLORS.textDim;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <LinkedInIcon /> LinkedIn
          </a>

          <a
            href="/resume.pdf"
            download
            style={{
              background: "transparent",
              color: COLORS.accent,
              border: `1px solid ${COLORS.accent}40`,
              padding: "12px 24px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.25s",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "monospace",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${COLORS.accent}12`;
              e.currentTarget.style.borderColor = COLORS.accent;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = `${COLORS.accent}40`;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            ↓ Resume
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 700,
                  color: COLORS.accent,
                  fontFamily: "monospace",
                }}
              >
                {value}
              </div>
              <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 2 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
