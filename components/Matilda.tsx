import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Matilda: React.FC<{
  scale: number;
  position: number[];
}> = ({ scale, position }) => {
  const model = useLoader(GLTFLoader, "./models/matilda.glb");

  model.scene.traverse((object) => {
    // typescript complains about isMesh without this
    // see https://discourse.threejs.org/t/gltf-scene-traverse-property-ismesh-does-not-exist-on-type-object3d/27212
    if ((object as THREE.Mesh).isMesh) {
      object.castShadow = true;
    }
  });
  return <primitive scale={scale} position={position} object={model.scene} />;
};

export default Matilda;
