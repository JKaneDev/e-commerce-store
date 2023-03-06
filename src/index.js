import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import GlobalStyle from './styles/GlobalStyle';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router basename='/' history={hashHistory}>
		<GlobalStyle />
		<App />
	</Router>
);
