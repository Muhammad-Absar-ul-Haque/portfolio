import COLORS from "../../styles/colors";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        padding: "24px 5%",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: COLORS.textMuted,
          fontSize: 12,
          fontFamily: "monospace",
        }}
      >
        Designed & Built by{" "}
        <span style={{ color: COLORS.accent }}>Muhammad Absar</span> ·{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
