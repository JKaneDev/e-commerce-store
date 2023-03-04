import styled from 'styled-components';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrev = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const iconSize = window.innerWidth > 800 ? 50 : 40;

	return (
		<StyledCarousel>
			<div className='left-arrow' onClick={goToPrev}>
				<FaChevronLeft style={{ fontSize: iconSize }} />
			</div>
			<div className='right-arrow' onClick={goToNext}>
				<FaChevronRight style={{ fontSize: iconSize }} />
			</div>
			<img src={images[currentIndex]} alt='slides' />
		</StyledCarousel>
	);
};

export default Carousel;

const StyledCarousel = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: 700px;
	border-radius: 16px;
	margin-bottom: 2rem;
	position: relative;

	img {
		width: 100%;
		border-radius: 16px;
	}

	.left-arrow,
	.right-arrow {
		position: absolute;
		z-index: 1;
		color: white;
		transition: all 0.35s ease;

		&:hover {
			color: orange;

			cursor: pointer;
		}
	}

	.left-arrow {
		transform: translate(0, 50%);
		top: 38%;
		left: 15px;
	}

	.right-arrow {
		transform: translate(0, 50%);
		top: 38%;
		right: 15px;
	}

	@media (max-width: 800px) {
		.left-arrow,
		.right-arrow {
			top: 32%;
		}
	}
`;
