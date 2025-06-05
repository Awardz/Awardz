import Picture from '../assets/Picture2.png';
function Founder() {
  return (
    <div className="flex flex-row  h-screen bg-transparent p-8 border border-gray-800 w-screen">
        <div className='flex lg:flex-row items-center shadow-lg max-w-2xl w-full h-full p-8'>
            <img src={Picture} alt="Founder" className=" shadow-lg object cover w-full h-full rounded-lg" />

        </div>
        <div className='border border-gray-800 p-8 flex flex-col w-full h-full'>
            <div className="flex flex-col h-full border border-gray-800 ">
            <h1 className="text-4xl font-bold mb-4">Tony Ward, CEO</h1>
            <p className="text-lg text-gray-700 text-white max-w-2xl">T. Ward is a motivated ambitious figure in the tech
                industry. Being the CEO of Awardz, he is a known visionary
                who foresees the future of integrated technological
                advancements. As a company, Awardz embraces
                inspiration in their core values e.g., Trust, Quality,
                Responsibility, Integrity, Passion and, Innovation.
            </p>

            <div className='flex flex-col items-start mt-50 border border-yellow-800'>
                <h1 className="text-2xl font-semibold">Our Skill Set</h1>
                <ul className="list-disc pl-5 mt-2 list-none">
                    <li className="text-lg text-gray-700 text-white">Graphic Design</li>
                    <li className="text-lg text-gray-700 text-white">Web Development</li>
                    <li className="text-lg text-gray-700 text-white">Video Editing</li>
                    <li className="text-lg text-gray-700 text-white">Audio Engineering</li>
                    <li className="text-lg text-gray-700 text-white">Cybersecurity</li>
                    <li className="text-lg text-gray-700 text-white">Software Development</li>
                    <li className="text-lg text-gray-700 text-white">Mobile App Development</li>
                    <li className="text-lg text-gray-700 text-white">Cloud Computing</li>
                    <li className="text-lg text-gray-700 text-white">Data Science & Analytics</li>
                </ul>
            </div>
            </div>
        </div>
      

       
    </div>
  );
}
export default Founder;