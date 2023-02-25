import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';

const Home = () => {
	return (
		<StyledHomePage type='home'>
			<h1>
				<span>Cyber</span>zone
			</h1>
			<p>
				The most loved gaming e-commerce store on the internet. Stocking all the
				latest games available across all platforms. Enjoy our beautiful UX and
				24/7 customer support. May your gaming skills be as sharp as your
				reflexes and your experience be as legendary as your victories.
			</p>
			<HomeNav id='home-nav'>
				<Link to='/store'>
					<Button img={<RiArrowRightSLine size={18} />} text='Browse' />
				</Link>
				<a href='https://github.com/JKaneDev/e-commerce-store' target='_blank'>
					<Button img={<SiGithub size={18} />} text='GitHub' />
				</a>
				<a href='https://twitter.com/?lang=en' target='_blank'>
					<Button img={<FaTwitter size={18} />} text='Twitter' />
				</a>
				<a href='https://uk.linkedin.com/' target='_blank'>
					<Button img={<FaLinkedinIn size={18} />} text='LinkedIn' />
				</a>
			</HomeNav>
		</StyledHomePage>
	);
};

const StyledHomePage = styled.div`
	color: white;
	font-size: 2.75rem;
	border: 1px solid white;
	border-radius: 16px;
	padding: 3rem 4rem 0rem 4rem;
	margin-bottom: 20rem;
	max-width: 85vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	h1 {
		letter-spacing: 0.3rem;
	}

	span {
		color: orange;
	}

	p {
		font-size: 0.8ch;
		letter-spacing: none;
		overflow: wrap;
		line-height: 1.75rem;
		letter-spacing: 0.15rem;
		text-align: center;
	}
`;

const HomeNav = styled.div`
	position: relative;
	bottom: -6rem;
	max-width: 85vw;
	padding: 1rem 1.5rem;
	border-radius: 16px;
	display: flex;
	gap: 1.5rem;

	button {
		font-size: 0.6ch;
		font-weight: inherit;
	}

	button:nth-of-type(1) {
		gap: 0.5rem;
	}
`;

export default Home;
