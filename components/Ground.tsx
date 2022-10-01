const Ground: React.FC = () => {
  return (
    <>
      <mesh rotation-x={Math.PI * -0.5} receiveShadow>
        <planeBufferGeometry args={[1000, 1000]} />
        <meshStandardMaterial color={"#4B1DAD"} />
      </mesh>
    </>
  );
};

export default Ground;
