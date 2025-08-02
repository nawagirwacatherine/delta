
// import React from 'react'
// import MentrualHealth from '../components/MentrualHealth'
// import Pregnancy from '../components/HealthyMenu/Pregnancy'
// import HealthJourneyNav from '../components/HealthJourneyNav'
// import StiAndSafepractices from '../components/HealthyMenu/StiAndSafepractices'
// import MentalHealth from '../components/HealthyMenu/MentalHealth'


// const HealthJourney = () => {
//   return (
//      <>
//           <div className="">
//             < HealthJourneyNav/>
    
//              <div id="disease">
//           <MentrualHealth />
//         </div>

//           <div id="symptoms">
//           <Pregnancy />
//         </div>
            
//              <div id="challenges">
//           <MentalHealth />
//         </div>
    
//               <div id="details">
//           <StiAndSafepractices />
//         </div>
    
//           </div>
//         </>
//   )
// }

// export default HealthJourney 


import HealthJourneyNav from '../components/HealthJourneyNav';
import MentrualHealth from '../components/MentrualHealth';
import Pregnancy from '../components/HealthyMenu/Pregnancy';
import MentalHealth from '../components/HealthyMenu/MentalHealth';
import StiAndSafepractices from '../components/HealthyMenu/StiAndSafepractices';

const HealthJourney = () => {
  return (
    <>
      

      {/* Header Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to Your Health Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Access tailored health content based on your needs.
        </p>
      </div>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for health topics, questions, or resources..."
          className="w-2/3 p-3 border rounded-md shadow-sm"
        />
      </div>

      {/* Daily Health Tip */}
      <div className="bg-green-100 text-green-800 py-3 px-6 rounded-lg w-2/3 mx-auto text-center mb-10">
        💡 Drink at least 8 glasses of water daily for optimal health.
      </div>

      {/* Feature Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mb-10">
        <div className="p-6 border rounded-md hover:bg-pink-50 transition">
          <Pregnancy />
        </div>
        <div className="p-6 border rounded-md hover:bg-red-50 transition">
          <MentrualHealth />
        </div>
        <div className="p-6 border rounded-md hover:bg-blue-50 transition">
          <MentalHealth />
        </div>
        <div className="p-6 border rounded-md hover:bg-red-100 transition">
          <StiAndSafepractices />
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 text-center pb-10">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#4ABBB7] mb-2">Education Hub</h3>
          <button className="bg-[#4ABBB7] text-white px-4 py-2 rounded-md">Explore Now</button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#4ABBB7] mb-2">Ask Questions</h3>
          <button className="bg-[#4ABBB7] text-white px-4 py-2 rounded-md">Start Chat</button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#4ABBB7] mb-2">Community Stories</h3>
          <button className="bg-[#4ABBB7] text-white px-4 py-2 rounded-md">Read Stories</button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#4ABBB7] mb-2">Health Tools</h3>
          <button className="bg-[#4ABBB7] text-white px-4 py-2 rounded-md">See Tools</button>
        </div>
      </div>
    </>
  );
};

export default HealthJourney;