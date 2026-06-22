import { useEffect, useState } from "react";
import COLORS from "../styles/colors";

function CursorInner() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      setDotPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId;
    const followMouse = () => {
      setPos((prev) => {
        const dx = dotPos.x - prev.x;
        const dy = dotPos.y - prev.y;
        return { x: prev.x + dx * 0.2, y: prev.y + dy * 0.2 };
      });
      animationFrameId = requestAnimationFrame(followMouse);
    };
    followMouse();
    return () => cancelAnimationFrame(animationFrameId);
  }, [dotPos]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName?.toLowerCase() === "button" ||
        target.tagName?.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("proj-card") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: dotPos.y,
          left: dotPos.x,
          width: 8,
          height: 8,
          backgroundColor: isHovering ? COLORS.accentGreen : COLORS.accent,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "background-color 0.3s",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: isHovering ? 46 : 30,
          height: isHovering ? 46 : 30,
          border: `1.5px solid ${isHovering ? COLORS.accentGreen : COLORS.accent}`,
          backgroundColor: isHovering ? `${COLORS.accentGreen}15` : "transparent",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          transition:
            "width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s, background-color 0.3s",
        }}
      />
    </>
  );
}

export default function Cursor() {
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (!isFinePointer) return null;
  return <CursorInner />;
}
