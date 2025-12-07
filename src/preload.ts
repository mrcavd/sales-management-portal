import { contextBridge, ipcRenderer } from 'electron';
import { InventoryItem, ReportsResponse } from './shared/interfaces/models';

export interface IElectronAPI {
    getReports: (range: string) => Promise<ReportsResponse>;
    getInventory: () => Promise<InventoryItem[]>;
    updateSettings: (settings: Record<string, unknown>) => Promise<boolean>;
}

contextBridge.exposeInMainWorld('api', {
    getReports: (range: string) => ipcRenderer.invoke('reports:get', range),
    getInventory: () => ipcRenderer.invoke('inventory:get'),
    updateSettings: (settings: Record<string, unknown>) => ipcRenderer.invoke('settings:update', settings),
});

// Type declaration for the Window object
declare global {
    interface Window {
        api: IElectronAPI;
    }
}
