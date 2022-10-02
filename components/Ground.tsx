const Ground: React.FC = () => {
  return (
    <>
      <mesh rotation-x={Math.PI * -0.5} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color={"#15CB73"} />
      </mesh>
    </>
  );
};

export default Ground;
