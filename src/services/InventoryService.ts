import { InventoryItem } from '../shared/interfaces/models';

const MOCK_INVENTORY: InventoryItem[] = [
    { id: "INV-001", name: "Super Widget X", category: "Widgets", stock: 124, price: 29.99, status: "In Stock" },
    { id: "INV-002", name: "Mega Gadget Y", category: "Gadgets", stock: 45, price: 89.99, status: "Low Stock" },
    { id: "INV-003", name: "Ultra Tool Z", category: "Tools", stock: 0, price: 149.50, status: "Out of Stock" },
    { id: "INV-004", name: "Basic Component A", category: "Components", stock: 500, price: 5.00, status: "In Stock" },
    { id: "INV-005", name: "Advanced Module B", category: "Modules", stock: 12, price: 250.00, status: "Low Stock" }
];

export class InventoryService {
    async getAll(): Promise<InventoryItem[]> {
        console.log('[Main] Fetching inventory');
        await new Promise(resolve => setTimeout(resolve, 500));
        return MOCK_INVENTORY;
    }
}
