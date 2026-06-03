# Md. Mehedi Hasan Chowdhury Mahi - Personal Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-badge-id/deploy-status)](https://homeschool.moonx.dev/) <!-- Note: User can replace with actual netlify deploy status badge if desired -->
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, high-performance, dark-theme-first, and fully responsive personal portfolio website showcasing the skills, qualifications, achievements, and experiences of **Md. Mehedi Hasan Chowdhury Mahi**.

Live Website: [https://its-mahiop.github.io/Portfolio/](https://github.com/its-MahiOP) *(or your deployed custom link)*

---

## ✨ Features

- **🌓 Dynamic Theme Toggle**: Seamless transition between dark and light themes (defaults to dark mode with theme preference saved in `localStorage`).
- **📱 Responsive Layout**: Fully optimized for mobile, tablet, and desktop screens using modern CSS Grid and Flexbox techniques.
- **⚡ Entrance Animations**: Elegant scroll-based reveal animations powered by the `IntersectionObserver` API.
- **✍️ Typewriter Effect**: Interactive subtitle typing animation highlighting key professional roles.
- **🧭 Scroll Spy**: Automatically highlights the active section in the navigation menu as the user scrolls.
- **🖼️ Photo Gallery Lightbox**: An interactive lightbox modal for exploring certificates and event photographs from competitions.
- **✉️ Interactive Contact Form**: Full client-side validation with real-time feedback.

---

## 🛠️ Tech Stack & Tools

- **Markup & Structure**: HTML5 (Semantic elements)
- **Styling & Layout**: Vanilla CSS3 (Custom properties/variables, Glassmorphism, CSS Grid & Flexbox, smooth transitions)
- **Behavior & Logic**: Vanilla JavaScript (ES6+, DOM Manipulation, `IntersectionObserver` API)
- **Icons**: [FontAwesome v6](https://fontawesome.com/)
- **Typography**: [Google Fonts (Inter & Outfit)](https://fonts.google.com/)
- **Hosting / CDN**: Configured for deployment on **Netlify** (optimized cache control and security headers in `netlify.toml`)

---

## 📂 Project Structure

```text
├── Hult Prize at Varendra University 2025-26/  # Images and certificates from Hult Prize
├── MillionX Bangladesh – 2026/                # Images/screenshots from the AI Build-a-thon
├── NASA Space Apps Challenge – 2025/          # Images/assets from NASA Space Apps
├── Robo-Soccer – 2024/                        # Images of the custom robot and competition
├── index.html                                 # Core entry page
├── styles.css                                 # Main stylesheet defining design system tokens
├── script.js                                  # Handles theme toggles, animations, lightbox, and form validation
├── netlify.toml                               # Hosting configuration with custom security/cache headers
├── profile.png                                # Portfolio profile picture
├── Md. Mehedi Hasan Chowdhury Mahi [Updated CV].pdf # User CV download link
└── README.md                                  # Project documentation (this file)
```

---

## 🚀 Running Locally

Since this is a static website, you can run it locally without any build steps:

### Option 1: Direct File Open
Double-click [index.html](file:///c:/Users/hasan/OneDrive/Documents/Portfolio/index.html) in your file explorer to open it in your preferred web browser.

### Option 2: Live Server (Recommended for development)
To run a local server with auto-reload capabilities:

**Using Node.js (`npx`):**
```bash
npx http-server .
```

**Using Python:**
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## ⚙️ How to Customize

1. **Change Profile Photo**: Replace [profile.png](file:///c:/Users/hasan/OneDrive/Documents/Portfolio/profile.png) with your own photo.
2. **Update Curriculum Vitae (CV)**: Replace the [Md. Mehedi Hasan Chowdhury Mahi [Updated CV].pdf](file:///c:/Users/hasan/OneDrive/Documents/Portfolio/Md. Mehedi Hasan Chowdhury Mahi [Updated CV].pdf) file with your latest CV (ensuring the filename matches or updating the link in `index.html` on line 76).
3. **Edit Content**: Open [index.html](file:///c:/Users/hasan/OneDrive/Documents/Portfolio/index.html) and search for the text sections (About, Skills, Experience, Achievements, etc.) to modify it.
4. **Modify Style**: Customize the CSS variables in the `:root` and `.light-theme` blocks at the top of [styles.css](file:///c:/Users/hasan/OneDrive/Documents/Portfolio/styles.css) to change the color palette, fonts, or gradients.

---

## 🌐 Deployment

This project is configured with a [netlify.toml](file:///c:/Users/hasan/OneDrive/Documents/Portfolio/netlify.toml) file ready for hosting on **Netlify**.

1. Connect your GitHub repository to Netlify.
2. Set the build command to `None` (empty) and publish directory to `.` (root).
3. Netlify will automatically handle HTTPS, compression, and apply the performance caching rules specified in the `netlify.toml` headers.
