import styled from 'styled-components';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiSlides } from 'react-icons/si';

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

	return (
		<StyledCarousel>
			<div className='left-arrow' onClick={goToPrev}>
				<FaChevronLeft size={60} />
			</div>
			<div className='right-arrow' onClick={goToNext}>
				<FaChevronRight size={60} />
			</div>
			<img src={images[currentIndex]} alt='slides' />
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

	.left-arrow,
	.right-arrow {
		z-index: 1;
		position: absolute;
		color: white;
		transition: all 0.35s ease;

		&:hover {
			color: orange;
			transform: translateX(-2.5%);
			cursor: pointer;
		}
	}

	.left-arrow {
		top: 400px;
	}

	.right-arrow {
		top: 400px;
		left: 1240px;
	}
`;
