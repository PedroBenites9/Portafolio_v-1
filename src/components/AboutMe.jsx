import styled from "styled-components";
import ModelChair from "./ModelChair";
const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;
const ContenedorAboutMe = styled.div``;

const AboutMe = () => {
  return (
    <Section>
      <ContenedorAboutMe>
        <ModelChair />
      </ContenedorAboutMe>
    </Section>
  );
};

export default AboutMe;
