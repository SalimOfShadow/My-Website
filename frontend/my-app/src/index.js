import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './styles/App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

//<StrictMode> Renders the component twice when first mounted
