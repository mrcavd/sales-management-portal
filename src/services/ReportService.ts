import reportsData from '../mock_data/reports.json';
import { ReportsResponse } from '../shared/interfaces/models';

export class ReportService {
    async getReports(range: string): Promise<ReportsResponse> {
        console.log(`[Main] Fetching reports for range: ${range}`);
        await new Promise(resolve => setTimeout(resolve, 500));
        return reportsData;
    }
}
