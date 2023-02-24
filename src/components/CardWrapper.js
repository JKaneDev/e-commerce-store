import Gamecard from './Gamecard';
import Button from './Button';
import styled from 'styled-components';
import { FaThLarge, FaTh } from 'react-icons/fa';
import { MdViewStream } from 'react-icons/md';

const CardWrapper = () => {
	return (
		<StyledCardWrapper>
			<h1>Trending and highly rated</h1>
			<div>
				<Button text='Filter by: none' />
				<Button text='Clear Filter' />
				<div>
					<Button img={<FaThLarge size={28} />} />
					<Button img={<MdViewStream size={28} />} />
				</div>
			</div>
		</StyledCardWrapper>
	);
};

const StyledCardWrapper = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		font-size: 4rem;
		color: white;
		letter-spacing: 0.35rem;
		align-self: center;
		padding: 1rem 0 2.25rem 3rem;
	}

	div {
		display: flex;
		gap: 1rem;
		margin-left: 3rem;
	}

	button {
		font-size: 1.75ch;
		padding: 0.25rem 1rem;
	}

	div > div {
		margin-left: auto;
		padding-right: 1rem;
	}
`;

export default CardWrapper;
