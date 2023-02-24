import { Link } from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';
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

const Sidenav = () => {
	return (
		<StyledSideNav>
			<div>
				<h3>Filters</h3>
				<ul id='filters'>
					<Button img={<FaGift size={20} />} text='Wishlist' />
					<Button img={<FaStar size={20} />} text='Ratings' />
					<Button img={<FaRegComment size={20} />} text='Reviews' />
				</ul>
			</div>
			<div>
				<h3>Genres</h3>
				<ul id='genres'>
					<Button img={<FaFistRaised size={20} />} text='Action' />
					<Button img={<FaCrosshairs size={20} />} text='Shooter' />
					<Button img={<FaShieldAlt size={20} />} text='RPG' />
					<Button img={<FaChessKnight size={20} />} text='Strategy' />
					<Button img={<FaMountain size={20} />} text='Adventure' />
					<Button img={<FaPuzzlePiece size={20} />} text='Puzzle' />
					<Button img={<FaFlagCheckered size={20} />} text='Racing' />
					<Button img={<FaFootballBall size={20} />} text='Sports' />
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
