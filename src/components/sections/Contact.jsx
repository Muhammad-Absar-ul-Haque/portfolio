import COLORS from "../../styles/colors";
import FadeIn from "../FadeIn";
import { contact } from "../../data";

export default function Contact() {
  const items = [
    { icon: "📧", label: "Email",    value: contact.email,    href: `mailto:${contact.email}` },
    { icon: "📞", label: "Phone",    value: contact.phone,    href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: "🐙", label: "GitHub",   value: "Muhammad-Absar-ul-Haque", href: contact.github },
    { icon: "📍", label: "Location", value: contact.location, href: null },
  ];

  return (
    <section id="contact" style={{ padding: "100px 5%" }}>
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 48,
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                color: COLORS.accent,
                fontSize: 14,
              }}
            >
              05.
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
              }}
            >
              Contact
            </h2>
          </div>

          <p
            style={{
              color: COLORS.textMuted,
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 48,
            }}
          >
            I'm currently open to new opportunities. Whether you have a project,
            a question, or just want to connect — my inbox is always open.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {items.map(({ icon, label, value, href }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                <div
                  style={{
                    fontSize: 11,
                    color: COLORS.textMuted,
                    marginBottom: 4,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: COLORS.textDim,
                      fontSize: 13,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                    onMouseLeave={(e) => (e.target.style.color = COLORS.textDim)}
                  >
                    {value}
                  </a>
                ) : (
                  <span style={{ color: COLORS.textDim, fontSize: 13 }}>
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
