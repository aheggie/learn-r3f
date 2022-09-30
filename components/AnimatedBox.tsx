import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three";

const AnimatedBox: React.FC<{ isTesting: boolean }> = ({ isTesting }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  useHelper(meshRef, BoxHelper, "blue");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.005;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 2, 3]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
