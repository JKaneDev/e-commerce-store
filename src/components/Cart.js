import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import Button from './Button';

const Cart = ({ showCart, setShowCart }) => {
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

	return (
		<>
			<Overlay />
			<StyledCart ref={cartRef}>
				<div>
					<h3>No Games In Cart</h3>
					<Button text='Clear' />
				</div>
				<div className='games-in-cart'></div>
				<div className='footer'>
					<span>Total: $0.00</span>
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

const StyledCart = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgb(0, 0, 0, 0.9);
	height: 101vh;
	width: 325px;
	z-index: 999;
	position: fixed;
	top: 0;
	right: 0;

	div:nth-of-type(1) {
		margin-bottom: auto;
		padding: 2.5rem 2rem;
		display: flex;
		align-items: center;
		background-color: black;
		height: 50px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;

		&:hover {
			color: white;
		}

		h3 {
			margin-right: auto;
			padding-left: 1rem;
			letter-spacing: 0.1rem;
		}

		button {
			margin-left: auto;
			border: none;
			background-color: inherit;
			padding: 0;
			padding-right: 1rem;
			width: 60px;
			letter-spacing: 0.15rem;
			font-size: 1.75ch;
		}
	}

	.footer {
		margin-top: auto;
		display: flex;
		align-items: center;
		padding: 2rem 2rem 2.5rem 4rem;
		display: flex;
		align-items: center;

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
