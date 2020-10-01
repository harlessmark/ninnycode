import Styled from "styled-components";

const U = Styled.u`
  border-bottom: 4px solid ${props =>
    props.red ? "rgb(249, 102, 94, 0.75)" : "rgb(121, 159, 203, 0.75)"};
  text-decoration: none;
  :hover {
    border-bottom: 4px solid ${props =>
      props.red ? "rgb(224, 92, 85, 0.75)" : "rgb(109, 143, 183, 0.75)"};
    text-decoration: none;
    cursor: pointer;
}
`;

export default U;
