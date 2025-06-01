import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Globe from "react-globe.gl";

function Hero() {

  interface City {
    lat: number;
    lng: number;
    name: string;
  }
  const cities = [
    { lat: 40.7128, lng: -74.0060, name: "New York" },
    { lat: 51.5074, lng: -0.1278, name: "London" },
    { lat: 35.6762, lng: 139.6503, name: "Tokyo" },
    { lat: 37.7749, lng: -122.4194, name: "San Francisco" },
    { lat: 48.8566, lng: 2.3522, name: "Paris" },
  ];
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="min-h-screen flex py-20 px-4 border border-gray-700 w-screen"
    >
      <motion.div variants={fadeIn} className="mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Text Content - Left Side */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-7xl font-bold text-white mb-4 leading-tight">
            We don't do anything yet. <br /> But when we do, it'll be amazing.
          </h1>
          <p className="font-normal text-2xl text-white mb-8 max-w-xl leading-relaxed border border-gray-700">
            My name is John Doe a software engineer. I am a computer science graduate with a passion for building innovative solutions. 
          I have experience in React, Node.js and database design, delivering secure solutions for clients. I am currently looking for a full-time position in a related field.
          </p>
        </div>

        {/* Globe - Right Side */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <motion.div
            variants={fadeIn}
            className="w-full h-96 lg:h-[700px]"
          >
            <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundColor="rgba(0,0,0,0)"
              width={1000}
              height={900}
              pointsData={cities}
              pointRadius={1}
              pointLabel={point => `
              <div style="
                font-size: 2rem;
                padding: 16px 20px;
                /* Other styles */
              ">
                <div style="font-size: 1.2em"></div>
                ${(point as City).name.toUpperCase()}
              </div>
              `}
              pointAltitude={0.1}
              polygonsData={[]}
              polygonCapColor={() => "rgba(0,0,0,0)"}
              polygonSideColor={() => "rgba(0,0,0,0)"}
              polygonStrokeColor={() => "rgba(0,0,0,0)"}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;



/*  Default Globe Component
            <Globe
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundColor="rgba(0,0,0,0)"
              width={1000}
              height={1000}
              pointsData={cities}
              pointRadius={1}
              polygonsData={[]}
              polygonCapColor={() => "rgba(0,0,0,0)"}
              polygonSideColor={() => "rgba(0,0,0,0)"}
              polygonStrokeColor={() => "rgba(0,0,0,0)"}
            /> */