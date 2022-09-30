import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import AnimatedBox from "../components/AnimatedBox";
import CameraOrbitController from "../components/CameraOrbitController";

const Home: NextPage = () => {
  const testing = true;
  return (
    <div className="container">
      <Canvas>
        <axesHelper visible={testing} args={[2]} />
        <CameraOrbitController />
        <ambientLight intensity={0.1} />
        <directionalLight color={"#FAADED"} position={[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
};

export default Home;
