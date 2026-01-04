# GSAP Portfolio - Interactive Animated Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://gautamk01.github.io/GSAP-PROJECT-1/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.5-green)](https://greensock.com/gsap/)
[![Vite](https://img.shields.io/badge/Vite-6.0.3-purple)](https://vitejs.dev/)

A stunning, interactive portfolio website featuring advanced GSAP animations, dynamic text effects, and color-shifting glows. Built with React and Vite, this project showcases modern web development techniques with a focus on performance and visual excellence.

## 🌟 Live Demo

**[View Live Demo →](https://gautamk01.github.io/GSAP-PROJECT-1/)**

---

## ✨ Features

### 🎭 **Advanced Animations**

- **Intro Sequence**: Sophisticated multi-timeline GSAP animation with counter, overlay text cycling, and image reveals
- **Dual-Layer Text Effect**: Unique solid-to-outline text transition when overlapping with images
- **Color-Shifting Glow**: Smooth transitions between blue, purple, and cyan glows on the hero image
- **Light Effects**: Dynamic drop-shadow effects that activate when images align during intro
- **Smooth Scroll**: Seamless navigation with React-controlled smooth scrolling

### 🎨 **Visual Effects**

- **Mix Blend Mode**: Advanced CSS blend modes for outline text effect over images
- **Dynamic Navigation**: Auto-hiding navigation during intro with scroll-triggered appearance
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile
- **Loading Indicator**: Visual feedback with percentage-based image preloading
- **Premium Typography**: Custom fonts (DM Sans & DM Mono) for modern aesthetics

### ⚡ **Performance Optimizations**

- **Image Preloading**: All images load before animation starts to prevent visual glitches
- **Lazy Rendering**: Efficient React hooks for scroll detection and state management
- **GSAP Context API**: Proper cleanup to prevent memory leaks
- **Will-Change Properties**: Optimized for GPU acceleration on animated elements
- **Code Splitting**: Vite-powered build with optimized chunks

---

## 🛠️ Tech Stack

| Technology       | Purpose                                               |
| ---------------- | ----------------------------------------------------- |
| **React 18.3**   | UI library for component-based architecture           |
| **GSAP 3.12**    | Professional-grade animation library                  |
| **Vite 6.0**     | Lightning-fast build tool and dev server              |
| **CSS3**         | Modern styling with custom properties and blend modes |
| **GitHub Pages** | Static site hosting and deployment                    |

### GSAP Plugins Used

- **CustomEase**: Custom easing curves for unique animation feel
- **SplitText**: Word-level text animation for hero header

---

## 🎬 Animation Breakdown

### **Intro Animation Sequence** (~8 seconds)

1. **Counter Animation** (0-100%): 5-second power2.out ease
2. **Overlay Text Cycling**: 4-stage vertical text reveal with custom "hop" easing
3. **Image Grid Reveal**: Staggered opacity and position animations
4. **Image Alignment**: Gap reduction with scaling effects
5. **Light Glow Effect**: Multi-layered drop-shadow (white + blue)
6. **Hero Focus**: Scale-up of center image with peripheral fade-out
7. **Text Reveal**: Staggered word animation with translateY
8. **Outline Activation**: Dual-layer text effect fade-in

### **Continuous Effects**

- **Color-Shifting Glow**: Infinite yoyo animation cycling through:
  - Blue (rgba(41, 98, 255))
  - Purple (rgba(168, 85, 247))
  - Cyan (rgba(6, 182, 212))
- **Navigation Fade**: Opacity transition on scroll
- **Smooth Scroll**: Hardware-accelerated scroll behavior

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/gautamk01/GSAP-PROJECT-1.git

# Navigate to project directory
cd GSAP-PROJECT-1

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## 📁 Project Structure

```
GSAP-PROJECT-1/
├── public/
│   └── image/              # Hero section images (1.jpg - 5.jpg)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx  # Scroll-reactive navigation
│   │   ├── Hero.jsx        # Main intro animation component
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Services/skills grid
│   │   └── Contact.jsx     # Contact section
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   └── main.jsx            # React entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

---

## 🎯 Key Features Explained

### Dual-Layer Text Effect

The hero text uses a "sandwich" layering technique:

- **Layer 1 (Bottom)**: Solid black text (z-index: 1)
- **Layer 2 (Middle)**: Hero images (z-index: 5)
- **Layer 3 (Top)**: Transparent text with white stroke (z-index: 10)

Combined with `mix-blend-mode: difference`, this creates a unique effect where:

- Text appears **solid** on white background
- Text appears as **outline** when overlapping images

### Image Preloading System

```javascript
// Creates Image objects and waits for onload
Promise.all(imageUrls.map(loadImage)).then(() => startAnimations());
```

- Prevents broken images during animation
- Shows loading percentage to user
- Ensures smooth playback from first frame

### Scroll Lock Mechanism

```javascript
// Disable during intro
document.body.style.overflow = "hidden";

// Re-enable after animation
onComplete: () => {
  document.body.style.overflow = "auto";
};
```

- Creates immersive intro experience
- Prevents scrolling distraction during animation

---

## 📱 Responsive Breakpoints

| Breakpoint  | Width    | Adjustments                               |
| ----------- | -------- | ----------------------------------------- |
| **Desktop** | > 1000px | Full layout with all effects              |
| **Tablet**  | ≤ 1000px | Reduced font sizes, adjusted image widths |
| **Mobile**  | ≤ 600px  | Stacked navigation, optimized typography  |

---

## 🎨 Design Philosophy

### Color Palette

- **Primary**: Black (#000) / White (#fff)
- **Accent Glows**: Blue, Purple, Cyan (RGB with alpha)
- **Background**: Solid black for content sections

### Typography

- **Headings**: DM Mono (monospace) - technical, modern feel
- **Body**: DM Sans (sans-serif) - clean readability
- **Weights**: 300-500 range for hierarchy

### Animation Principles

- **Easing**: Custom "hop" easing for unique feel (0.85, 0, 0.15, 1)
- **Timing**: Overlapping animations for continuity
- **Stagger**: 0.05-0.1s delays for sequential reveals
- **Duration**: 0.75-1s for most transitions (not too fast/slow)

---

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Note**: Requires support for CSS `mix-blend-mode`, `-webkit-text-stroke`, and modern ES6+ features.

---

## 🔧 Configuration

### Vite Config

```javascript
base: command === "build" ? "/GSAP-PROJECT-1/" : "/";
```

- Conditional base path for GitHub Pages deployment
- Root path for local development

### GSAP Registration

```javascript
gsap.registerPlugin(CustomEase, SplitText);
CustomEase.create("hop", "0.85, 0, 0.15, 1");
```

---

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ Performance
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: ~235KB (gzipped: 82KB)

---

## 🤝 Contributing

This is a portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Gautam Krishna M**

- GitHub: [@gautamk01](https://github.com/gautamk01)
- Portfolio: [Live Demo](https://gautamk01.github.io/GSAP-PROJECT-1/)

---

## 🙏 Acknowledgments

- **GSAP** by GreenSock for the amazing animation library
- **React Team** for the robust UI framework
- **Vite Team** for the blazing-fast build tool
- **Google Fonts** for DM Sans and DM Mono typography

---

## 📚 Learning Resources

If you want to build something similar, check out:

- [GSAP Documentation](https://greensock.com/docs/)
- [React Hooks Guide](https://react.dev/reference/react)
- [Vite Guide](https://vitejs.dev/guide/)
- [Modern CSS Techniques](https://web.dev/learn/css/)

---

**⭐ If you found this project helpful, please consider giving it a star!**

---

_Last Updated: January 2026_
