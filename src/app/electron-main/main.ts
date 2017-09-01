import {BrowserWindow} from 'electron';
import * as path from 'path';
import {pkg, rootPath} from 'core/package';
import {IpcService} from './ipc';

const index = path.join(rootPath, './out/app/electron-browser/index.html'); // app/src/ directory

// Browser Window options
const mainWindowOption: Electron.BrowserWindowConstructorOptions = {
	title: pkg.name,
	backgroundColor: '#222225',  //TODO: read from theme config.
	width: 1022,
	height: 670,
	minWidth: 1022,
	minHeight: 670,
	frame: false
};

// Create the browser window
let mainWindow = new BrowserWindow(mainWindowOption);

// ... and load our html page
mainWindow.loadURL(`file://${index}`);

mainWindow.on('closed', () => {
	// Dereference the window object
	mainWindow = null;
});

// IPC events
const ipcService = new IpcService(mainWindow);
ipcService.ready();