import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import type { NextPage } from "next";
import AnimatedBox from "../components/AnimatedBox";

const Home: NextPage = () => {
  const testing = true;
  return (
    <div className="container">
      <Canvas>
        {testing ? (
          <>
            <Stats />
            <axesHelper args={[10]} />
            <gridHelper args={[10, 10]} />
          </>
        ) : null}
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color={"#FAADED"} position={[0, 0, 5]} />
        <AnimatedBox isTesting={testing} />
      </Canvas>
    </div>
  );
};

export default Home;
