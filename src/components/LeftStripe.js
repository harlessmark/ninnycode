import Styled from "styled-components";

const LeftStripe = Styled.div`
  padding: 1rem;
  background-color: #f9665e;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media only screen and (max-width: 500px) {
    padding: .5rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
`;

export default LeftStripe;
