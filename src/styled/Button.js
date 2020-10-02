import Styled from "styled-components";

const Button = Styled.button`
  color: white;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 4px;
  background-color: #1a1718;
  border-color: transparent;

  :focus {
    outline: none;
  }
`;

export default Button;
