import Sidenav from './Sidenav';
import CardWrapper from './CardWrapper';

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
	toggleWishlist,
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
				toggleWishlist={toggleWishlist}
			/>
		</>
	);
};

export default Store;
