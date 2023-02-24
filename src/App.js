import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import games from './utils/games';
import styled from 'styled-components';
import Home from './components/Home';
import Store from './components/Store';
import Nav from './components/Nav';

function App() {
	// GLOBAL FUNCTIONS
	const [games, setGames] = useState();
	const [] = useState();
	const [] = useState();
	const [] = useState();
	const [] = useState();
	const [] = useState();

	// RENDERING
	const location = useLocation();
	return (
		<>
			<Nav />
			<StyledMain location={location}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/store' element={<Store />} />
				</Routes>
			</StyledMain>
		</>
	);
}

export default App;

const StyledMain = styled.main`
	min-height: 100vh;
	width: 100vw;
	background-color: black;

	// HOME RENDERED
	${({ location }) =>
		location.pathname === '/' &&
		`
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  `}

	// STORE RENDERED
	${({ location }) =>
		location.pathname === '/store' &&
		`
  display: grid;
	grid-template-columns: 150px 1fr;
  padding: 2rem;
  `}
`;
