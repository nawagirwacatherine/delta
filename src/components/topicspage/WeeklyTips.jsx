import React from 'react';
import WeeklyTipsData from './WeeklyTipsData';

const WeeklyTips = () => {
  

  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#4ABBB7]">
        Weekly Wellness Tips
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {WeeklyTipsData.map((tip, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 p-5 border hover:bg-blue-100 shadow-md transition duration-300 rounded-md cursor-pointer"
          >
            <h3 className="text-sm text-gray-500 font-semibold">{tip.sNo}</h3>
            <h2 className="text-xl font-bold text-gray-800">{tip.sName}</h2>
            <p className="text-gray-700">{tip.sDescri}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyTips;