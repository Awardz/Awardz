import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="min-h-screen flex py-20 px-4 text-center"
    >
      <motion.div variants={fadeIn} className="max-w-3xl mx-auto border border-gray-800 justify-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          We don't do anything yet. But when we do, it'll be amazing.
        </h1>
        <p className="text-xl text-white mb-8">
          My name is Tony Ward and I am a software engineer. I am a computer science graduate with a passion for building innovative solutions. 
          I have experience in React, Node.js and database design, delivering secure solutions for clients. I am currently looking for a full-time position in a related field.
        </p>
        <motion.button
          variants={fadeIn}
          whileHover="hover"
          className="bg-blue-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Hero;