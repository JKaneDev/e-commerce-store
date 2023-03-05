import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import games from './utils/games';
import styled from 'styled-components';
import Home from './components/Home';
import Store from './components/Store';
import HomeNav from './components/HomeNav';
import StoreNav from './components/StoreNav';
import About from './components/info-components/About';
import background from './assets/background-image.jpg';

function App() {
	// STATE VARIABLES
	const [allGames, setGames] = useState(games);
	const [view, setView] = useState('');
	const [wishlist, setWishlist] = useState([]);
	const [cart, setCart] = useState([]);
	const [showCart, setShowCart] = useState(false);

	const toggleWishlist = (name, isLiked) => {
		// ADD ITEM TO WISHLIST IF NOT ALREADY PRESENT, REMOVE IF IT IS
		wishlist.includes(name)
			? setWishlist(wishlist.filter((game) => game !== name))
			: setWishlist([...wishlist, name]);

		// TOGGLE isLiked STATUS OF GAME
		setGames(
			allGames.map((game) => {
				if (game.name === name) {
					return {
						...game,
						isLiked: !isLiked,
					};
				}
				return game;
			})
		);
	};

	const toggleCart = (name, price, inCart, id) => {
		// TOGGLE inCart STATUS OF GAME
		setGames(
			allGames.map((game) => {
				if (game.name === name) {
					return {
						...game,
						inCart: !inCart,
					};
				}
				return game;
			})
		);

		// ADD GAME TO CART IF NOT ALREADY PRESENT
		if (!cart.includes(name)) {
			setCart([...cart, [name, price, id]]);
		}
	};

	// RENDERING
	const location = useLocation();
	return (
		<>
			{/* RENDER DIFFERENT NAV DEPENDING ON ROUTE */}
			{location.pathname === '/' && <HomeNav />}
			{location.pathname === '/store' && (
				<StoreNav
					view={view}
					setView={setView}
					cart={cart}
					setCart={setCart}
					showCart={showCart}
					setShowCart={setShowCart}
					games={games}
					setGames={setGames}
				/>
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
								cart={cart}
								setCart={setCart}
								showCart={showCart}
								toggleCart={toggleCart}
								toggleWishlist={toggleWishlist}
							/>
						}
					/>
					<Route
						path='/games/:name'
						element={
							<About
								allGames={allGames}
								wishlist={wishlist}
								setWishlist={setWishlist}
								cart={cart}
								setCart={setCart}
								toggleWishlist={toggleWishlist}
								toggleCart={toggleCart}
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
	background: url(${background});
  `}

	// ABOUT RENDERED
	${({ location }) =>
		location.pathname === '/games/:name' &&
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
