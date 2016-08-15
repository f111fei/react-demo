import * as electron from 'electron';
import * as path from 'path';
import {pkg, rootPath} from 'core/package';

const BrowserWindow = electron.BrowserWindow;    // Module to create native browser window.

const index = path.join(rootPath, './out/app/electron-browser/index.html'); // app/src/ directory

// Browser Window options
const mainWindowOption = {
	title: pkg.name,
	minWidth: 900,
	minHeight: 550
};

// Create the browser window
let mainWindow = new BrowserWindow(mainWindowOption);

// ... and load our html page
mainWindow.loadURL(`file://${index}`);

mainWindow.on('closed', () => {
	// Dereference the window object
	mainWindow = null;
});