import { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

function About(props) {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Zafar");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="h-full grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5">
        {/*      first item      */}
        <div className="xl:row-span-3 col-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full h-fit sm:h-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Zafar</p>
              <p className="grid-subtext">With 1 year of experience</p>
            </div>
          </div>
        </div>

        {/*      second item      */}
        <div className="xl:row-span-3 col-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid2"
              className="w-full h-fit sm:w-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Tech stacks</p>
              <p className="grid-subtext">
                I specialize in JavaScript with focus on React and Next.js
                ecosystems
              </p>
            </div>
          </div>
        </div>

        {/*      third item      */}
        <div className="xl:row-span-4 col-span-1">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I'm based in Uzbekistan, with remote available
              </p>
              <Button
                name={"Contact me"}
                isBeam
                containerClass={"w-full mt-10"}
              />
            </div>
          </div>
        </div>

        {/*      fourth item      */}
        <div className="xl:row-span-3 xl:col-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid3"
              className="w-full h-fit sm:h-[266px] object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through coding.
                Coding isn't my proffession - it's my passion.
              </p>
            </div>
          </div>
        </div>

        {/*      fifth item      */}
        <div className="xl:row-span-2 xl:col-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full h-fit md:h-[126px] sm:h-[276px] object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-white text-gray_gradient">
                  {" "}
                  Zafar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
