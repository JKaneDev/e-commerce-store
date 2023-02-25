import Link from 'react-router-dom';
import Sidenav from './Sidenav';
import CardWrapper from './CardWrapper';

const Store = ({ games }) => {
	return (
		<>
			<Sidenav />
			<CardWrapper games={games} />
		</>
	);
};

export default Store;
