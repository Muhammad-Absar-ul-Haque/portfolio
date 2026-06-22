# Muhammad Absar — Portfolio

A dark-terminal themed React portfolio website.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx          # Landing section with particle canvas & typewriter
│   │   │   ├── About.jsx         # Bio + JSON config card
│   │   │   ├── Experience.jsx    # Work history timeline
│   │   │   ├── Projects.jsx      # Project cards grid
│   │   │   ├── Skills.jsx        # Animated skill bars + certifications
│   │   │   ├── Contact.jsx       # Contact info & CTA
│   │   │   └── Footer.jsx        # Footer
│   │   ├── FadeIn.jsx            # Scroll-triggered fade-in wrapper
│   │   ├── Nav.jsx               # Sticky navigation bar
│   │   ├── ParticleCanvas.jsx    # Animated particle network background
│   │   ├── SectionHeading.jsx    # Numbered section header
│   │   └── SkillBar.jsx          # Animated progress bar
│   ├── data/
│   │   └── index.js              # All portfolio content (edit here!)
│   ├── hooks/
│   │   ├── useTyping.js          # Typewriter effect hook
│   │   └── useFadeIn.js          # IntersectionObserver fade-in hook
│   ├── styles/
│   │   ├── colors.js             # Design tokens / color palette
│   │   └── global.css            # Global resets & keyframe animations
│   ├── App.jsx                   # Root component
│   └── index.js                  # React entry point
└── package.json
```

## ✏️ Customization

All content (skills, projects, experience, contact info) lives in **`src/data/index.js`** — edit that file to update the portfolio.

Colors and design tokens are in **`src/styles/colors.js`**.
