"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-screen w-full bg-computer flex flex-col items-center justify-center">
        <div className="bg-black border-2 border-gray-400 rounded p-2 min-w-[200px]">
          <TypeAnimation
            sequence={[1000, "Robotik AG"]}
            wrapper="span"
            speed={2}
            className="text-white text-center text-3xl font-aldrich"
          />
        </div>
        <div className="min-h-[25px] mt-8">
          <TypeAnimation
            sequence={[3000, "der BIP Kreativitätsschule Leipzig"]}
            wrapper="span"
            cursor={false}
            speed={20}
            className="text-white"
          />
        </div>
        <div className="m-8 flex flex-col items-center justify-center rounded-full bg-gray-100 h-[150px] w-[150px] md:h-[200px] md:w-[200px] shadow-inner shadow-black">
          <img
            className="h-[100px] md:h-[150px] w-full animate-spin object-scale-down"
            src="settings.svg"
            alt="Settings SVG"
          />
        </div>
      </div>
      <h1 className="m-8 pt-8 text-4xl md:text-6xl text-darkBlue">Die AG</h1>

      <div className="flex items-center justify-center">
        <div className="max-w-screen-md p-4">
          <p className="text-center bg-opacity-0">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div className="bg-computer w-full h-[80px] p-4 mt-8">
        <h1 className="text-white">Projekte</h1>
      </div>

      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-4">
              <div className="mt-[60px] m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  01
                </div>
                <h1 className="text-blue md:text-left mb-8 md:text-4xl">
                  Projekt 1
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="m-8 mt-0 md:mt-8 flex flex-col items-center justify-center order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[200px] w-full object-scale-down"
                  src="settings.svg"
                  alt="Settings SVG"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="mt-[70px] m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  02
                </p>
                <h1 className="text-blue md:text-right mb-8 md:text-4xl">
                  Projekt 2
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center w-full order-2 md:order-1">
                <div className="w-4/5">
                  <img
                    src="settings.svg"
                    alt="workflow SVG"
                    className="w-[100px] md:w-[250px] p-4 object-scale-down"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  03
                </div>
                <h1 className="text-blue md:text-left mb-8 md:text-4xl">
                  Projekt 3
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 w-full">
                <img
                  src="settings.svg"
                  alt="workflow SVG"
                  className="w-[170px] md:w-[260px] p-4 shadow-md shadow-blue rounded-3xl bg-opacity-20"
                />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "class MyLibrary:",
                    1000,
                    "def __init__(self):",
                    1000,
                    "self.destroy()",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="font-mono text-[15px] text-black pt-8"
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
