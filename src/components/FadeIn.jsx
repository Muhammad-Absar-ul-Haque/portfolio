import useFadeIn from "../hooks/useFadeIn";

export default function FadeIn({ children, delay = 0 }) {
  const { ref, visible } = useFadeIn(delay);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}
