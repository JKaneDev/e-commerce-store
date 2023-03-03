import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import Button from './Button';
import CartItem from './CartItem';

const Cart = ({ showCart, setShowCart, cart, setCart, games, setGames }) => {
	const [cartTotal, setCartTotal] = useState();

	const cartRef = useRef(null);

	// CLOSE CART BY CLICKING ON OTHER PART OF THE DOM
	useEffect(() => {
		const handleCloseCart = (e) => {
			if (cartRef.current && !cartRef.current.contains(e.target)) {
				setShowCart(false);
			}
		};
		document.addEventListener('mousedown', handleCloseCart);
		return () => {
			document.removeEventListener('mousedown', handleCloseCart);
		};
	}, [cartRef, setShowCart]);

	// DARKEN DOM AND DISABLE SCROLLING WHILE CART OPEN
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [showCart]);

	const removeCartItem = (id, inCart) => {
		const updatedCart = cart.filter((item) => item[2] !== id);
		setCart(updatedCart);

		const updatedGames = games.map((game) => {
			if (game.id === id) {
				return {
					...game,
					inCart: inCart,
				};
			}

			const cartItem = updatedCart.find((item) => item[0] === game.name);
			if (cartItem) {
				return { ...game, inCart: true };
			} else {
				return { ...game, inCart: false };
			}
		});
		setGames(updatedGames);
	};

	const removeAllCartItems = () => {
		const updatedGames = games.map((game) => {
			return {
				...game,
				inCart: false,
			};
		});

		setGames(updatedGames);

		setCart([]);
	};

	useEffect(() => {
		let total = 0;
		cart.forEach((item) => (total += Number(item[1])));
		setCartTotal(total.toFixed(2));
	}, [cart]);

	return (
		<>
			<Overlay />
			<StyledCart ref={cartRef}>
				<div id='first-div'>
					<h3 className='.title'>{cart.length || 'No'} Games In Cart</h3>
					<Button text='Clear' onClick={removeAllCartItems} />
				</div>
				<div className='games-in-cart'>
					{cart.map((item) => (
						<CartItem
							key={item[2]}
							id={item[2]}
							name={item[0]}
							price={item[1]}
							removeCartItem={removeCartItem}
						/>
					))}
				</div>
				<div className='footer'>
					<span>Total: ${cartTotal || '0.00'}</span>
					<button>
						<p>Checkout</p>
						<FaArrowRight size={14} />
					</button>
				</div>
			</StyledCart>
		</>
	);
};

export default Cart;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 105vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 998;
`;

const StyledCart = styled.section`
	display: grid;
	grid-template-rows: 70px 1fr 70px;
	background-color: rgb(0, 0, 0, 0.9);
	height: 100vh;
	width: 325px;
	z-index: 999;
	position: fixed;
	top: 0;
	right: 0;

	.games-in-cart {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: auto;
		align-items: center;
		justify-content: flex-start;
		overflow: scroll;
		z-index: 1000;
		width: 340px;
		height: calc(100vh - 140px);

		&::-webkit-scrollbar {
			background-color: black;
		}
	}

	#first-div {
		margin-bottom: auto;
		padding: 2.5rem 2rem;
		display: flex;
		align-items: center;
		background-color: black !important;
		height: 50px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;

		&:hover {
			color: white;
		}

		.title {
			margin-right: auto;
			padding-left: 1rem;
			letter-spacing: 0.1rem;
		}

		button {
			margin-left: auto;
			border: none;
			background-color: inherit;
			padding-right: 1rem;
			width: 60px;
			letter-spacing: 0.15rem;
			font-size: 1.75ch;
		}
	}

	.footer {
		display: flex;
		align-items: center;
		padding: 2rem 2rem 2rem 4rem;
		display: flex;
		align-items: center;
		z-index: 1001;
		background-color: black;

		span {
			margin-right: auto;
			letter-spacing: 0.15rem;
			font-weight: bold;
		}

		button {
			margin-left: auto;
			border: none;
			background-color: inherit;
			padding: 0;
			padding-right: 1rem;
			display: flex;
			align-items: center;
			gap: 0.75rem;
			transition: all 0.25s ease-in-out;
			letter-spacing: 0.1rem;

			&:hover {
				color: orange;
			}
		}
	}
`;
