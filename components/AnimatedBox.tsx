import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.01;
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
