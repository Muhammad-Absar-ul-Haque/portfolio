import { useState } from "react";
import COLORS from "./styles/colors";
import Cursor from "./components/Cursor";
import VantaBackground from "./components/VantaBackground";
import Nav from "./components/Nav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  const [active, setActive] = useState("Home");

  return (
    <div 
      style={{ 
        color: COLORS.text, 
        minHeight: "100vh",
        overflowX: "hidden"
      }}
    >
      <style>{`
        .proj-card:hover {
          border-color: ${COLORS.accent} !important;
          transform: translateY(-4px);
          box-shadow: 0 8px 32px ${COLORS.accentGlow};
        }
        .cta-btn {
          position: relative;
          overflow: hidden;
        }
        .cta-btn::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          width: 300%; height: 300%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.5s ease-out;
          border-radius: 50%;
        }
        .cta-btn:hover::after {
          transform: translate(-50%, -50%) scale(1);
        }
        .cta-btn:hover {
          background: transparent !important;
          color: ${COLORS.accent} !important;
          box-shadow: 0 0 25px ${COLORS.accentGlow} !important;
        }
        .cta-btn2:hover {
          background: ${COLORS.accentAlt}22 !important;
          border-color: ${COLORS.accentAlt} !important;
          box-shadow: 0 0 20px ${COLORS.accentAlt}40 !important;
        }
        .reveal-text-container { overflow: hidden; display: inline-block; vertical-align: top; }
        .reveal-text { 
          display: inline-block; 
          animation: textReveal 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; 
          transform: translateY(100%); 
          opacity: 0; 
        }
        .reveal-delay-1 { animation-delay: 0.1s; }
        .reveal-delay-2 { animation-delay: 0.3s; }
        @keyframes textReveal {
          0% { transform: translateY(100%) rotate(5deg); opacity: 0; }
          100% { transform: translateY(0) rotate(0deg); opacity: 1; }
        }
      `}</style>

      <VantaBackground />
      <Cursor />
      <Nav active={active} setActive={setActive} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
