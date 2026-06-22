import COLORS from "../../styles/colors";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import TiltCard from "../TiltCard";
import { projects } from "../../data";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const cardStyle = {
  background: COLORS.bgCard,
  border: `1px solid ${COLORS.border}`,
  borderRadius: 12,
  padding: 28,
  transition: "all 0.3s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

const linkBtnBase = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "7px 14px",
  borderRadius: 6,
  fontSize: 12,
  fontFamily: "monospace",
  fontWeight: 500,
  textDecoration: "none",
  transition: "all 0.2s",
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <SectionHeading number="03" title="Projects" />
        </FadeIn>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <FadeIn key={i} delay={i * 80}>
              <TiltCard className="proj-card" style={cardStyle}>
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 14,
                  }}
                >
                  <div style={{ fontSize: 20, color: COLORS.accentAlt }}>{"{ }"}</div>
                  <span
                    style={{
                      background: `${COLORS.accentGreen}15`,
                      color: COLORS.accentGreen,
                      fontSize: 10,
                      padding: "3px 8px",
                      borderRadius: 4,
                      fontFamily: "monospace",
                      letterSpacing: 0.5,
                    }}
                  >
                    {p.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10 }}>
                  {p.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: COLORS.textMuted,
                    fontSize: 13,
                    lineHeight: 1.75,
                    flex: 1,
                    marginBottom: 16,
                  }}
                >
                  {p.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: COLORS.border,
                        color: COLORS.textDim,
                        fontSize: 11,
                        padding: "3px 8px",
                        borderRadius: 4,
                        fontFamily: "monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="proj-links" style={{ marginTop: "auto" }}>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...linkBtnBase,
                        background: `${COLORS.accent}12`,
                        color: COLORS.accent,
                        border: `1px solid ${COLORS.accent}30`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${COLORS.accent}25`;
                        e.currentTarget.style.borderColor = COLORS.accent;
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${COLORS.accent}12`;
                        e.currentTarget.style.borderColor = `${COLORS.accent}30`;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <GithubIcon /> GitHub
                    </a>
                  )}
                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...linkBtnBase,
                        background: `${COLORS.accentAlt}12`,
                        color: COLORS.accentAlt,
                        border: `1px solid ${COLORS.accentAlt}30`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${COLORS.accentAlt}25`;
                        e.currentTarget.style.borderColor = COLORS.accentAlt;
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${COLORS.accentAlt}12`;
                        e.currentTarget.style.borderColor = `${COLORS.accentAlt}30`;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      ↗ Live Demo
                    </a>
                  )}
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
