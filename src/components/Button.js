import styled from 'styled-components';

const Button = ({ img, text, onClick }) => {
	return (
		<StyledButton onClick={onClick}>
			{img}
			{text}
		</StyledButton>
	);
};

export default Button;

const StyledButton = styled.button`
	color: white;
	background-color: black;
	padding: 0.75rem 1.5rem;
	letter-spacing: 0.15rem;
	border: 1px solid white;
	border-radius: 4px;
	font-size: 2ch;
	transition: all 0.15s ease-in-out;
	display: flex;
	align-items: center;
	gap: 1rem;

	&:hover {
		border: 1px solid orange;
		color: orange;
		transform: translateY(-2.5%);
	}
`;
