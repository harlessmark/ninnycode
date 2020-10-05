import Styled from "styled-components";

const Input = Styled.input`
  font-weight: bold;
  background-color: transparent;
  text-align: center;
  border: none;
  font-size: 2rem;
  font-family: 'Roboto';
  color: #1a1718;
  width: 100%;
  padding: .4rem;

  :focus {
    outline: none;
  }
`;

export default Input;
