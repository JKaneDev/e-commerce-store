import { useRef } from "react";
import styled from "styled-components";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import Cart from "./Cart";
import CartBtn from "./CartBtn";

const StoreNav = ({
     view,
     setView,
     cart,
     setCart,
     visible,
     setVisible,
     games,
     setGames,
}) => {
     // FOCUS INPUT ON SEARCH ICON CLICK
     const inputRef = useRef(null);
     const handleIconClick = () => inputRef.current.focus();

     // RENDER CARDS BASED ON SEARCH BAR INPUT
     const handleSearchInput = (value) => {
          const updatedView = value;
          setView(updatedView);
     };

     const toggleCart = () => {
          setVisible(!visible);
     };

     return (
          <StyledNav>
               <div>
                    <FaSearch onClick={handleIconClick} size={16} />

                    <input
                         type='text'
                         placeholder='Search games...'
                         onChange={(event) =>
                              handleSearchInput(event.target.value)
                         }
                         ref={inputRef}
                    />
               </div>
               {visible ? (
                    <Cart
                         visible={visible}
                         setVisible={setVisible}
                         cart={cart}
                         setCart={setCart}
                         games={games}
                         setGames={setGames}
                         data-testid='cart'
                    />
               ) : (
                    <CartBtn
                         onClick={toggleCart}
                         img={<RiShoppingBagLine size={24} />}
                         text='Cart'
                         cartSize={cart.length}
                    />
               )}
          </StyledNav>
     );
};

export default StoreNav;

const StyledNav = styled.nav`
     display: flex;
     align-items: center;
     background-color: black;
     color: white;
     padding: 2rem 1rem 2rem 2rem;
     border-bottom: 1px solid orange;

     div {
          display: flex;
          margin-left: 1rem;

          svg {
               margin-right: 1rem;
          }
     }

     div:nth-child(1) {
          background-color: #3d3d3d;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 1.1rem;
          padding-right: 1.25rem;
          border-radius: 6px;
          border-right: 1px solid black;
          transition: 0.25s all ease-in-out;

          &:hover {
               cursor: pointer;
               color: orange;
          }
     }

     input {
          padding: 0.75rem 1.5rem;
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
          background-color: #3d3d3d;
          font-size: 14px;
          font-weight: 300;
          display: flex;
          border-left: 1px solid black;

          &::placeholder {
               color: #747575;
          }
     }
`;
