import { ReportsResponse } from '../shared/interfaces/models';

const MOCK_DATA: ReportsResponse = {
    summary: {
        totalSales: 124500,
        totalOrders: 1450,
        newCustomers: 320,
        revenueGrowth: 12.5
    },
    recentTransactions: [
        { id: "ORD-001", customer: "Acme Corp", amount: 1200, status: "Completed", date: "2023-10-25" },
        { id: "ORD-002", customer: "Global Industries", amount: 850, status: "Processing", date: "2023-10-25" },
        { id: "ORD-003", customer: "Tech Solutions", amount: 2300, status: "Completed", date: "2023-10-24" },
        { id: "ORD-004", customer: "Widgets Inc", amount: 450, status: "Pending", date: "2023-10-24" }
    ]
};

export class ReportService {
    async getReports(range: string): Promise<ReportsResponse> {
        console.log(`[Main] Fetching reports for range: ${range}`);
        await new Promise(resolve => setTimeout(resolve, 500));
        return MOCK_DATA;
    }
}
