import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stats, useTexture } from "@react-three/drei";
import type { NextPage } from "next";
import { useRef } from "react";
// import AnimatedBox from "../public/textures";

const TexturedSpeheres = () => {
  const map = useTexture("./textures/stone_wall_diff_4k.png");
  const displacementMap = useTexture("./textures/stone_wall_disp_4k.png");
  const normalMap = useTexture("./textures/stone_wall_nor_gl_4k.png");
  const roughnessMap = useTexture("./textures/stone_wall_rough_4k.png");

  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  let dir: "out" | "in" = "out";
  let pace = 0;
  const BREATH_RATE = 50;
  useFrame(() => {
    if (materialRef.current) {
      console.log(pace);
      pace += 1;
      console.log(pace);
      if (materialRef.current.displacementScale === 0 && pace === BREATH_RATE) {
        materialRef.current.displacementScale = 0.1;
        dir = "out";
        console.log(materialRef.current.displacementScale);
        pace = 0;
      }
      if (
        materialRef.current.displacementScale === 0.1 &&
        dir === "out" &&
        pace === BREATH_RATE
      ) {
        materialRef.current.displacementScale = 0.2;
        console.log(materialRef.current.displacementScale);
        pace = 0;
      }
      if (
        materialRef.current.displacementScale === 0.2 &&
        pace === BREATH_RATE
      ) {
        materialRef.current.displacementScale = 0.1;
        dir = "in";
        console.log(materialRef.current.displacementScale);
        pace = 0;
      }
      if (
        materialRef.current.displacementScale === 0.1 &&
        dir === "in" &&
        pace === BREATH_RATE
      ) {
        materialRef.current.displacementScale = 0;
        console.log(materialRef.current.displacementScale);
        pace = 0;
      }
    }
  });
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 200, 200]} />
        <meshStandardMaterial
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          displacementScale={0}
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
      <Canvas camera={{ position: [2, 4, 10] }}>
        {testing ? (
          <>
            <Stats />
            <axesHelper args={[10]} />
            <gridHelper args={[10, 10]} />
          </>
        ) : null}
        <OrbitControls />
        <ambientLight intensity={0.2} />
        <directionalLight color={"pink"} intensity={1} position={[0, 5, 5]} />
        {/* <AnimatedBox isTesting={testing} /> */}
        <TexturedSpeheres />
      </Canvas>
    </div>
  );
};

export default Home;
