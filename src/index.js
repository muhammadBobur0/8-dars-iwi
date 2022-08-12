import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TokenProvider } from './context/usetoken';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<div className='App'>
				<TokenProvider>
					<App />
				</TokenProvider>
			</div>
		</BrowserRouter>
	</React.StrictMode>,
);
