import Button from './Button';
import styled from 'styled-components';
import { FaThLarge } from 'react-icons/fa';
import { MdViewStream } from 'react-icons/md';
import Gamecard from './Gamecard';

const CardWrapper = ({ games, wishlist, setWishlist, view }) => {
	// RENDER GAME CARD FOR EACH GAME
	const renderGames = () => {
		return games.map((game) => {
			return (
				<Gamecard
					key={game.id}
					props={game}
					images={game.footage}
					inCart={game.inCart}
					isHovered={game.isHovered}
					isLiked={game.isLiked}
					selected={game.selected}
					wishlist={wishlist}
					setWishlist={setWishlist}
				/>
			);
		});
	};

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
			<div id='rendered-cards'>{renderGames()}</div>
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
	}

	#rendered-cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-top: 1rem;
	}
`;

export default CardWrapper;
