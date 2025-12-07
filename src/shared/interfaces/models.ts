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
