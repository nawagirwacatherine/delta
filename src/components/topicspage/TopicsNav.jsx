
import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiBlood } from 'react-icons/gi';
import { GiWomanElfFace } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GiSextant } from 'react-icons/gi';



const TopicsNav = () => {
    
  return (
    <>
 <div className=' flex gap-10 align-middle justify-center p-5 '>
  
       


        <ul className='flex gap-3.5'>
                  <li className='  p-6' style={{ borderRadius:'5px', background:'#4ABBB7', color:'white'}}><AnchorLink className=''  href='#weekly'><p> <GiBlood className=' '/>WeeklyTips</p></AnchorLink></li>
                          <li className='p-6 '  style={{ borderRadius:'5px',background:'#4ABBB7' , color:'white'}}><AnchorLink className='' offset={50} href='#step'><p> <GiWomanElfFace/>Step-by-step visuals or illustrations</p></AnchorLink></li>
                                  <li className=' p-6 '  style={{ borderRadius:'5px',background:'#4ABBB7' , color:'white'}}><AnchorLink className='' offset={50} href='#inquire'><p> <RiMentalHealthFill/>Ask a Question button,links to anonymous Chartbot</p></AnchorLink></li>
                                          <li className='p-6'  style={{ borderRadius:'5px',background:'#4ABBB7' }}><AnchorLink className='' offset={50} href='#answer'><p> <GiSextant/>STIs & Safe Practices</p></AnchorLink></li>
        </ul>

    </div>

    </>
  )
}

export default TopicsNav