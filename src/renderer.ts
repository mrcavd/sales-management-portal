import './scss/_variables.scss';
import './scss/main.scss';
import './components/sidebar/Sidebar.scss';
import './components/common/Button/Button.scss';
import './components/common/Table/Table.scss';
import './components/common/InfoCard/InfoCard.scss';
import './components/settingsPanel/SettingsPanel.scss';
import { Sidebar, TabName } from './components/sidebar/Sidebar';
import { ReportDashboard } from './components/reportDashboard/ReportDashboard';
import { InventoryDashboard } from './components/inventoryDashboard/InventoryDashboard';
import { SettingsPanel } from './components/settingsPanel/SettingsPanel';

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
