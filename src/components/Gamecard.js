import styled from 'styled-components';
import { useEffect } from 'react';
import { FaPlus, FaHeart } from 'react-icons/fa';
import Button from './Button';

const Gamecard = ({ props, images, inCart, isHovered, isLiked, selected }) => {
	return (
		console.log(props),
		(
			<Card>
				<img src={images[0]} alt='cover' />
				<div>
					<p id='name'>{props.name}</p>|<p>${props.price}</p>
					<FaHeart size={14} id='heart' />
				</div>
				<Button img={<FaPlus size={14} />} text='Add To Cart' />
			</Card>
		)
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
		transform: translateY(-1%);
	}

	button {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.75ch;
		margin-top: auto;
		justify-content: center;
		padding-bottom: 1rem;
		border: none;
		letter-spacing: 0.05rem;
		& > * {
			margin-bottom: 0.15rem;
		}

		&:hover {
			border: none;
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
		padding-left: 2rem;

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

	div,
	button {
		background-color: rgb(0, 0, 0, 0.4);
	}
`;

export default Gamecard;
