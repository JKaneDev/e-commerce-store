import styled from "styled-components";

const Button = ({ img, text, onClick, cartLength }) => {
     return (
          <StyledButton onClick={onClick}>
               {img}
               {text}
          </StyledButton>
     );
};

export default Button;

const StyledButton = styled.button`
     color: white;
     background-color: black;
     padding: 0.75rem 1.5rem;
     letter-spacing: 0.15rem;
     border: 1px solid #606060;
     border-radius: 8px;
     font-size: 14px;
     font-weight: 200;
     display: flex;
     align-items: center;
     gap: 1rem;
     transition: all 0.25s ease-in-out;

     &:hover {
          border: 1px solid orange;
          color: orange;
     }
`;
