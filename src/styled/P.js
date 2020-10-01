import Styled from "styled-components";

const P = Styled.p`
  color: ${props => (props.footer ? "white" : "inherit")};
  line-height: ${props => (props.big ? "1.75rem" : "1.5rem")};
  font-size: ${props => props.big && "1.5rem"};
  font-weight: ${props => props.big && "bold"};
  font-family: 'Merriweather', serif;
  @media only screen and (min-width: 510px) {
    color: #1a1718;
  }
`;

export default P;
