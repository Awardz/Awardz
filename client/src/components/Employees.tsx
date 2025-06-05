function Employees() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen border border-gray-400 w-screen">
      <h1 className="text-4xl font-bold mb-4">Meet the robust team that nurtures Awardz</h1>
      <p className="text-lg">Our passionate professionals execute a fast-paced workflow undertaking unique challenges</p>
        {/* md = medium screens, lg = large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full px-4">

           <div className="bg-transparent rounded-xl p-6 border border-white/5 hover:border-purple-400/50
              border-l-4 border-l-purple-500 hover:border-l-purple-300 shadow-lg hover:shadow-purple-500/20
              hover:bg-white/5 transition-all duration-500 group">
                <h2 className="text-4xl text-white">Employee 1</h2>
                <p className="text-lg text-gray-300 mt-2 pl-5 pt-5 space-y-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
                    Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent 
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 
                </p>
            </div>

          <div className="bg-transparent rounded-xl p-6 border border-white/5 hover:border-purple-400/50
              border-l-4 border-l-purple-500 hover:border-l-purple-300 shadow-lg hover:shadow-purple-500/20
              hover:bg-white/5 transition-all duration-500 group">
            <h2 className="text-4xl text-white">Employee 2</h2>
               <p className="text-lg text-gray-300 mt-2 pl-5 pt-5 space-y-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
                    Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent 
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 
                </p>
            </div>

            <div className="bg-transparent rounded-xl p-6 border border-white/5 hover:border-purple-400/50
              border-l-4 border-l-purple-500 hover:border-l-purple-300 shadow-lg hover:shadow-purple-500/20
              hover:bg-white/5 transition-all duration-500 group">
            <h2 className="text-4xl text-white">Employee 3</h2>
               <p className="text-lg text-gray-300 mt-2 pl-5 pt-5 space-y-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
                    Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent 
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 
                </p>
 
            </div>
        </div>
    </div>
  );
}
export default Employees;