import Styled from "styled-components";

const Flash = Styled.p`
  line-height: 1.4rem;
  font-family: 'Merriweather', serif;
  color: ${props => (props.success ? "#6fbb7c" : "#f9665e")}
`;

export default Flash;
