import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux'

import App from './components';
import { store } from "./store";

import  "@codedojo/mdc-react/dist/index.css";

ReactDOM.render(
	<Provider store={store}>
		<App />	
	</Provider>, 
	document.getElementById('root')
);

