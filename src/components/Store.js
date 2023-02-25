import Link from 'react-router-dom';
import Sidenav from './Sidenav';
import CardWrapper from './CardWrapper';

const Store = ({ games, setGames, wishlist, setWishlist, view, setView }) => {
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
			/>
		</>
	);
};

export default Store;
