/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "../models/Computer";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  @media (max-width: 451px) {
    width: 50%;
    height: 50%;
  }
`;
const ModelComputer = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <PerspectiveCamera makeDefault position={[20, 12, 3]} />
        <Stage environment={"sunset"} intensity={0.1}>
          <Computer />
        </Stage>
      </Canvas>
    </Container>
  );
};

export default ModelComputer;
