

import React from 'react';

const TopicsPageNav = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
      <div className="text-[#4ABBB7] font-bold text-xl">HerCompass</div>
      <div className="space-x-6">
        <a href="/health-tools" className="text-gray-600 hover:text-[#4ABBB7]">Health Tools</a>
        <a href="/education-hub" className="text-gray-600 hover:text-[#4ABBB7]">Education Hub</a>
        <a href="/get-started" className="bg-[#4ABBB7] text-white px-4 py-2 rounded-md hover:bg-[#3aa9a4]">Get Started</a>
      </div>
    </nav>
  );
};

export default TopicsPageNav;