import './media/global.css';
import * as ReactDOM from 'react-dom';
/* tslint:disable no-unused-variable */
import * as React from 'react';
/* tslint:enable no-unused-variable */
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import {createRoutes} from 'app/router/routes';
import {createStore} from 'app/reducers/store';

export function startup(): void {
    ReactDOM.render(
        <Provider store={ createStore() }>
            <Router routes={ createRoutes() } history={ hashHistory } />
        </Provider>,
        document.getElementById('wrap')
    );
}