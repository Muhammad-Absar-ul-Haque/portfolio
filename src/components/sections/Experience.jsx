import COLORS from "../../styles/colors";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import TiltCard from "../TiltCard";
import { experience } from "../../data";

const cardStyle = {
  background: COLORS.bgCard,
  border: `1px solid ${COLORS.border}`,
  borderRadius: 12,
  padding: 28,
  transition: "all 0.3s ease",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad"
      style={{ background: `${COLORS.bgCard}80` }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <SectionHeading number="02" title="Experience" />
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 120}>
              <TiltCard
                style={{
                  ...cardStyle,
                  borderLeft: `3px solid ${i === 0 ? COLORS.accent : COLORS.accentAlt}`,
                }}
              >
                {/* Role + period row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 20,
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 600, marginBottom: 4 }}>
                      {exp.role}
                    </h3>
                    <span style={{ color: COLORS.accent, fontSize: 14, fontWeight: 500 }}>
                      {exp.company}
                    </span>
                  </div>
                  <span
                    style={{
                      background: `${COLORS.accent}15`,
                      color: COLORS.accent,
                      border: `1px solid ${COLORS.accent}30`,
                      borderRadius: 20,
                      padding: "4px 14px",
                      fontSize: 12,
                      fontFamily: "monospace",
                      whiteSpace: "nowrap",
                      alignSelf: "flex-start",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {exp.points.map((pt, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: 10,
                        color: COLORS.textDim,
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: COLORS.accentGreen, marginTop: 2, flexShrink: 0 }}>
                        ▸
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
