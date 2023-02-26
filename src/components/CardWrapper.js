import { useEffect } from 'react';
import Button from './Button';
import styled from 'styled-components';
import { FaThLarge } from 'react-icons/fa';
import { MdViewStream } from 'react-icons/md';
import Gamecard from './Gamecard';

const CardWrapper = ({
	games,
	setGames,
	wishlist,
	setWishlist,
	view,
	setView,
}) => {
	useEffect(() => {
		games.forEach((game) => {
			if (game.isLiked === true) {
				console.log(game.name);
				console.log(wishlist);
			}
		});
	}, [wishlist]);

	// RENDER GAME CARD FOR EACH GAME

	// GENRE FILTER
	const renderGames = () => {
		const filteredGames = games.filter(
			(game) => game.genre.toLowerCase() === view
		);

		// WISHLIST FILTER
		const wishlistGames = games.filter((game) => game.isLiked === true);

		// IF NO SPECIFIC VIEW HAS BEEN SELECTED, RENDER ALL GAMES
		if (view === '') {
			return games.map((game) => {
				return (
					<Gamecard
						games={games}
						setGames={setGames}
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

			// IF WISHLIST HAS BEEN SELECTED
		} else if (view === 'wishlist') {
			return wishlistGames.map((game) => {
				return (
					<Gamecard
						games={games}
						setGames={setGames}
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
		} else {
			// IF VIEW HAS BEEN SELECTED VIA GENRE, RENDER APPROPRIATE CARDS
			return filteredGames.map((game) => {
				return (
					<Gamecard
						games={games}
						setGames={setGames}
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
		}
	};

	// RENDER TO DOM
	return (
		// console.log('setView:', setView),
		// console.log('view:', view),
		<StyledCardWrapper>
			<h1>Trending and highly rated</h1>
			<div>
				<Button text={`Filter by: ${view}`} />
				<Button text='Clear Filter' onClick={() => setView('')} id='clear' />
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

	button:nth-of-type(2) {
		font-weight: bolder;
	}

	div > div {
		margin-left: auto;
	}

	@media (max-width: 725px) {
	}

	#rendered-cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-top: 1rem;

		@media (max-width: 725px) {
			grid-template-columns: 1fr;
			padding: 0.5rem;
		}

		@media (min-width: 1200px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`;

export default CardWrapper;
