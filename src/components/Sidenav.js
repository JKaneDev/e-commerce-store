import { Link } from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';
import { useEffect } from 'react';
import {
	FaGift,
	FaStar,
	FaRegComment,
	FaChessKnight,
	FaMountain,
	FaPuzzlePiece,
	FaFlagCheckered,
	FaFootballBall,
	FaCrosshairs,
	FaShieldAlt,
	FaFistRaised,
} from 'react-icons/fa';

const Sidenav = ({ view, setView }) => {
	// useEffect(() => {
	// 	console.log(view);
	// }, [view]);

	return (
		<StyledSideNav>
			<div>
				<h3>Filters</h3>
				<ul id='filters'>
					<Button
						img={<FaGift size={20} />}
						text='Wishlist'
						onClick={() => setView('wishlist')}
					/>
					<Button
						img={<FaStar size={20} />}
						text='Ratings'
						onClick={() => setView('ratings')}
					/>
					<Button
						img={<FaRegComment size={20} />}
						text='Reviews'
						onClick={() => setView('reviews')}
					/>
				</ul>
			</div>
			<div>
				<h3>Genres</h3>
				<ul id='genres'>
					<Button
						img={<FaFistRaised size={20} />}
						text='Action'
						onClick={() => setView('action')}
					/>
					<Button
						img={<FaCrosshairs size={20} />}
						text='Shooter'
						onClick={() => setView('shooter')}
					/>
					<Button
						img={<FaShieldAlt size={20} />}
						text='RPG'
						onClick={() => setView('rpg')}
					/>
					<Button
						img={<FaChessKnight size={20} />}
						text='Strategy'
						onClick={() => setView('strategy')}
					/>
					<Button
						img={<FaMountain size={20} />}
						text='Adventure'
						onClick={() => setView('adventure')}
					/>
					<Button
						img={<FaPuzzlePiece size={20} />}
						text='Puzzle'
						onClick={() => setView('puzzle')}
					/>
					<Button
						img={<FaFlagCheckered size={20} />}
						text='Racing'
						onClick={() => setView('racing')}
					/>
					<Button
						img={<FaFootballBall size={20} />}
						text='Sports'
						onClick={() => setView('sports')}
					/>
				</ul>
			</div>
		</StyledSideNav>
	);
};

export default Sidenav;

const StyledSideNav = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;

	h3 {
		color: white;
		letter-spacing: 0.2rem;
		padding: 2rem 0;
		font-size: 1.5rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;
