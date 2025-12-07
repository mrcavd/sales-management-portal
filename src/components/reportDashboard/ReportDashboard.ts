import { MockApi } from '../../api/mockApi';
import { createInfoCard, createTable } from '../common';

export class ReportDashboard {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  async render() {
    this.container.innerHTML = '<div class="loading">Loading reports...</div>';

    try {
      const data = await MockApi.getReportsByRange('month');

      const summaryCards = `
        <div class="grid-container">
          ${createInfoCard('Total Sales', `$${data.summary.totalSales.toLocaleString()}`, data.summary.revenueGrowth, 'vs last month')}
          ${createInfoCard('Total Orders', data.summary.totalOrders, 5.2, 'vs last month')}
          ${createInfoCard('New Customers', data.summary.newCustomers, 1.8, 'vs last month')}
          ${createInfoCard('Avg Order Value', `$${Math.round(data.summary.totalSales / data.summary.totalOrders)}`, -0.5, 'vs last month')}
        </div>
      `;

      const recentTxorTable = createTable(
        ['ID', 'Customer', 'Date', 'Amount', 'Status'],
        data.recentTransactions.map(t => [
          t.id,
          t.customer,
          t.date,
          `$${t.amount}`,
          `<span class="status-badge ${t.status.toLowerCase()}">${t.status}</span>`
        ])
      );

      this.container.innerHTML = `
        <header>
          <h1>Sales Reports</h1>
          <div class="controls">
            <!-- Add date pickers or filters here later -->
          </div>
        </header>
        ${summaryCards}
        <h2>Recent Transactions</h2>
        ${recentTxorTable}
      `;

    } catch (error) {
      console.error(error);
      this.container.innerHTML = '<div class="error">Failed to load reports.</div>';
    }
  }
}
