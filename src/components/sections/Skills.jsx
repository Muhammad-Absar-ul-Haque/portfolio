import COLORS from "../../styles/colors";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import SkillBadge from "../SkillBadge";
import { skills, certifications } from "../../data";

const cardStyle = {
  background: COLORS.bgCard,
  border: `1px solid ${COLORS.border}`,
  borderRadius: 12,
  padding: 28,
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "100px 5%", background: `${COLORS.bgCard}80` }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <SectionHeading number="04" title="Skills" />
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 28,
          }}
        >
          {Object.entries(skills).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 80}>
              <div style={cardStyle}>
                <h3
                  style={{
                    color: COLORS.accent,
                    fontSize: 13,
                    fontFamily: "monospace",
                    letterSpacing: 1,
                    marginBottom: 20,
                    textTransform: "uppercase",
                  }}
                >
                  {category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
                  {items.map((skill, j) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      delay={j * 60}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
        <FadeIn delay={200}>
          <div style={{ marginTop: 60 }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              Certifications
            </h3>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {certifications.map((c, i) => (
                <div
                  key={i}
                  style={{
                    ...cardStyle,
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: `${COLORS.accent}15`,
                      border: `1px solid ${COLORS.accent}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                    }}
                  >
                    🏅
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        marginBottom: 2,
                      }}
                    >
                      {c.name}
                    </div>
                    <div style={{ fontSize: 11, color: COLORS.textMuted }}>
                      {c.issuer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
