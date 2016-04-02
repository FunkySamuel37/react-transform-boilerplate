import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './App';
import './styles/main.scss';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

// render(<Router history={browserHistory} routes={routes} />,  document.getElementById('root'));
render(<Router history={browserHistory}>{routes}</Router>
, document.getElementById('root'));
