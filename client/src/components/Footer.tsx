function Footer() {
  return (
 /*    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Awardz. All rights reserved.</p>
      </div>
    </footer> */
    
    // DeepSeek Sample Footer Component

  //    <footer className="bg-gray-900 text-white py-12">
  //     <div className="container mx-auto px-4">
  //       {/* Main Footer Content */}
  //       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  //         {/* Column 1: Logo/About */}
  //         <div>
  //           <h3 className="text-xl font-bold mb-4">Awardz Inc</h3>
  //           <p className="text-gray-400">
  //             Building innovative solutions for modern businesses.
  //           </p>
  //         </div>

  //         {/* Column 2: Quick Links */}
  //         <div>
  //           <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
  //           <ul className="space-y-2">
  //             <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
  //             <li><a href="/services" className="text-gray-400 hover:text-white transition">Services</a></li>
  //             <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
  //           </ul>
  //         </div>

  //         {/* Column 3: Contact */}
  //         <div>
  //           <h4 className="font-semibold text-lg mb-4">Contact</h4>
  //           <address className="not-italic text-gray-400">
  //             <p>123 Main St, City</p>
  //             <p>Email: hello@acme.com</p>
  //             <p>Phone: (123) 456-7890</p>
  //           </address>
  //         </div>

  //         {/* Column 4: Newsletter */}
  //         <div>
  //           <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
  //           <form className="flex flex-col gap-2">
  //             <input 
  //               type="email" 
  //               placeholder="Your email" 
  //               className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             />
  //             <button 
  //               type="submit" 
  //               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
  //             >
  //               Subscribe
  //             </button>
  //           </form>
  //         </div>
  //       </div>

  //       {/* Copyright/Bottom Bar */}
  //       <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
  //         <p>© {new Date().getFullYear()} Awardz Inc. All rights reserved.</p>
  //       </div>
  //     </div>
  //   </footer>
  // );

   <footer className="relative z-10 bg-transparent py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Social Links (Optional) */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          {/* Add more social icons as needed */}
        </div>

        {/* Copyright + Minimal Links */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Awardz. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
