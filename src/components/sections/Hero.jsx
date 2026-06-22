import COLORS from "../../styles/colors";
import useTyping from "../../hooks/useTyping";
import { typingRoles, stats } from "../../data";

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
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 20% 50%, ${COLORS.accentAlt}15 0%, transparent 60%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 80% 30%, ${COLORS.accent}08 0%, transparent 50%)`,
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 5%",
          width: "100%",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            color: COLORS.accentGreen,
            fontSize: 14,
            marginBottom: 16,
            letterSpacing: 2,
          }}
        >
          {"// Hello, World!"}
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.1,
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
              style={{
                color: COLORS.accent,
                textShadow: `0 0 40px ${COLORS.accentGlow}`,
              }}
            >
              Absar
            </span>
          </span>
        </h1>

        <div
          style={{
            fontSize: "clamp(18px, 3vw, 28px)",
            color: COLORS.textDim,
            marginBottom: 28,
            fontFamily: "monospace",
            minHeight: 40,
          }}
        >
          <span style={{ color: COLORS.accentGreen }}>{">"}</span>{" "}
          <span style={{ color: COLORS.text }}>{typed}</span>
          <span
            style={{
              animation: "blink 1s infinite",
              color: COLORS.accent,
            }}
          >
            |
          </span>
        </div>

        <p
          style={{
            fontSize: 16,
            color: COLORS.textMuted,
            maxWidth: 520,
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          Building scalable, high-performance server-side systems with Node.js,
          Spring Boot, and cloud-native architectures. Based in Karachi,
          Pakistan.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cta-btn"
            style={{
              background: COLORS.accent,
              color: COLORS.bg,
              border: `1px solid ${COLORS.accent}`,
              padding: "12px 28px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            View Projects →
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cta-btn2"
            style={{
              background: "transparent",
              color: COLORS.text,
              border: `1px solid ${COLORS.border}`,
              padding: "12px 28px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        {/* <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 64,
            flexWrap: "wrap",
          }}
        >
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: COLORS.accent,
                  fontFamily: "monospace",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: COLORS.textMuted,
                  marginTop: 2,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
