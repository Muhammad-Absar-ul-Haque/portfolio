import COLORS from "../../styles/colors";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import TiltCard from "../TiltCard";

const cardStyle = {
  background: COLORS.bgCard,
  border: `1px solid ${COLORS.border}`,
  borderRadius: 12,
  padding: 28,
};

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <SectionHeading number="01" title="About Me" />
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <FadeIn delay={100}>
            <div>
              <p
                style={{
                  color: COLORS.textDim,
                  lineHeight: 1.9,
                  fontSize: 15,
                  marginBottom: 20,
                }}
              >
                I'm a Backend Developer passionate about building robust,
                scalable systems that power modern applications. Currently at{" "}
                <span style={{ color: COLORS.accent }}>Code Avenue</span> in
                Karachi, I architect APIs and backend infrastructure that teams
                rely on daily.
              </p>
              <p
                style={{
                  color: COLORS.textDim,
                  lineHeight: 1.9,
                  fontSize: 15,
                  marginBottom: 20,
                }}
              >
                My expertise spans the Node.js ecosystem (Express.js, NestJS)
                and Java/Spring Boot for enterprise-grade systems. I've built
                everything from real-time chat applications to event-driven
                inventory platforms with Apache Kafka.
              </p>
              <p
                style={{
                  color: COLORS.textDim,
                  lineHeight: 1.9,
                  fontSize: 15,
                }}
              >
                I hold a Bachelor's in Computer Science from the{" "}
                <span style={{ color: COLORS.accent }}>
                  University of Karachi
                </span>{" "}
                (2022–2025) and am committed to writing clean, maintainable code
                that scales.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <TiltCard style={{ ...cardStyle, fontFamily: "monospace", fontSize: 13 }}>
              <div
                style={{
                  color: COLORS.textMuted,
                  marginBottom: 16,
                  fontSize: 11,
                  letterSpacing: 1,
                }}
              >
                absar.config.json
              </div>
              {[
                ["name", '"Muhammad Absar"'],
                ["role", '"Backend Developer"'],
                ["location", '"Karachi, Pakistan"'],
                ["email", '"absar.haque2003@gmail.com"'],
                ["phone", '"+92 318 2667926"'],
                ["education", '"B.Sc Computer Science"'],
                ["status", '"Open to opportunities"'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{ display: "flex", gap: 8, marginBottom: 8 }}
                >
                  <span style={{ color: COLORS.accentAlt }}>{k}:</span>
                  <span style={{ color: COLORS.accentGreen }}>{v}</span>
                </div>
              ))}
            </TiltCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
