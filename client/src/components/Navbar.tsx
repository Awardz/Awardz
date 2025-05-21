function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white-600 p-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center w-full">
        <h1 className="text-xl font-bold text-white">Awardz</h1>
        <ul className="flex space-x-4">
          <li><a href="#welcome" className="hover:underline text-white">Home</a></li>
          <li><a href="#resume" className="hover:underline text-white">Resume</a></li>
          <li><a href="#" className="hover:underline text-white">About</a></li>
          <li><a href="#footer" className="hover:underline text-white">Contact</a></li>
          <li><a href="#" className="hover:underline text-white">Sign Up/Login</a></li>
         
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;