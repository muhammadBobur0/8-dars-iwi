import { createContext } from 'react';
import { useState } from 'react';

export const AuthToken = createContext();

export const TokenProvider = ({ children }) => {
	const local = localStorage.getItem('token');

	const [token, setToken] = useState(local);

	return (
		<AuthToken.Provider value={{ token, setToken }}>
			{children}
		</AuthToken.Provider>
	);
};
