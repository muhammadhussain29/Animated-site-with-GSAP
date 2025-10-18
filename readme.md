# Animate with GSAP

## 🌀 Overview
**Animate with GSAP** is a creative front-end web project built using **HTML**, **Tailwind CSS**, and **GSAP (GreenSock Animation Platform)**.  
This project showcases advanced animations, smooth transitions, and interactive elements such as a custom cursor, animated loader, scroll-triggered effects, and a responsive navigation menu.

## 🚀 Features
- Custom animated cursor using GSAP.
- Preloader animation sequence with multiple image frames.
- Responsive navigation bar with scroll-based hide/show effect.
- Smooth open/close animations for the mobile navigation menu.
- Scroll-triggered animations for text, video, and section transitions.
- Tailwind CSS for styling with responsive design.
- GSAP ScrollTrigger for dynamic scroll-based animations.

## 🧠 Technologies Used
- **HTML5**
- **Tailwind CSS**
- **JavaScript (GSAP + ScrollTrigger)**

## 📂 Project Structure
```
Animate-with-GSAP/
├── asset/
│   ├── loader-1.png ... loader-9.png
│   ├── p-1.mp4 ... p-5.webp
│   ├── logo.jpg
│   ├── gif.gif
│   └── part-1.svg ... part-24.svg
├── dist/
│   └── styles.css
├── index.html
├── script.js
└── tailwind.config.js
```

## ⚙️ How It Works
1. The **loader** plays a sequence of images with GSAP before revealing the main site.
2. The **cursor** dynamically follows mouse movement and becomes visible when hovering over interactive elements.
3. The **navbar** hides on scroll down and reappears on scroll up.
4. On mobile, the **hamburger menu** animates into an “X” and slides open a full-screen navigation overlay.
5. Scroll-triggered animations bring the text, video, and sections to life.

## 🧩 Setup Instructions

### 1️⃣ Clone this Repository
```bash
git clone https://github.com/yourusername/animate-with-gsap.git
cd animate-with-gsap
```

### 2️⃣ Install Tailwind CSS (optional if already compiled)
If you plan to modify Tailwind styles, run:
```bash
npm install -D tailwindcss
npx tailwindcss -i ./src/style.css -o ./dist/styles.css --watch
```

### 3️⃣ Run the Project
Simply open `index.html` in your browser or use a live server extension (like VS Code Live Server).

## 🖼️ Preview
The project includes animated sections such as:
- **Hero Section:** Animated “Hello” text entrance.
- **Tagline Section:** Scroll-based text animation.
- **Expertise Section:** Horizontal text scroll effect.
- **Footer:** Smooth text reveal animation.

## 📸 Demo
You can see the animation effects in action by opening the live demo (if deployed).  
Example: [Live Demo](#)

## 🧑‍💻 Author
**Muhammad Hussain Mughal**  
Front-End Developer | Web Animation Enthusiast  
[LinkedIn](https://www.linkedin.com/in/muhammad-hussain-mughal-213069248/)

## 📜 License
This project is open-source and available under the **MIT License**.
