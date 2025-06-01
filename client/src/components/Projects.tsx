function Projects() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen border border-gray-400 w-screen">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-lg">Here are some of our projects.</p>
        {/* md = medium screens, lg = large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full px-4">

           <div className="bg-transparent rounded-xl p-6 border border-white/5 hover:border-purple-400/50
              border-l-4 border-l-purple-500 hover:border-l-purple-300 shadow-lg hover:shadow-purple-500/20
              hover:bg-white/5 transition-all duration-500 group">
            <h2 className="text-4xl text-white">Networthy - Wealth Management</h2>
            <ul className="list-disc list-inside text-2xl font-normal text-white pl-5 pt-5 space-y-5">
                <li>Built a wealth management app backend with FastAPI, PostgreSQL, and Plaid API, enabling user registration and secure bank account
                   linking for real-time balance tracking.</li>
                <li> Designed a relational database with seeded tables for users, bank accounts, and transactions, supporting scalable financial data management.</li>
                <li>Planned enhancements to include a React frontend for seamless user interaction, advanced Plaid transaction syncing, 
                  and machine learning-driven insights for financial planning, aiming to deliver a comprehensive net worth tracking tool.</li>
                <br />*In Progress*
                    
            </ul>
            </div>

          <div className="bg-transparent rounded-xl p-6 border border-white/5 hover:border-purple-400/50
              border-l-4 border-l-purple-500 hover:border-l-purple-300 shadow-lg hover:shadow-purple-500/20
              hover:bg-white/5 transition-all duration-500 group">
            <h2 className="text-4xl text-white">Interactive Twitch Chatbot with Real-Time Analytics</h2>
            <ul className="list-disc list-inside text-2xl font-normal text-white pl-5 pt-5 space-y-5">
                <li>Built a real-time chatbot using Node.js and tmi.js that processes commands with async API calls, error handling, and
                    secure credential management via environment variables.</li>
                <li> Planned: Integrating a local LLM to analyze chat trends and generate dynamic responses, moving beyond static
                    commands. Designed architecture for local LLM integration to analyze chatroom trends and enhancing engagement</li>

                    <br />*In Progress*
            </ul>
            </div>

            <div className="bg-transparent rounded-xl p-6 border border-white/5 hover:border-purple-400/50
              border-l-4 border-l-purple-500 hover:border-l-purple-300 shadow-lg hover:shadow-purple-500/20
              hover:bg-white/5 transition-all duration-500 group">
            <h2 className="text-4xl text-white">Quest To Best</h2>
            <ul className="list-disc list-inside text-2xl font-normal text-white pl-5 pt-5 space-y-5">
                <li>Led database and authentication development, designing and implementing a MySQL system to track player stats with CRUD 
                    operations and a dynamic public/admin leaderboard.</li>
                <li>Collaborated with four teammates on gameplay systems, ensuring database consistency with Godot client logic.</li>
                <li>Integrated dynamic leaderboard UI with real-time database connectivity, and managed persistent user sessions across gameplay 
                    levels.</li>
            </ul>
            </div>

            <div className="bg-transparent rounded-xl p-6 border border-white/5 hover:border-purple-400/50
              border-l-4 border-l-purple-500 hover:border-l-purple-300 shadow-lg hover:shadow-purple-500/20
              hover:bg-white/5 transition-all duration-500 group">
            <h2 className="text-4xl text-white">Enterprise Network Security & Administration Design</h2>
            <ul className="list-disc list-inside text-2xl font-normal text-white pl-5 pt-5 space-y-5">
                <li>Designed a secure network for a fictional 100-employee organization using Cisco Packet Tracer, configuring 10 devices
                    with VLANs and firewall rules to enforce network segmentation and access control.</li>
                <li>Conducted network traffic analysis using Wireshark to identify Telnet packets and performed port scanning with
                    NMAP to assess security vulnerabilities.</li>
                <li>Authored security policies to mitigate malware and phishing threats; implemented RSA encryption to protect sensitive
                    documents</li>
            </ul>
            </div>

        </div>
    </div>
  );
}
export default Projects;