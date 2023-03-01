import styled from 'styled-components';
import { FaPlus, FaHeart, FaCheck } from 'react-icons/fa';
import Button from './Button';
import { useEffect } from 'react';

const Gamecard = ({
	props,
	images,
	games,
	setGames,
	wishlist,
	setWishlist,
	cart,
	setCart,
	inCart,
}) => {
	useEffect(() => {
		console.log(props.name, props.inCart);
	}, [props.inCart]);

	const toggleWishlist = (name, isLiked) => {
		// ADD ITEM TO WISHLIST IF NOT ALREADY PRESENT, REMOVE IF IT IS
		wishlist.includes(name)
			? setWishlist(wishlist.filter((game) => game !== name))
			: setWishlist([...wishlist, name]);

		// TOGGLE isLiked STATUS OF GAME
		setGames(
			games.map((game) => {
				if (game.name === name) {
					return {
						...game,
						isLiked: !isLiked,
					};
				}
				return game;
			})
		);
	};

	const toggleCart = (name, price, inCart, id) => {
		// TOGGLE inCart STATUS OF GAME
		setGames(
			games.map((game) => {
				if (game.name === name) {
					return {
						...game,
						inCart: !inCart,
					};
				}
				return game;
			})
		);

		// ADD GAME TO CART IF NOT ALREADY PRESENT
		if (!cart.includes(name)) {
			setCart([...cart, [name, price, id]]);
		}
	};

	return (
		<Card>
			<img src={images[0]} alt='cover' />
			<div>
				<p id='name'>{props.name}</p>|<p>${props.price}</p>
				<button
					className={props.isLiked ? 'in-wishlist' : 'not-in-wishlist'}
					onClick={() => toggleWishlist(props.name, props.isLiked)}
					id='add-to-wishlist'
				>
					<FaHeart size={14} id='heart' />
				</button>
			</div>
			{/* ALTER DISPLAY IF GAME IS IN CART */}
			{props.inCart ? (
				<Button
					className='in-cart'
					img={<FaCheck size={14} style={{ color: 'lightgreen' }} />}
					disabled
				/>
			) : (
				<Button
					className='not-in-cart'
					img={<FaPlus size={14} />}
					text='Add To Cart'
					onClick={() =>
						toggleCart(props.name, props.price, props.inCart, props.id)
					}
				/>
			)}
		</Card>
	);
};

const Card = styled.div`
	color: white;
	border: 1px solid white;
	width: 100%;
	min-height: 250px;
	border-radius: 8px;
	transition: all 0.35s ease-in-out;

	display: flex;
	flex-direction: column;

	&:hover {
		cursor: pointer;
		transform: translateY(-0.5%);
	}

	button:nth-of-type(1) {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.75ch;
		margin-top: auto;
		justify-content: center;
		padding-bottom: 1rem;
		border: none;
		letter-spacing: 0.05rem;
		padding-bottom: 1rem;

		& > * {
			margin-bottom: 0.15rem;
		}

		&:hover {
			border: none;
		}
	}

	button.in-cart {
		color: green !important;
	}

	#add-to-wishlist {
		padding: 0;
		margin: 0;

		& > * {
			width: 100%;
			height: 100%;
		}
	}

	img {
		place-self: center;
		width: 100%;
		height: 100%;
		border-top-right-radius: 7px;
		border-top-left-radius: 7px;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: auto;
		padding-left: 1rem;

		#name {
			font-weight: bold;
		}
	}

	#heart {
		transition: all 0.25s ease-in-out;

		&:hover {
			cursor: pointer;
			color: red;
			transform: scale(1.1);
		}
	}

	.in-wishlist #heart {
		color: red;
	}

	.not-in-wishlist #heart {
		color: white;
	}

	div,
	button {
		background-color: rgb(0, 0, 0, 0.4);
	}

	@media (max-width: 800px) {
		p {
			font-size: 1.6ch;
		}

		#heart {
			height: 12px;
			width: 12px;
		}
	}

	@media (max-width: 750px) {
		p {
			font-size: 1.75ch;
		}

		#heart {
			height: 15px;
			width: 15px;
		}
	}
`;

export default Gamecard;
