import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';

const CartItem = ({ name, price, removeCartItem }) => {
	return (
		<StyledCartItem>
			<span className='name'>{name}</span>
			<span className='price'>${price}</span>
			<button onClick={removeCartItem} className='remove'>
				<AiOutlineDelete size={15} />
			</button>
		</StyledCartItem>
	);
};

export default CartItem;

const StyledCartItem = styled.span`
	display: grid;
	grid-template-columns: 3fr 1fr 1fr;
	gap: 0.5rem;
	align-items: center;
	width: 88%;
	height: 60px;
	padding: 1rem 2rem;
	letter-spacing: 0.1rem;
	background-color: #262626;
	border-radius: 6px;

	.name {
		line-height: 1.5rem;
	}

	.price {
		padding-left: 2rem;
	}

	.remove {
		margin-left: auto;
		color: white;
		background-color: inherit;
		position: relative;
		right: -18px;
		bottom: -1px;
		transition: all 0.25s;

		&:hover {
			transform: scale(1.1);
			color: orange;
			cursor: pointer;
		}
	}
`;
