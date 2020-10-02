import Styled from "styled-components";

const Input = Styled.input`
  font-weight: bold;
  background-color: transparent;
  text-align: center;
  border: none;
  font-size: 1.5rem;
  font-family: 'Roboto';
  color: #1a1718;
  width: 100%;

  :focus {
    outline: none;
  }

  @media only screen and (min-width: 500px) {
    padding: .3rem;
    font-size: 2rem;
  }
`;

export default Input;
