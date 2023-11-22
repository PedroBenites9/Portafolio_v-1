import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;
const ContenedorAboutMe = styled.div``;

const AboutMe = () => {
  return (
    <Section>
      <ContenedorAboutMe></ContenedorAboutMe>
    </Section>
  );
};

export default AboutMe;
