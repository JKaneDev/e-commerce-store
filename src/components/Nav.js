import Link from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';
import { TiShoppingCart } from 'react-icons/ti';
import { SiGithub } from 'react-icons/si';
import { RiShoppingBagLine } from 'react-icons/ri';

const Nav = () => {
	return (
		<StyledNav>
			<Button img={<TiShoppingCart size={28} />} text='Browse' />
			<Button img={<SiGithub size={28} />} text='JKaneDev' />
			<Button img={<RiShoppingBagLine size={28} />} text='Cart: 0' />
		</StyledNav>
	);
};

export default Nav;

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
`;
