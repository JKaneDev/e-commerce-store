import styled from 'styled-components';

const CartBtn = ({ img, text, cartSize, onClick }) => {
	return (
		<StyledButton onClick={onClick} cartSize={cartSize}>
			<span>{img}</span>
			<span>
				{text}: {cartSize || 0}
			</span>
		</StyledButton>
	);
};

export default CartBtn;

const StyledButton = styled.button`
	background-color: black;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	font-size: 2.25ch;
	padding: 0.75rem 1.5rem;
	border-radius: 6px;
	letter-spacing: 0.1rem;
	transition: all 0.25s ease-in-out;
	color: ${({ cartSize }) => (cartSize > 0 ? 'lightgreen' : 'white')};
	border: ${({ cartSize }) =>
		cartSize > 0 ? '1px solid lightgreen' : '1px solid white'};

	p {
		margin-top: 0.15rem;
	}

	&:hover {
		color: ${({ cartSize }) => (cartSize > 0 ? 'lightgreen' : 'orange')};
		border: ${({ cartSize }) =>
			cartSize > 0 ? '1px solid lightgreen' : '1px solid orange'};
		cursor: pointer;
		transform: translateY(-2.5%);
	}
`;
