import styled from 'styled-components';

const CartBtn = ({ img, text, cartSize, onClick }) => {
	return (
		<StyledButton onClick={onClick} cartSize={cartSize}>
			<span>
				{text}: {cartSize || 0}
			</span>
		</StyledButton>
	);
};

export default CartBtn;

const StyledButton = styled.button`
	margin-left: auto;
	background-color: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	font-size: 16px;
	font-weight: 300;
	padding: 0.75rem 1.5rem;
	border-radius: 6px;
	letter-spacing: 0.1rem;
	transition: all 0.25s ease-in-out;
	margin-right: 2rem;

	color: ${({ cartSize }) => (cartSize > 0 ? 'lightgreen' : 'white')};
	border: ${({ cartSize }) =>
		cartSize > 0 ? '1px solid lightgreen' : '1px solid #606060'};
		

	&:hover {
		color: ${({ cartSize }) => (cartSize > 0 ? 'lightgreen' : 'orange')};
		border: ${({ cartSize }) =>
			cartSize > 0 ? '1px solid lightgreen' : '1px solid orange'};
		cursor: pointer;
	}
`;
