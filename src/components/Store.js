import Link from 'react-router-dom';
import styled from 'styled-components';
import Sidenav from './Sidenav';
import CardWrapper from './CardWrapper';

const Store = () => {
	return (
		<>
			<Sidenav />
			<CardWrapper />
		</>
	);
};

export default Store;

// const StyledStore = styled.div`
// 	display: grid;
// 	grid-template-columns: 150px 1fr;
// `;
