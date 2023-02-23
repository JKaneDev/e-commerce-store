import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Store from './components/Store';
import Header from './components/Nav';

function App() {
	return (
		<Router>
			<Nav />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/store' element={<Store />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
