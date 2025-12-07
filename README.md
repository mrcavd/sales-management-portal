# Sales Management Portal (Electron Demo)

This project is a **Proof of Concept (PoC)** and discovery playground exploring the migration/adaptation of an existing production React-based Sales Management Dashboard into a desktop application using **Electron**.

The goal is to understand the architectural shifts, styling strategies, and developer experience when building desktop-first applications with web technologies, specifically moving away from heavy frameworks towards a lightweight, high-performance vanilla approach for the desktop environment.

## 🚀 Project Goals

*   **Electron Discovery**: Evaluate the capabilities and constraints of Electron for business dashboards.
*   **Vanilla TypeScript Architecture**: move away from React complexity to explore a modular, component-based architecture using vanilla TS.
*   **CSS Architecture**: Implement a scalable styling strategy using SCSS, BEM, and Folder-by-Feature organization without resolving to CSS-in-JS libraries.
*   **Desktop Native Feel**: Focus on responsive, window-aware layouts that feel native on macOS/Windows.

## 🛠 Tech Stack

*   **Runtime**: [Electron](https://www.electronjs.org/)
*   **Language**: TypeScript
*   **Bundler**: Vite
*   **Styling**: SCSS (Sass) with BEM methodology
*   **State/UI**: Vanilla DOM manipulation (No React/Vue/Angular)

## 📂 Project Structure

We follow a **Folder-by-Feature** architecture to ensure scalability and maintainability.

```
src/
├── api/                # Mock API layer simulating network requests
├── components/         # UI Components
│   ├── common/         # Atomic reusable components (Buttons, Tables, Cards)
│   ├── inventoryDashboard/
│   ├── reportDashboard/
│   ├── settingsPanel/
│   └── sidebar/
├── scss/               # Global styles (Variables, Resets)
├── main.ts             # Electron Main Process
├── preload.ts          # contextBridge / Preload scripts
└── renderer.ts         # Renderer Entry Point
```

## 🏃‍♂️ Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm start
    ```

3.  **Build for Production**
    ```bash
    npm run make
    ```

## 🎨 Design System

*   **Theming**: Native CSS Variables for Light/Dark mode support (HLS color space).
*   **Icons**: SVG-based monotone icons.
*   **Typography**: Inter font family.

## 📝 Notes

*   This is currently a purely frontend-focused demo. Data is mocked via `src/api/mockApi.ts`.
*   The project strictly adheres to **Co-location** for styles (`Component.ts` sits next to `Component.scss`).
