import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { myProjects } from "../constants";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

function Projects(props) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    if (direction === "previous") {
      setSelectedProjectIndex(
        selectedProjectIndex === 0
          ? myProjects.length - 1
          : selectedProjectIndex - 1
      );
    } else {
      setSelectedProjectIndex(
        selectedProjectIndex === myProjects.length - 1
          ? 0
          : selectedProjectIndex + 1
      );
    }
  };

  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full mt-12">
        {/*          project content      */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          {/*          spotlight       */}
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          {/*          logo       */}
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-xl"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          {/*          details        */}
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          {/*          tags  and link      */}
          <div className="flex justify-between items-center flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              className="text-white-600 hover:text-white cursor-pointer flex items-center gap-3"
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="assets/arrow-up.png" alt="arrow" className="h-3 w-3" />
            </a>
          </div>

          {/*          previous and next       */}
          <div className="flex justify-between items-center my-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left"
                className="h-4 w-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right"
                className="h-4 w-4"
              />
            </button>
          </div>
        </div>

        {/*      Preview of project with threeJs */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={4} />
            <directionalLight position={[10, 10, 5]} />

            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer txt={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Projects;
