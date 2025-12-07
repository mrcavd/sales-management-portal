import './css/variables.css';
import './css/main.css';
import { Sidebar, TabName } from './components/Sidebar';
import { ReportDashboard } from './components/ReportDashboard';
import { InventoryDashboard } from './components/InventoryDashboard';
import { SettingsPanel } from './components/SettingsPanel';

console.log('Renderer process started');

const initApp = () => {
  const appContainer = document.getElementById('app');
  if (!appContainer) return; // Should allow error if missing

  // Create layout structure
  appContainer.innerHTML = `
        <div id="sidebar-container"></div>
        <main id="main-content" class="main-content"></main>
    `;

  const contentArea = document.getElementById('main-content') as HTMLElement;

  // Components
  const reportDashboard = new ReportDashboard(contentArea);
  const inventoryDashboard = new InventoryDashboard(contentArea);
  const settingsPanel = new SettingsPanel(contentArea);

  const handleNavigation = (tab: TabName) => {
    // Clear current content? Not strictly necessary if components overwrite innerHTML, 
    // but good practice might be to cleanup events if we had them.

    switch (tab) {
      case 'reports':
        reportDashboard.render();
        break;
      case 'inventory':
        inventoryDashboard.render();
        break;
      case 'settings':
        settingsPanel.render();
        break;
    }
  };

  // Initialize Sidebar
  new Sidebar('sidebar-container', handleNavigation);

  // Default Route
  handleNavigation('reports');
};

initApp();
