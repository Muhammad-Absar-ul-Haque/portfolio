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

const categoryIcons = {
  Backend:           "⚙️",
  Frontend:          "🖥️",
  "Databases & ORM": "🗄️",
  "Tools & DevOps":  "🛠️",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad"
      style={{ background: `${COLORS.bgCard}80` }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <SectionHeading number="04" title="Skills" />
        </FadeIn>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 80}>
              <div style={cardStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{ fontSize: 18 }}>{categoryIcons[category] ?? "💡"}</span>
                  <h3
                    style={{
                      color: COLORS.accent,
                      fontSize: 12,
                      fontFamily: "monospace",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {category}
                  </h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {items.map((skill, j) => (
                    <SkillBadge key={skill} skill={skill} delay={j * 60} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
        <FadeIn delay={200}>
          <div style={{ marginTop: 60 }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24 }}>
              Certifications
            </h3>
            <div className="certs-grid">
              {certifications.map((c, i) => (
                <div
                  key={i}
                  style={{
                    ...cardStyle,
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    transition: "border-color 0.25s, transform 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${COLORS.accent}60`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = COLORS.border;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: 36, height: 36,
                      borderRadius: "50%",
                      background: `${COLORS.accent}15`,
                      border: `1px solid ${COLORS.accent}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      flexShrink: 0,
                    }}
                  >
                    🏅
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>
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
