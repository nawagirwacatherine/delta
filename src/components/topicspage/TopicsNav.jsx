
// import React from 'react'
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { GiBlood } from 'react-icons/gi';
// import { GiWomanElfFace } from 'react-icons/gi';
// import { RiMentalHealthFill } from 'react-icons/ri';
// import { GiSextant } from 'react-icons/gi';



// const TopicsNav = () => {
    
//   return (
//     <>
//  <div className=' flex gap-10 align-middle justify-center p-5 '>
  
       


//         <ul className='flex gap-3.5'>
//                   <li className='  p-6' style={{ borderRadius:'5px', background:'#4ABBB7', color:'white'}}><AnchorLink className=''  href='#weekly'><p> <GiBlood className=' '/>WeeklyTips</p></AnchorLink></li>
//                           <li className='p-6 '  style={{ borderRadius:'5px',background:'#4ABBB7' , color:'white'}}><AnchorLink className='' offset={50} href='#step'><p> <GiWomanElfFace/>Step-by-step visuals or illustrations</p></AnchorLink></li>
//                                   <li className=' p-6 '  style={{ borderRadius:'5px',background:'#4ABBB7' , color:'white'}}><AnchorLink className='' offset={50} href='#inquire'><p> <RiMentalHealthFill/>Ask a Question button,links to anonymous Chartbot</p></AnchorLink></li>
//                                           <li className='p-6'  style={{ borderRadius:'5px',background:'#4ABBB7' }}><AnchorLink className='' offset={50} href='#answer'><p> <GiSextant/>STIs & Safe Practices</p></AnchorLink></li>
//         </ul>

//     </div>

//     </>
//   )
// }

// export default TopicsNav

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