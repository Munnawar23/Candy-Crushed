🎮 CANDY CRUSH CLONE — MOBILE GAME  
Built using React Native CLI + TypeScript  

Branch: 👉 All development happens in the `dev` branch.  

📱 CORE FEATURES
- Match candies on a dynamic grid
- Smooth animations & cascading effects
- Responsive UI for all devices
- Works offline with fast storage
- Fun and engaging user experience

🏗️ TECH STACK & TOOLS
- Framework: React Native CLI
- State Management: Zustand
- Storage: MMKV
- Animations: Lottie-react-native
- Video: react-native-video
- Navigation: React Navigation with navigation refs
- Architecture: MVVM (Model-View-ViewModel)

🧠 HOW THE GAME WORKS
1️⃣ Home Screen
- Start a new game or continue

2️⃣ Game Board
- Interactive grid of candies
- Players swipe to match candies
- Robust matrix-based logic detects matches & cascades
- Responsive to screen size & orientation

3️⃣ Game Over / Victory Screens
- Displays score & stats
- Option to restart or go home

📁 STORAGE STRUCTURE
Each game state is saved using MMKV for fast and efficient access.

Storage Helpers:
- saveGame()
- loadGame()
- resetGame()

🌈 DESIGN & EXPERIENCE
- Smooth Lottie animations for feedback
- Video backgrounds for immersive feel
- Candy-themed, colorful and polished UI
- Optimized for performance & low latency

🖼️ REQUIRED ASSETS (in `src/assets`)
- candies/ — Candy images
- animations/ — Lottie files
- videos/ — Background or effect videos
- icons/ — Game icons & UI elements

📦 HOW TO RUN LOCALLY
```bash
git clone https://github.com/yourusername/Candy-Crushed.git
cd candy-crush-clone
git checkout dev
npm install
npx react-native run-android # or run-ios


👤 DEVELOPER INFO  
Munnawar Hussain  
GitHub: https://github.com/Munnawar23  
LinkedIn: https://linkedin.com/in/munnawar-hussain-aa544b227  
Email: munawwarh48@gmail.com