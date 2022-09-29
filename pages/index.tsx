import { Canvas, useThree } from "@react-three/fiber";
import type { NextPage } from "next";
import AnimatedBox from "../components/AnimatedBox";

const Home: NextPage = () => {
  const { gl, camera } = useThree();

  return (
    <div className="container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color={"pink"} position={[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
};

export default Home;
