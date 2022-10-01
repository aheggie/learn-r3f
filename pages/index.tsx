import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stats, useTexture } from "@react-three/drei";
import type { NextPage } from "next";
import { useRef } from "react";
import Lights from "../components/Lights";

const TexturedSpehere = () => {
  const map = useTexture("./textures/stone_wall_diff_4k.png");
  const displacementMap = useTexture("./textures/stone_wall_disp_4k.png");
  const normalMap = useTexture("./textures/stone_wall_nor_gl_4k.png");
  const roughnessMap = useTexture("./textures/stone_wall_rough_4k.png");

  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  return (
    <>
      <mesh position={[0, 2, 0]} castShadow>
        <sphereGeometry args={[1, 200, 200]} />
        <meshStandardMaterial
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          displacementScale={0.1}
          ref={materialRef}
        />
      </mesh>
    </>
  );
};

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
        {/* <ambientLight intensity={0.2} />
        <directionalLight color={"pink"} intensity={1} position={[0, 5, 5]} /> */}
        <Lights />
        <TexturedSpehere />
        <mesh rotation-x={Math.PI * -0.5} receiveShadow>
          <planeBufferGeometry args={[10, 10]} />
          <meshStandardMaterial color={"#4B1DAD"} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Home;
