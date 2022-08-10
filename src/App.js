import './App.css';
import { Login } from './pages/Login';
import { Popalation } from './components/populatin';
import { UseAuth } from './hook/useAuth';

function App() {
	const { token } = UseAuth();

	if (token) {
		return <Popalation />;
	} else {
		return <Login />;
	}
}

export default App;
