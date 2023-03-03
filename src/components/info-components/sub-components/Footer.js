import { useEffect } from 'react';
import { FaHeart, FaPlus, FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import Button from '../../Button';

const Footer = ({
	price,
	isLiked,
	name,
	toggleWishlist,
	toggleCart,
	inCart,
	id,
}) => {
	useEffect(() => {
		console.log(name, 'In Cart: ', inCart, 'Is Liked: ', isLiked);
	}, [inCart]);

	return (
		<StyledFooter>
			<div>
				<span>${price}</span>
				<button
					className={isLiked ? 'in-wishlist' : 'not-in-wishlist'}
					onClick={() => toggleWishlist(name, isLiked)}
					id='add-to-wishlist'
				>
					<FaHeart size={20} id='heart' />
				</button>
			</div>
			{inCart ? (
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
					onClick={() => toggleCart(name, price, inCart, id)}
				/>
			)}
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem 2rem;
	border-radius: 6px;
	background-color: black;
	color: white;
	font-weight: bold;
	letter-spacing: 0.1rem;

	button {
		border: none;

		&:hover {
			border: none;
		}
	}

	div {
		margin-right: auto;
		display: flex;
		align-items: center;
		background-color: inherit;
		font-size: 2.25ch;
		gap: 1rem;

		button {
			background-color: inherit;
		}
	}

	#heart {
		transition: all 0.25s ease-in-out;
		margin-top: 0.3rem;

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
`;
