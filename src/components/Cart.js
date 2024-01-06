import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import CartItem from "./CartItem";

const Cart = ({ visible, setVisible, cart, setCart, games, setGames }) => {
     const [cartTotal, setCartTotal] = useState();

     const cartRef = useRef(null);

     // CLOSE CART BY CLICKING ON OTHER PART OF THE DOM
     useEffect(() => {
          const handleCloseCart = (e) => {
               if (cartRef.current && !cartRef.current.contains(e.target)) {
                    setVisible(false);
                    document.body.style.overflow = "auto"; // Re-enable scrolling immediately after closing the cart
               }
          };
          document.addEventListener("mousedown", handleCloseCart);
          return () => {
               document.removeEventListener("mousedown", handleCloseCart);
          };
     }, [cartRef, setVisible]);

     // DARKEN DOM AND DISABLE SCROLLING WHILE CART OPEN
     useEffect(() => {
          if (visible) {
               document.body.style.overflow = "hidden"; // Only disable scrolling when the cart is open
          }
     }, [visible]);

     const removeCartItem = (id, inCart) => {
          const updatedCart = cart.filter((item) => item[2] !== id);
          setCart(updatedCart);

          const updatedGames = games.map((game) => {
               if (game.id === id) {
                    return {
                         ...game,
                         inCart: inCart,
                    };
               }

               const cartItem = updatedCart.find(
                    (item) => item[0] === game.name
               );
               if (cartItem) {
                    return { ...game, inCart: true };
               } else {
                    return { ...game, inCart: false };
               }
          });
          setGames(updatedGames);
     };

     const removeAllCartItems = () => {
          const updatedGames = games.map((game) => {
               return {
                    ...game,
                    inCart: false,
               };
          });

          setGames(updatedGames);

          setCart([]);
     };

     useEffect(() => {
          let total = 0;
          cart.forEach((item) => (total += Number(item[1])));
          setCartTotal(total.toFixed(2));
     }, [cart]);

     return (
          <>
               {visible ? <Overlay /> : <></>}
               <StyledCart showCart={visible} ref={cartRef} data-testid='cart'>
                    <div id='first-div'>
                         <h3 className='.title'>
                              {cart.length || "No"} Games In Cart
                         </h3>
                         <Button text='Clear' onClick={removeAllCartItems} />
                    </div>
                    <div className='games-in-cart'>
                         {cart.map((item) => (
                              <CartItem
                                   key={item[2]}
                                   id={item[2]}
                                   name={item[0]}
                                   price={item[1]}
                                   removeCartItem={removeCartItem}
                              />
                         ))}
                    </div>
                    <div className='footer'>
                         <span>Total: ${cartTotal || "0.00"}</span>
                         <button>
                              <p>Checkout</p>
                              <FaArrowRight size={14} />
                         </button>
                    </div>
               </StyledCart>
          </>
     );
};

export default Cart;

const Overlay = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     width: 100vw;
     height: 100vh;
     background-color: rgba(0, 0, 0, 0.5);
     z-index: 998;
`;

const StyledCart = styled.section`
     animation: ${(props) =>
          props.showCart
               ? "slideIn 0.5s ease-out forwards"
               : "slideOut 0.5s ease-out forwards"};
     animation-fill-mode: forwards;

     border: 1px solid orange;
     display: grid;
     grid-template-rows: 70px 1fr 70px;
     background-color: rgb(0, 0, 0, 0.9);
     height: 100vh;
     width: 380px;
     z-index: 999;
     position: fixed;
     top: 0;
     right: 0px;

     .games-in-cart {
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: auto;
          align-items: center;
          justify-content: flex-start;
          z-index: 1000;
          width: 340px;
          height: calc(100vh - 140px);

          &::-webkit-scrollbar {
               background-color: black;
          }
     }

     #first-div {
          margin: 0 auto;
          padding: 1rem 2rem;
          margin-bottom: auto;
          width: 100%;
          display: flex;
          align-items: center;
          background-color: black !important;
          height: 60px;
          border: none;
          border-bottom: 1px solid orange;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;

          h3 {
               font-size: 16px;
               font-weight: 400;
          }

          &:hover {
               color: white;
          }

          .title {
               margin-right: auto;
               letter-spacing: 0.1rem;
          }

          button {
               margin-left: auto;
               border: none;
               background-color: inherit;
               padding-right: 1rem;
               width: 60px;
               letter-spacing: 0.15rem;
               font-size: 1.75ch;
          }
     }

     .footer {
          display: flex;
          align-items: center;
          padding: 2rem 2rem 2rem 4rem;
          display: flex;
          align-items: center;
          z-index: 1001;
          background-color: black;

          span {
               margin-right: auto;
               letter-spacing: 0.1rem;
               font-weight: 200;
               font-size: 14px;
          }

          button {
               margin-left: auto;
               border: none;
               background-color: inherit;
               padding: 0;
               padding-right: 1rem;
               display: flex;
               align-items: center;
               gap: 0.75rem;
               transition: all 0.25s ease-in-out;
               letter-spacing: 0.1rem;
               font-size: 14px;
               font-weight: 200;

               &:hover {
                    color: orange;
               }
          }
     }

     @keyframes slideIn {
          from {
               transform: translateX(100%);
          }
          to {
               transform: translateX(0);
          }
     }

     @keyframes slideOut {
          from {
               transform: translateX(0);
          }
          to {
               transform: translateX(100%);
          }
     }
`;
