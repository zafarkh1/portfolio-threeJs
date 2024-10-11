import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import Rings from "../components/Ring";

function Showcase() {
  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <>
      <section className="min-h-screen w-full relative flex flex-col">
        {/*        name and tagline      */}
        <div className="w-full mx-auto flex flex-col gap-3 sm:mt-36 mt-20 c-space">
          <p className="sm:text-3xl text-2xl text-center text-white font-medium font-generalsans">
            Hi I'm Zafar <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient">
            Building web applications with love
          </p>
        </div>

        {/*         three js      */}
        <div className="w-full h-full absolute inset-0">
          {/* <Leva /> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  rotation={[0, -Math.PI, 0]}
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                />
              </HeroCamera>

              {/*    floating items */}
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
              </group>

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute bottom-7 left-0 right-0 z-10 w-full c-space">
          <a href="#about" className="w-fit">
            <Button
              name="Let's work together"
              isBeam
              containerClass={"sm:w-fit w-full sm:min-w-96"}
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default Showcase;
