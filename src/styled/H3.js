import Styled from "styled-components";

const H3 = Styled.h3`
  font-family: 'Lobster', cursive;
  font-size: 2rem;
  color: ${props => (props.footer ? "#e7e7e7" : "#1a1718")}
  {window.screen.availWidth < 510 ? "#342e30" : color: ${props =>
    props.footer ? "#e7e7e7" : "#1a1718"}}
`;

export default H3;
