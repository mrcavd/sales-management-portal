export class SettingsPanel {
    private container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    render() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

        this.container.innerHTML = `
      <header>
        <h1>Settings</h1>
      </header>
      
      <div class="settings-section">
        <h3>Appearance</h3>
        <br>
        <div class="theme-toggle">
          <span>Theme Mode</span>
          <button id="theme-toggle-btn" class="btn">
            ${isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
      
      <br>

      <div class="settings-section">
        <h3>Account</h3>
        <br>
        <div style="color: var(--color-text-muted);">
          Logged in as: <strong>Admin User</strong>
        </div>
        <br>
        <button class="btn" style="border-color: var(--color-danger); color: var(--color-danger)">Log Out</button>
      </div>
    `;

        document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            this.render(); // Re-render to update button text
        });
    }
}
