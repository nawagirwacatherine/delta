import React from 'react';
import StiAndSafepracticesData from './StiAndSafepracticesData'; // Adjust path as needed

const StiAndSafepractices = () => {
  return (
    <div className="m-10">
      {/* Section Header */}
      <h1 className="text-3xl font-bold text-center mb-6 text-[#4ABBB7]">
        STIs & Safe Practices
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {StiAndSafepracticesData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 p-5 border hover:bg-red-100 shadow-md transition duration-300 rounded-md cursor-pointer"
          >
            <h3 className="text-sm text-gray-500 font-semibold">{item.sNo}</h3>
            <h2 className="text-xl font-bold text-gray-800">{item.sName}</h2>
            <p className="text-gray-700">{item.sDescri}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StiAndSafepractices;