import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import Matesuli from "./Matesuli";
import Mateshorugua from "./MateUruguasho2";
const Model3d = () => {
  // camera={{ fov: 75, position: [3, 3, 6] }}
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.5}>
        {/* <Matesuli /> */}
        <OrbitControls enableZoom={false} autoRotate={true} />
        <Mateshorugua />
      </Stage>
    </Canvas>
  );
};

export default Model3d;
