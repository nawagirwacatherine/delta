
// import React from 'react';
// import PregnancyData from './PregnancyData'; // Adjust the path if it's located elsewhere

// const Pregnancy = () => {
//   return (
//     <div className="m-10">
//       {/* Section Title */}
//       <h1 className="text-3xl font-bold text-center mb-6 text-[#4ABBB7]">
//         Pregnancy Information
//       </h1>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
//         {PregnancyData.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col gap-3 p-5 border hover:bg-pink-100 shadow-md transition duration-300 rounded-md cursor-pointer"
//           >
//             <h3 className="text-sm text-gray-500 font-semibold">{item.sNo}</h3>
//             <h2 className="text-xl font-bold text-gray-800">{item.sName}</h2>
//             <p className="text-gray-700">{item.sDescri}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pregnancy;


import React from 'react';

const Pregnancy = () => {
  return (
    <div className="text-center">
      <div className="text-2xl text-[#4ABBB7] mb-2">🤰</div>
      <h2 className="text-xl font-bold text-gray-800">Maternal Care</h2>
      <p className="text-sm text-gray-600 mt-2">Learn more</p>
    </div>
  );
};

export default Pregnancy;