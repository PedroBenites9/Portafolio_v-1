/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import ModelJavaScript from "./ModelJavascript";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Contenedor = styled.div`
  display: flex;
  flex-flow: nowrap row;
  margin: 0 auto;
`;

const SpherePurple = styled.div`
  width: 100vh;
`;

const BioMe = styled.div``;
const Title = styled.h1``;

const AboutMe = () => {
  return (
    <Section>
      <Contenedor>
        <SpherePurple>
          <ModelJavaScript />
        </SpherePurple>
        <BioMe>
          <Title>Quien soy?</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, doloribus alias! Deserunt corporis vero perferendis?
            Facere esse consequuntur commodi ab corrupti id deserunt, sint
            possimus eius quod illum cumque quasi!
          </p>
        </BioMe>
      </Contenedor>
    </Section>
  );
};

export default AboutMe;
