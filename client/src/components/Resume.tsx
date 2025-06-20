function Resume() {
  return (
    <section id="resume" className="py-16 w-screen border border-gray-800">
      <div className="mx-auto px-4 w-screen">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Resume</h2>
        
        {/* Experience */}
        {/* // border-b-2 is a 2px bottom border */}
        {/*         
        <div className="mb-12">
            
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">Experience</h3> 
          <div className="space-y-6">
            <div>
              <h4 className="font-bold">Software Engineer @ Company X</h4>
              <p className="text-gray-600">2020 - Present</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Built React apps with TypeScript and Tailwind CSS.</li>
                <li>Designed REST APIs using Node.js and Express.</li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* Skills */}
        <div className="w-full mb-12 pb-4">
        <h3 className="text-3xl font-semibold mb-6 pb-2 text-white border-b-2 border-gray-400 w-full text-center">Skills</h3>

        <div className="flex flex-wrap items-center gap-4 mb-2 justify-center">
        <span className="text-lg font-bold relative group text-white">
         Programming Languages:
        <span className="absolute left-0 bottom-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-300"></span>
        </span>
        {['JavaScript', 'TypeScript','Java', 'C#', 'C', 'HTML/CSS', 'Python'].map(skill => (
        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
        {skill}
        </span>
            ))}
          </div>
          {/* Frameworks and Libraries */}
        <div className="flex flex-wrap items-center gap-4 mb-2 justify-center">
        <span className="text-lg font-bold relative group text-white ">
         Frameworks and Libraries:
        <span className="absolute left-0 bottom-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-300"></span>
        </span>
        {['React', 'Axios', 'Node.js','Express', 'FastAPI'].map(skill => (
        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
        {skill}
        </span>
            ))}
          </div>


             {/* Databases */}
        <div className="flex flex-wrap items-center gap-4 mb-2 justify-center">
        <span className="text-lg font-bold relative group text-white">
         Databases:
        <span className="absolute left-0 bottom-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-300"></span>
        </span>
        {['MySQL', 'PostgreSQL'].map(skill => (
        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
        {skill}
        </span>
            ))}
          </div>

             {/* DevOps & Containerization */}
        <div className="flex flex-wrap items-center gap-4 mb-2 justify-center">
        <span className="text-lg font-bold relative group text-white">
         DevOps & Networking:
        <span className="absolute left-0 bottom-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-300"></span>
        </span>
        {['Proxmox VE', 'Docker','Kubernetes', 'Cisco Packet Tracer', 'Wireshark', 'NMAP'].map(skill => (
        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
        {skill}
        </span>
            ))}
          </div>

        {/* Networking & Security */}
        <div className="flex flex-wrap items-center gap-4 mb-2 justify-center">
        <span className="text-lg font-bold relative group text-white">
         Networking & Security:
        <span className="absolute left-0 bottom-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-300"></span>
        </span>
        {['Cisco Packet Tracer', 'Wireshark', 'NMAP'].map(skill => (
        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
        {skill}
        </span> 
        ))}
        </div>

               {/* Tools */}
        <div className="flex flex-wrap items-center gap-4 mb-2 justify-center">
        <span className="text-lg font-bold relative group text-white">
         Tools:
        <span className="absolute left-0 bottom-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-300"></span>
        </span>
        {['Git', 'VS Code'].map(skill => (
        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
        {skill}
        </span>
            ))}
          </div>

           {/* Practices */}
            <div className="flex flex-wrap items-center gap-4 mb-2 justify-center">
        <span className="text-lg font-bold relative group text-white">
         Practices:
        <span className="absolute left-0 bottom-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-300"></span>
        </span>
        {['Agile', 'Iterative','Spiral'].map(skill => (
        <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
        {skill}
        </span>
            ))}
          </div>
        </div>

    
        {/* Education */}
        <div>
          <h3 className="text-3xl font-semibold mb-4 border-b-2 border-gray-200 pb-2 text-white text-center">Education</h3>
          <div className="space-y-6 text-center">
                <div>
                    <h4 className="font-bold text-white text-2xl">Master of Science in Computer Science</h4>
                    <p className="text-white text-xl">New York Institute of Technology, Decenmber 2025</p>
                </div>
                <div>
                    <h4 className="font-bold text-white text-2xl">Bachelor of Science in Computer Science</h4>
                    <p className="text-white text-xl">New York Institute of Technology, May 2025</p>
                </div>
                <div>
                    <h4 className="font-bold text-white text-2xl">Associate in Science in Liberal Arts and Sciences: Mathematics and Sciecne</h4>
                    <p className="text-white text-xl">Nassau Community College</p>
                </div>

                <div>
                    <h4 className="text-3xl font-semibold mb-4 border-b-2 border-gray-200 pb-2 text-white text-center">Relevant Coursework</h4>
                    <p className="text-white text-xl">Artificial Intelligence I, Operating System Security, Information System Security Engineering & Administration, Quantum Mechanics I</p>
                    <p className="text-white text-xl">In Progress: Machine Learning, Principle of Information Security, Advance Network & Internet Security</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;