# Sales Management Portal (Electron Demo)

This project is a **Proof of Concept (PoC)** and discovery playground exploring the migration/adaptation of an existing production React-based Sales Management Dashboard into a desktop application using **Electron**.

The goal is to understand the architectural shifts, styling strategies, and developer experience when building desktop-first applications with web technologies, specifically moving away from heavy frameworks towards a lightweight, high-performance vanilla approach for the desktop environment.

## 🚀 Project Goals

*   **Electron Security & Architecture**: Implement the "Gold Standard" **Context Isolation** pattern with IPC bridges.
*   **Vanilla TypeScript Architecture**: Explore a modular, component-based architecture using vanilla TS without framework overhead.
*   **CSS Architecture**: Scalable styling strategy using SCSS, BEM, and Folder-by-Feature organization.
*   **Desktop Native Feel**: Focus on responsive, window-aware layouts that feel native on macOS/Windows.

## 🛠 Tech Stack

*   **Runtime**: [Electron](https://www.electronjs.org/)
*   **Language**: TypeScript
*   **Bundler**: Vite
*   **Styling**: SCSS (Sass) with BEM methodology
*   **State/UI**: Vanilla DOM manipulation (No React/Vue/Angular)

## 🔐 Architecture: The "Secure Bridge" Pattern

This project implements strict **Process Separation** to mimic a production-grade secured environment.

### 1. Main Process (The Backend)
*   Acts as the trusted environment with access to Node.js APIs and the File System.
*   Hosts the **Service Layer** (`src/services/`) which handles business logic and data fetching.
*   Listens for specific IPC channels (e.g., `reports:get`) via `ipcMain.handle`.

### 2. Preload Script (The Bridge)
*   The **Doorman** that sits between the Main Process and the Renderer.
*   Uses `contextBridge` to expose a restricted, typed API to the window object:
    ```typescript
    window.api = {
        getReports: (range) => ipcRenderer.invoke('reports:get', range)
    }
    ```
*   Ensures the Renderer **never** has direct access to Node.js modules like `require('fs')`.

### 3. Renderer Process (The Frontend)
*   The pure UI layer running in a sandboxed Chrome environment.
*   It is "dumb" and data-agnostic; it simply requests data via `window.api` and renders the result.
*   Uses `src/components/` structured by feature.

## 📂 Project Structure

```
src/
├── services/           # [Backend] Business logic & Data fetching
├── shared/             # Shared Types/Interfaces between Main and Renderer
├── components/         # [Frontend] UI Components
│   ├── common/         # Atomic reusable components (Buttons, Tables, Cards)
│   ├── inventoryDashboard/
│   ├── reportDashboard/
│   ├── settingsPanel/
│   └── sidebar/
├── scss/               # Global styles
├── main.ts             # Electron Main Process (IPC Handlers)
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

## 📝 Notes

*   **Data Mocking**: Mock data is handled in the Service Layer (`src/services/`), simulating a real API response time.
*   **Co-location**: Styles are co-located with components (`Component.ts` sits next to `Component.scss`).
