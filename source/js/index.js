import '../sass/main.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './body/test';
import { AppContainer } from 'react-hot-loader';


if (module.hot) {
    module.hot.accept('./body/test', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const App = require('./body/test').default;

        ReactDOM.render(
            < AppContainer>
                    <App/>
            </AppContainer>,
            document.getElementById('test'));
    })
}
