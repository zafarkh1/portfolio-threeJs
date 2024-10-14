import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";

function HeroCamera({ children, isMobile }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        // [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        [-state.pointer.y / 100, -state.pointer.x / 50, 0], // Smaller divisor
        0.25,
        delta
      );
    }
  });
  return <group ref={groupRef}>{children}</group>;
}

export default HeroCamera;
