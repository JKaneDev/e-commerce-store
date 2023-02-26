import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import games from './utils/games';
import styled from 'styled-components';
import Home from './components/Home';
import Store from './components/Store';
import HomeNav from './components/HomeNav';
import StoreNav from './components/StoreNav';

function App() {
	// STATE VARIABLES
	const [allGames, setGames] = useState(games);
	const [wishlist, setWishlist] = useState([]);
	const [view, setView] = useState('');

	// RENDERING
	const location = useLocation();
	return (
		<>
			{location.pathname === '/' && <HomeNav />}
			{location.pathname === '/store' && (
				<StoreNav view={view} setView={setView} />
			)}
			<StyledMain location={location}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/store'
						element={
							<Store
								view={view}
								setView={setView}
								games={allGames}
								setGames={setGames}
								wishlist={wishlist}
								setWishlist={setWishlist}
							/>
						}
					/>
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
