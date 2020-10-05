import Styled from "styled-components";

const Img = Styled.img`
  object-fit: contain;
  width: '100%';
  width: ${props => (props.boo ? "250px" : "100px;")};
  height: ${props => (props.boo ? "250px" : "100px;")};
`;

export default Img;
