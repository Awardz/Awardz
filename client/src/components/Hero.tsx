function Hero() {
  return (
    <div className="min-h screen flex  py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          We don't do anything yet.  But when we do, it'll be amazing.
        </h1>
        <p className="text-xl text-white mb-8">
          My name is Tony Ward and I am a software engineer. I am a computer science graduate with a passion for building innovative solutions.  
          I have experience in React, Node.js and database design, delivering secuire solutions for clients.  I am currently looking for a full-time position in a related field.
        </p>
        <button className="bg-blue-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">
          Get Started
        </button>
      </div>
    </div>

  );
}
export default Hero;