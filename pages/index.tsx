import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stats, useTexture } from "@react-three/drei";
import type { NextPage } from "next";
import { useRef } from "react";
// import AnimatedBox from "../public/textures";

type Direction = "out" | "in";

const nextStoneFrame = (
  currentScale: number,
  currentDirection: Direction
): [number, Direction] => {
  const newScale: number =
    currentDirection === "out" ? currentScale + 0.005 : currentScale - 0.005;
  console.log(newScale);
  if (newScale >= 0.5) {
    return [newScale, "in"];
  }

  if (newScale <= 0.1) {
    return [newScale, "out"];
  }

  return [newScale, currentDirection];
};

const TexturedSpeheres = () => {
  const map = useTexture("./textures/stone_wall_diff_4k.png");
  const displacementMap = useTexture("./textures/stone_wall_disp_4k.png");
  const normalMap = useTexture("./textures/stone_wall_nor_gl_4k.png");
  const roughnessMap = useTexture("./textures/stone_wall_rough_4k.png");

  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  let dir: Direction = "out";
  // let pace = 0;
  // const BREATH_RATE = 50;
  useFrame(() => {
    if (materialRef.current) {
      const [nextScale, nextDir] = nextStoneFrame(
        materialRef.current.displacementScale,
        dir
      );
      materialRef.current.displacementScale = nextScale;
      dir = nextDir;
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
