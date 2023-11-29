/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import JavaScript from "../models/Javascript";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;
const ModelJavaScript = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <PerspectiveCamera makeDefault position={[10, 10, 3]} />
        <Stage environment={"sunset"} intensity={0.1}>
          <JavaScript scale={0.05} position={[1, 10, 0]} />
        </Stage>
      </Canvas>
    </Container>
  );
};

export default ModelJavaScript;
