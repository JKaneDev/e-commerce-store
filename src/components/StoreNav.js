import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Button from './Button';
import styled from 'styled-components';
import { TiShoppingCart } from 'react-icons/ti';
import { RiShoppingBagLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';

const StoreNav = () => {
	// FOCUS INPUT ON SEARCH ICON CLICK
	const inputRef = useRef(null);
	const handleIconClick = () => inputRef.current.focus();

	return (
		<StyledNav>
			<div>
				<div>
					<FaSearch onClick={handleIconClick} size={16} />
				</div>
				<input
					type='text'
					placeholder='E.g. Cyberpunk 2077'
					ref={inputRef}
				></input>
			</div>
			<Button img={<RiShoppingBagLine size={28} />} text='Cart: 0' />
		</StyledNav>
	);
};

export default StoreNav;

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: black;
	color: white;
	padding: 2rem 3rem;
	border-bottom: 1px solid white;

	button:nth-of-type(2) {
		gap: 1.25rem;
	}

	div {
		display: flex;
	}

	div:nth-child(1) {
		background-color: #3d3d3d;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 0.75rem;
		padding-right: 1.25rem;
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
		border-right: 1px solid black;
		transition: 0.25s all ease-in-out;

		&:hover {
			cursor: pointer;
			color: orange;
		}
	}

	input {
		padding: 0.5rem 1.5rem;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
		background-color: #3d3d3d;
		height: 35px;
		font-size: 2ch;
		display: flex;

		&::placeholder {
			color: #747575;
		}
	}
`;
