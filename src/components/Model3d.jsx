/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Mateshorugua from "../models/MateUruguasho2";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;
const Model3d = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <PerspectiveCamera makeDefault position={[10, 8, 5]} />
        <Stage environment={"sunset"} intensity={0.1}>
          <Mateshorugua scale={0.05} />
        </Stage>
      </Canvas>
    </Container>
  );
};

export default Model3d;
