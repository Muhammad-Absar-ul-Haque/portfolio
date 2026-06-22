import COLORS from "../../styles/colors";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import TiltCard from "../TiltCard";
import { projects } from "../../data";

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

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <SectionHeading number="03" title="Projects" />
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p, i) => (
            <FadeIn key={i} delay={i * 80}>
              <TiltCard
                className="proj-card"
                style={{
                  ...cardStyle,
                  cursor: p.link ? "pointer" : "default",
                }}
                onClick={() => p.link && window.open(p.link, "_blank")}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 14,
                  }}
                >
                  <div style={{ fontSize: 20, color: COLORS.accentAlt }}>
                    {"{ }"}
                  </div>
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

                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    color: COLORS.textMuted,
                    fontSize: 13,
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: 16,
                  }}
                >
                  {p.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
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

                {p.link && (
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 12,
                      color: COLORS.accent,
                      fontFamily: "monospace",
                    }}
                  >
                    View on GitHub →
                  </div>
                )}
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
