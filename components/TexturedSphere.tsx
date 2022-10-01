import { useTexture } from "@react-three/drei";
import { useRef } from "react";

const TexturedSphere = () => {
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

export default TexturedSphere;
