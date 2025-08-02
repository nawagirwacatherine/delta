
// import React from 'react'
// import WeeklyTips from './WeeklyTips'
// import Steps from './Steps'
//  import Inquire from './Inquire'
//  import QandAnswer from './QandAnswer'

// const TopicsPage = () => {
//   return (
//      <>
//           <div className="">
            
    
//              <div id="weekly">
//                <WeeklyTips/>
          
//         </div>

//           <div id="step">
//             <Steps  />
          
//         </div>
            
//              <div id="inquire">
//               <Inquire />
//         </div>
    
//               <div id="answer">
//           <QandAnswer />
//         </div>
    
//           </div>
//         </>
//   )
// }

// export default TopicsPage  


import React from 'react';
import TopicsPageNav from '../components/TopicsPageNav';

const tools = [
  {
    name: "Cycle Tracker",
    description: "Track your menstrual cycle and predict periods.",
    bgColor: "bg-pink-100",
    buttonLabel: "Use Tool"
  },
  {
    name: "Self Assessment",
    description: "Assess your symptoms for quick guidance.",
    bgColor: "bg-blue-100",
    buttonLabel: "Use Tool"
  },
  {
    name: "Pregnancy Calculator",
    description: "Estimate due dates and pregnancy stages.",
    bgColor: "bg-green-100",
    buttonLabel: "Use Tool"
  },
  {
    name: "Diabetes Tracker",
    description: "Log sugar levels and monitor daily health.",
    bgColor: "bg-red-100",
    buttonLabel: "Use Tool"
  },
];

const TopicPage = () => {
  return (
    <div className="min-h-screen">
      <TopicsPageNav />

      {/* Page Title */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800">Interactive Health Tools</h1>
        <p className="text-gray-500 mt-2">Use these tools to better manage your health and access personal insights.</p>
      </div>

      {/* Tools Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8 pb-10">
        {tools.map((tool, index) => (
          <div key={index} className={`p-6 ${tool.bgColor} rounded-md shadow-md`}>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h2>
            <p className="text-gray-700 mb-4">{tool.description}</p>
            <button className="bg-[#4ABBB7] text-white px-4 py-2 rounded hover:bg-[#3aa9a4] transition">
              {tool.buttonLabel}
            </button>
          </div>
        ))}
      </div>

      {/* More Tools Section */}
      <div className="bg-blue-50 text-center p-6 mx-8 mb-10 rounded-md">
        <h2 className="text-md font-semibold text-gray-700">
          More Tools
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          More tools will be added soon to help you monitor and improve your health.
        </p>
      </div>
    </div>
  );
};

export default TopicPage;