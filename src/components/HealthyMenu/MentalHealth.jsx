
import React from 'react';
import { GiBrain } from 'react-icons/gi';
import mentalHealthData from './mentalHealthData';

const MentalHealth = () => {
  return (
    <div className="m-10">
      {/* Heading */}
      <h1 className="ml-10 text-3xl font-bold flex items-center gap-2">
        <GiBrain style={{ color: '#4ABBB7' }} />
        Mental Health
      </h1>

      {/* Intro Paragraph */}
      <p className="text-md text-gray-700 px-4 py-4 max-w-3xl">
        Mental health is a vital component of overall well-being. It affects how we think, feel, and
        act, and also influences how we handle stress, relate to others, and make choices. This
        section provides insight into common mental health topics and promotes awareness and
        support.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {mentalHealthData.map((topic, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 p-5 border hover:bg-green-100 shadow-md transition duration-300 rounded-md cursor-pointer"
          >
            <h3 className="text-sm text-gray-500 font-semibold">{topic.sNo}</h3>
            <h2 className="text-xl font-bold text-gray-800">{topic.sName}</h2>
            <p className="text-gray-700">{topic.sDescri}</p>
            {/* Removed <img> as data no longer includes image */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentalHealth;