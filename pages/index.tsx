import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import type { NextPage } from "next";
import Lights from "../components/Lights";
import Ground from "../components/Ground";
import TexturedSphere from "../components/TexturedSphere";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Matilda: React.FC = () => {
  const model = useLoader(GLTFLoader, "./models/matilda.glb");
  console.log(model);

  model.scene.traverse((object) => {
    // typescript complains about isMesh without this
    // see https://discourse.threejs.org/t/gltf-scene-traverse-property-ismesh-does-not-exist-on-type-object3d/27212
    if ((object as THREE.Mesh).isMesh) {
      object.castShadow = true;
    }
  });
  return <primitive scale={0.015} position={[2, 0, 3]} object={model.scene} />;
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
        <Lights />
        <Matilda />
        <TexturedSphere />
        <Ground />
      </Canvas>
    </div>
  );
};

export default Home;
