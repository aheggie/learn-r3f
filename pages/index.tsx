import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { NextPage } from "next";
import AnimatedBox from "../components/AnimatedBox";

const Home: NextPage = () => {
  const testing = true;
  return (
    <div className="container">
      <Canvas>
        <axesHelper visible={testing} args={[10]} />
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color={"#FAADED"} position={[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
};

export default Home;
