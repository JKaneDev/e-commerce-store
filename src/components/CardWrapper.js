import Button from "./Button";
import styled from "styled-components";
import { FaThLarge } from "react-icons/fa";
import { MdViewStream } from "react-icons/md";
import Gamecard from "./Gamecard";
import BackgroundVideo from "../assets/animated-background.mp4";

const CardWrapper = ({
  games,
  setGames,
  wishlist,
  setWishlist,
  view,
  setView,
  cart,
  setCart,
  toggleCart,
  toggleWishlist,
}) => {
  // RENDER GAME CARD FOR EACH GAME
  const renderGames = () => {
    // GENRE FILTER
    const filteredGames = games.filter(
      (game) => game.genre.toLowerCase() === view
    );

    // WISHLIST FILTER
    const wishlistGames = games.filter((game) => game.isLiked === true);

    // SPECIFIC GAME FILTER
    const filteredByNameGames = games.filter((game) =>
      game.name.toLowerCase().includes(view.toLowerCase())
    );

    // IF NO SPECIFIC VIEW HAS BEEN SELECTED, RENDER ALL GAMES
    if (view === "") {
      return games.map((game) => {
        return (
          <Gamecard
            games={games}
            setGames={setGames}
            key={game.id}
            props={game}
            images={game.footage}
            inCart={game.inCart}
            isHovered={game.isHovered}
            isLiked={game.isLiked}
            selected={game.selected}
            wishlist={wishlist}
            setWishlist={setWishlist}
            cart={cart}
            setCart={setCart}
            toggleCart={toggleCart}
            toggleWishlist={toggleWishlist}
          />
        );
      });

      // IF WISHLIST HAS BEEN SELECTED
    } else if (view === "wishlist") {
      return wishlistGames.map((game) => {
        return (
          <Gamecard
            games={games}
            setGames={setGames}
            key={game.id}
            props={game}
            images={game.footage}
            inCart={game.inCart}
            isHovered={game.isHovered}
            isLiked={game.isLiked}
            selected={game.selected}
            wishlist={wishlist}
            setWishlist={setWishlist}
            cart={cart}
            setCart={setCart}
            toggleCart={toggleCart}
            toggleWishlist={toggleWishlist}
          />
        );
      });
    } else if (filteredByNameGames.length > 0) {
      return filteredByNameGames.map((game) => {
        return (
          <Gamecard
            games={games}
            setGames={setGames}
            key={game.id}
            props={game}
            images={game.footage}
            inCart={game.inCart}
            isHovered={game.isHovered}
            isLiked={game.isLiked}
            selected={game.selected}
            wishlist={wishlist}
            setWishlist={setWishlist}
            cart={cart}
            setCart={setCart}
            toggleCart={toggleCart}
            toggleWishlist={toggleWishlist}
          />
        );
      });
    } else {
      // IF VIEW HAS BEEN SELECTED VIA GENRE, RENDER APPROPRIATE CARDS
      return filteredGames.map((game) => {
        return (
          <Gamecard
            games={games}
            setGames={setGames}
            key={game.id}
            props={game}
            images={game.footage}
            inCart={game.inCart}
            isHovered={game.isHovered}
            isLiked={game.isLiked}
            selected={game.selected}
            wishlist={wishlist}
            setWishlist={setWishlist}
            cart={cart}
            setCart={setCart}
            toggleCart={toggleCart}
            toggleWishlist={toggleWishlist}
          />
        );
      });
    }
  };

  const showGridView = () => {
    const renderedCards = document.getElementById("rendered-cards");
    renderedCards.classList.remove("column-view");
    renderedCards.classList.add("grid-view");
  };

  const showColumnView = () => {
    const renderedCards = document.getElementById("rendered-cards");
    renderedCards.classList.remove("grid-view");
    renderedCards.classList.add("column-view");
  };

  // RENDER TO DOM
  return (
    <StyledCardWrapper>
      <h1>Trending and highly rated</h1>
      <div className='filter-view'>
        <Button text={`Filter by: ${view}`} />
        <Button text='Clear Filter' onClick={() => setView("")} id='clear' />
        <div className='view-options'>
          <Button img={<FaThLarge size={28} />} onClick={showGridView} />
          <Button img={<MdViewStream size={28} />} onClick={showColumnView} />
        </div>
      </div>
      <div id='rendered-cards'>{renderGames()}</div>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 56px;
	font-weight: 300;
    color: white;
    letter-spacing: 0.25rem;
    align-self: center;
	justfiy-self: center;
    padding: 2rem;
  }

  div {
    display: flex;
    gap: 1rem;
    margin-left: 3rem;
  }
  
  button {
	font-weight: 400;
  }

  div > div {
    margin-left: auto;
  }

  @media (max-width: 560px) {
    .filter-view {
      display: none;
    }
  }

  @media (max-width: 620px) {
    h1 {
      display: none;
    }
  }

  @media (max-width: 750px) {
    .view-options button {
      display: none;
    }

    .filter-view button {
      padding: 0.75rem 1rem;
    }
  }

  #rendered-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;

    @media (max-width: 560px) {
      width: 450px;
    }

    @media (max-width: 750px) {
      grid-template-columns: 1fr;
      padding: 0.5rem;
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1950px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  #rendered-cards.grid-view {
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      padding: 2rem 0rem;
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 2rem 0rem;
    }

    @media (min-width: 1100px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 2rem 0rem;
    }

    @media (min-width: 2000px) {
      grid-template-columns: repeat(4, 1fr);
      padding: 2rem 0rem;
    }
  }

  #rendered-cards.column-view {
    grid-template-columns: 1fr;

    @media (min-width: 900px) {
      grid-template-columns: 1fr;
      padding: 2rem 5rem;
    }

    @media (min-width: 1100px) {
      grid-template-columns: 1fr;
      padding: 2rem 15rem;
    }

    @media (min-width: 1600px) {
      grid-template-columns: 1fr;
      padding: 2rem 25rem;
    }

    @media (min-width: 2000px) {
      grid-template-columns: 1fr;
      padding: 2rem 35rem;
    }
  }
`;

export default CardWrapper;
