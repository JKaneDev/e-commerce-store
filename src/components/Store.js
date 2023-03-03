import Link from 'react-router-dom';
import Sidenav from './Sidenav';
import CardWrapper from './CardWrapper';
import Cart from './Cart';

const Store = ({
	games,
	setGames,
	wishlist,
	setWishlist,
	view,
	setView,
	cart,
	setCart,
	toggleCart,
}) => {
	return (
		<>
			<Sidenav wishlist={wishlist} view={view} setView={setView} />
			<CardWrapper
				view={view}
				setView={setView}
				games={games}
				setGames={setGames}
				wishlist={wishlist}
				setWishlist={setWishlist}
				cart={cart}
				setCart={setCart}
				toggleCart={toggleCart}
			/>
		</>
	);
};

export default Store;
