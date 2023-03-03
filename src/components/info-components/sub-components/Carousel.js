import styled from 'styled-components';

const Carousel = ({ images }) => {
	return (
		<StyledCarousel>
			<img src={images[0]} />
		</StyledCarousel>
	);
};

export default Carousel;

const StyledCarousel = styled.div`
	display: flex;
	max-height: 700px;
	border-radius: 16px;
	margin-bottom: 2rem;

	img {
		width: 100%;
		border-radius: 16px;
	}
`;
