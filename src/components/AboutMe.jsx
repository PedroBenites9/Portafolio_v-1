import { Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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
      <ContenedorAboutMe>
        <Canvas>
          <Stage environment={"city"} intensity={0.1}></Stage>
        </Canvas>
      </ContenedorAboutMe>
    </Section>
  );
};

export default AboutMe;
