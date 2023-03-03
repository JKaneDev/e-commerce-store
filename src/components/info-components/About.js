import styled from 'styled-components';
import Carousel from './sub-components/Carousel';
import Info from './sub-components/Info';
import Footer from './sub-components/Footer';
import Button from '../Button';
import { useParams, Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const About = ({ allGames, toggleWishlist, toggleCart }) => {
	const { name } = useParams();

	// FETCH GAME FROM ALL GAMES WITH URL PARAM
	const game = allGames.find((game) => game.name === name);

	return (
		<StyledAbout>
			<div className='header'>
				<Link to='/store'>
					<Button img={<IoArrowBack size={20} />} text='Store' />
				</Link>
				<h1>{game.name}</h1>
			</div>

			<Carousel images={game.footage} />

			<Info
				name={game.name}
				info={game.desc}
				devs={game.developers}
				genre={game.genre}
				site={game.link}
				platforms={game.platforms}
				publishers={game.publishers}
				release={game.release}
			/>
			<Footer
				price={game.price}
				isLiked={game.isLiked}
				name={game.name}
				toggleWishlist={toggleWishlist}
				toggleCart={toggleCart}
				inCart={game.inCart}
				id={game.id}
			/>
		</StyledAbout>
	);
};

export default About;

const StyledAbout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 100px 1fr 1fr 80px;
	padding: 0 4rem;
	min-height: 100vh;
	width: 100vw;

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: white;

		h1 {
			letter-spacing: 0.2rem;
			font-size: 6ch;
		}

		button {
			transition: all 0.35s ease-in-out;

			&:hover {
				color: orange;
			}
		}
	}

	.carousel-container {
	}
`;
