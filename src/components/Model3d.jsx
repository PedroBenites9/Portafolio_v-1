import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import Matesuli from "./Matesuli";
import Mateshorugua from "./MateUruguasho2";
const Model3d = () => {
  // camera={{ fov: 75, position: [3, 3, 6] }}
  return (
    <>
      <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
        <Stage environment={"city"} intensity={0.6}>
          {/* <Matesuli /> */}
          <Mateshorugua />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas>
    </>
  );
};

export default Model3d;
