'use strict';

const path = require('path');
const electron = require('electron');
const app = electron.app;              // Module to control application life.

process.env['NODE_ENV'] = 'production'; // Drastically increase performances
process.env['APP_ROOT'] = path.join(__dirname, '..'); // Remenber app root path.
global.require = require; // set node_require to global. see http://stackoverflow.com/questions/37339866/using-node-require-with-electron-and-webpack

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.once('ready', () => {
    require('./app/electron-main/main');
});
