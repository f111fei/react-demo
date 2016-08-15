import {ipcMain} from 'electron';

export class IpcService {

	private window: Electron.BrowserWindow;

	constructor(window: Electron.BrowserWindow) {
		this.window = window;
	}

	public ready(): void {
		ipcMain.on('app:reloadWindow', () => {
            this.window.reload();
        });

        ipcMain.on('app:toggleDevTools', () => {
            this.window.webContents.openDevTools();
        });
	}

}