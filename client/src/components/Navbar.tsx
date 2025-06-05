function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow-md w-full  backdrop-blur-md shadow-purple-500/50 ">
      <div className="container mx-auto flex justify-between items-center h-16 px-4 bg-white/90 rounded-lg">
        <h1 className="text-xl font-bold">Awardz</h1>
        <ul className="flex space-x-4 text-black space-x-8">
          <li><a href="#welcome" className="hover:underline">Home</a></li>
          <li><a href="#resume" className="hover:underline">Resume</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#footer" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;