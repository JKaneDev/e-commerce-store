import Link from 'react-router-dom';
import Sidenav from './Sidenav';
import CardWrapper from './CardWrapper';

const Store = ({ games, wishlist, setWishlist, view, setView }) => {
	return (
		<>
			<Sidenav wishlist={wishlist} view={view} setView={setView} />
			<CardWrapper
				view={view}
				games={games}
				wishlist={wishlist}
				setWishlist={setWishlist}
			/>
		</>
	);
};

export default Store;
