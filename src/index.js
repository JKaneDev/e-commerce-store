import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';

const hashHistory = createHashHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router basename='/' history={hashHistory}>
			<GlobalStyle />
			<App />
		</Router>
	</React.StrictMode>
);
