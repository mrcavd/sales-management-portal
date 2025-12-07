import { createTable } from '../common';

export class InventoryDashboard {
    private container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    async render() {
        this.container.innerHTML = '<div class="loading">Loading inventory...</div>';

        try {
            const items = await window.api.getInventory();

            const inventoryTable = createTable(
                ['ID', 'Product Name', 'Category', 'Stock', 'Price', 'Status'],
                items.map(i => [
                    i.id,
                    `<span style="font-weight:600">${i.name}</span>`,
                    i.category,
                    i.stock,
                    `$${i.price.toFixed(2)}`,
                    `<span class="status-badge ${i.status.replace(/\s+/g, '-').toLowerCase()}">${i.status}</span>`
                ])
            );

            this.container.innerHTML = `
        <header>
          <h1>Inventory Management</h1>
          <button class="btn">Add Item</button>
        </header>
        ${inventoryTable}
      `;

        } catch (error) {
            this.container.innerHTML = '<div class="error">Failed to load inventory.</div>';
        }
    }
}
