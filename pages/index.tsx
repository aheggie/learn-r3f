import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import type { NextPage } from "next";
// import AnimatedBox from "../components/AnimatedBox";

const TexturedSpeheres = () => {
  return (
    <>
      <mesh position={[-2, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={"#FABBAE"} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={"#4B1DAD"} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={"#FAADED"} />
      </mesh>
    </>
  );
};

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
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        {/* <AnimatedBox isTesting={testing} /> */}
        <TexturedSpeheres />
      </Canvas>
    </div>
  );
};

export default Home;
