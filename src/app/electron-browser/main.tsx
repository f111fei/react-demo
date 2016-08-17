// import './media/css/bootstrap.css';
import './media/css/global.less';

import * as ReactDOM from 'react-dom';
/* tslint:disable no-unused-variable */
import * as React from 'react';
/* tslint:enable no-unused-variable */
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import {createRoutes} from 'app/router/routes';
import configureStore from 'app/store/configureStore';

const electron = require('electron');
const ipc = electron.ipcRenderer;

function registerListeners(enableDeveloperTools) {
    // Devtools & Reload support
    if (enableDeveloperTools) {
        var extractKey = function (e) {
            return [
                e.ctrlKey ? 'ctrl-' : '',
                e.metaKey ? 'meta-' : '',
                e.altKey ? 'alt-' : '',
                e.shiftKey ? 'shift-' : '',
                e.keyCode
            ].join('');
        };

        var TOGGLE_DEV_TOOLS_KB = (process.platform === 'darwin' ? 'meta-alt-73' : 'ctrl-shift-73'); // mac: Cmd-Alt-I, rest: Ctrl-Shift-I
        var RELOAD_KB = (process.platform === 'darwin' ? 'meta-82' : 'ctrl-82'); // mac: Cmd-R, rest: Ctrl-R

        window.addEventListener('keydown', function (e) {
            var key = extractKey(e);
            if (key === TOGGLE_DEV_TOOLS_KB) {
                ipc.send('app:toggleDevTools');
            } else if (key === RELOAD_KB) {
                ipc.send('app:reloadWindow');
            }
        });
    }
}

registerListeners(process.env['APP_DEV']);

export function startup(): void {
    ReactDOM.render(
        <Provider store={ configureStore() }>
            <Router routes={ createRoutes() } history={ hashHistory } />
        </Provider>,
        document.getElementById('main')
    );
}