import { OrbitControls } from "@react-three/drei";

import { Hand } from "./Hand";

export const Universe = () => {
  return (
    <>
      <OrbitControls />
      {/* Lights */}
      <ambientLight intensity={1} />
      <directionalLight
        position={[0, 0, 5]}
        intensity={1}
        castShadow
        color={"white"}
      />
      <Hand
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, Math.PI / 2, Math.PI]}
      />
    </>
  );
};
