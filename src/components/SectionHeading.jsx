import COLORS from "../styles/colors";

export default function SectionHeading({ number, title }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 56,
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          color: COLORS.accent,
          fontSize: 14,
        }}
      >
        {number}.
      </span>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          flex: 1,
          height: 1,
          background: COLORS.border,
          marginLeft: 16,
        }}
      />
    </div>
  );
}
