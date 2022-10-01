import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import type { NextPage } from "next";
import Lights from "../components/Lights";
import Ground from "../components/Ground";
import TexturedSphere from "../components/TexturedSphere";

const Home: NextPage = () => {
  const testing = true;
  return (
    <div className="container">
      <Canvas camera={{ position: [2, 4, 10] }} shadows>
        {testing ? (
          <>
            <Stats />
            <axesHelper args={[10]} />
            <gridHelper args={[10, 10]} />
          </>
        ) : null}
        <OrbitControls />
        <Lights />
        <TexturedSphere />
        <Ground />
      </Canvas>
    </div>
  );
};

export default Home;
