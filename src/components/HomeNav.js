import { Link } from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';
import { TiShoppingCart } from 'react-icons/ti';
import { SiGithub } from 'react-icons/si';

const HomeNav = () => {
	return (
		<StyledNav>
			<Link to='/store'>
				<Button img={<TiShoppingCart size={28} />} text='Browse' />
			</Link>
			<a href='https://github.com/JKaneDev' target='_blank' rel='noreferrer'>
				<Button img={<SiGithub size={28} />} text='JKaneDev' />
			</a>
		</StyledNav>
	);
};

export default HomeNav;

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
	padding: 2rem 3rem;
	border-bottom: 1px solid white;
	z-index: 1;

	button:nth-of-type(2) {
		gap: 1.25rem;
	}
`;
