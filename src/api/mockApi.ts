import reportsData from '../mock_data/reports.json';
import inventoryData from '../mock_data/inventory.json';

export interface ReportSummary {
    totalSales: number;
    totalOrders: number;
    newCustomers: number;
    revenueGrowth: number;
}

export interface Transaction {
    id: string;
    customer: string;
    amount: number;
    status: string;
    date: string;
}

export interface ReportsResponse {
    summary: ReportSummary;
    recentTransactions: Transaction[];
}

export interface InventoryItem {
    id: string;
    name: string;
    category: string;
    stock: number;
    price: number;
    status: string;
}

export const MockApi = {
    getReportsByRange: async (range: string): Promise<ReportsResponse> => {
        // Simulate network delay using range to avoid unused var warning
        console.log(`Fetching reports for range: ${range}`);
        await new Promise(resolve => setTimeout(resolve, 500));
        return reportsData;
    },

    getInventory: async (): Promise<InventoryItem[]> => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return inventoryData;
    },

    updateSettings: async (settings: Record<string, unknown>): Promise<boolean> => {
        await new Promise(resolve => setTimeout(resolve, 300));
        console.log('Settings updated:', settings);
        return true;
    }
};
