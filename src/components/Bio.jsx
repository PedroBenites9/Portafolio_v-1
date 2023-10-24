import styled from "styled-components";
import Test from "./Test";
import Model3d from "./Model3d";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 2rem;
`;
const Title = styled.h1`
  font-weight: 800;
`;
const Description = styled.h1`
  font-weight: 800;
`;
const Text = styled.div`
  align-self: center;
`;
const Bio = () => {
  return (
    <Section>
      <Test />
      <Text>
        <Title>Pedro Benites</Title>
        <Description>Desarrollador Front-end</Description>
      </Text>
    </Section>
  );
};

export default Bio;
