import inventoryData from '../mock_data/inventory.json';
import { InventoryItem } from '../shared/interfaces/models';

export class InventoryService {
    async getAll(): Promise<InventoryItem[]> {
        console.log('[Main] Fetching inventory');
        await new Promise(resolve => setTimeout(resolve, 500));
        return inventoryData;
    }
}
