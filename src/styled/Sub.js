import Styled from "styled-components";

const Sub = Styled.sub`
  color: white;
  padding-top: ${props => (props.privacy ? "2rem" : "0")};
  font-family: 'Merriweather', serif;
  @media only screen and (min-width: 510px) {
    color: #1a1718;
  }
`;

export default Sub;
