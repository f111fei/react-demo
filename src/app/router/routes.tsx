import * as React from 'react';
import {Route, IndexRedirect} from 'react-router';

import App from '../components/App';
import About from '../components/About';
import Inbox from '../components/Inbox';
import Message from '../components/Message';

export function createRoutes(): React.ReactElement<any> {
    return (
        <Route component= {App} path='/'>
            <IndexRedirect to="about" />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    );
}