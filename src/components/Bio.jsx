import styled from "styled-components";
import Test from "./Test";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-weight: 800;
`;
const Description = styled.h1`
  font-weight: 800;
`;
const Bio = () => {
  return (
    <Section>
      <Title>Pedro Benites</Title>
      {/* un componente 3d */}
      <Test />
      <Description>Desarrollador Front-end</Description>
    </Section>
  );
};

export default Bio;
