import Styled from "styled-components";

const P = Styled.p`
  margin: 0;
  line-height: 1.5rem;
  margin-top: ${props => (props.aboutText ? "2rem" : 0)};
  font-family: ${props =>
    props.footerText ? "inherit" : "Merriweather, serif"}; 
  
  @media only screen and (max-width: 510px) {
    color: ${props => (props.footerText ? "white" : "inherit")};
  }
`;

export default P;
