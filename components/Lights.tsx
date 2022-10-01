import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights: React.FC = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useHelper(lightRef, DirectionalLightHelper, 5, "red");
  return (
    <>
      <ambientLight intensity={0.05} />
      <directionalLight ref={lightRef} position={[5, 20, 20]} castShadow />
    </>
  );
};

export default Lights;
