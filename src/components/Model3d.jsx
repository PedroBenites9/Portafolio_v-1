import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import Matesuli from "./Matesuli";
import Mateshorugua from "./MateUruguasho2";
const Model3d = () => {
  // camera={{ fov: 75, position: [3, 3, 6] }}
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate={true} />
      <ambientLight intensity={3} />
      <directionalLight position={[3, 1, 1]} />
      <PerspectiveCamera makeDefault position={[0, 1, 2]} />
      <Stage environment={"sunset"} intensity={0.002} contactShadow={true}>
        {/* <Matesuli /> */}
        <Mateshorugua scale={0.01} />
      </Stage>
    </Canvas>
  );
};

export default Model3d;
