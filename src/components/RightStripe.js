import Styled from "styled-components";

const RightStripe = Styled.div`
  padding: 1rem;
  background-color: #799FCB;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media only screen and (max-width: 500px) {
    padding: .5rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
`;

export default RightStripe;
