import styled from 'styled-components';

const Info = ({
	name,
	info,
	devs,
	genre,
	site,
	platforms,
	publishers,
	release,
}) => {
	return (
		<StyledInfo>
			<div className='main-info'>
				<h2>Game Description</h2>
				<p>{info}</p>
			</div>
			<div className='secondary-info'>
				<a className='site' href={site}>
					{name} Website
				</a>
				<p>
					<strong>Released:</strong> {release}
				</p>
				<p>
					<strong>Platforms:</strong> {platforms}
				</p>
				<p>
					<strong>Genre:</strong> {genre}
				</p>
				<p>
					<strong>Developers:</strong> {devs}
				</p>
				<p>
					<strong>Publishers:</strong> {publishers}
				</p>
			</div>
		</StyledInfo>
	);
};

export default Info;

const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
	background-color: black;
	color: #b1b3b1;

	div {
		padding: 2.5rem 4rem;
	}

	.main-info {
		h2 {
			letter-spacing: 0.2rem;
			margin-bottom: 1.25rem;
			font-size: 3ch;
			color: white;
		}

		line-height: 1.5rem;
		letter-spacing: 0.1rem;
		background-color: #181818;
		border-top-right-radius: 16px;
		border-top-left-radius: 16px;
		overflow: scroll;

		::-webkit-scrollbar {
			display: none;
		}
	}

	.secondary-info {
		.site {
			font-weight: bold;
			text-decoration: none;
			color: white;
			font-size: 2.25ch;
			transition: all 0.25s;

			&:hover {
				color: orange;
			}
		}

		letter-spacing: 0.1rem;
		line-height: 2.25rem;
		font-size: 2ch;
		background-color: #262626;
		border-bottom-right-radius: 16px;
		border-bottom-left-radius: 16px;

		strong {
			color: grey;
		}
	}
`;
