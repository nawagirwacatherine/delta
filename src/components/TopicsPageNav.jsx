
import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiBlood } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GiSextant } from 'react-icons/gi';


const TopicsPageNav = () => {
    
  return (
    <>
 <div className=' flex gap-10 align-middle justify-center p-5 ' >

        <ul className='flex gap-3.5'>
                  <li className=' p-6' style={{ borderRadius:'50%'}}><AnchorLink className=''  href='#disease'><p> <GiBlood className=' '/>Weekly tips</p></AnchorLink></li>
                                  <li className=' p-6 '  style={{ borderRadius:'50%'}}><AnchorLink className='' offset={50} href='#challenges'><p> <RiMentalHealthFill/>Step-by-step visuals or illustrations</p></AnchorLink></li>
                                          <li className='p-6'  style={{ borderRadius:'50%'}}><AnchorLink className='' offset={50} href='#details'><p> <GiSextant/>"Ask a Question" button,links to anonymous Chatbot</p></AnchorLink></li>
        </ul>
         </div>

   

    </>
  )
}

export default TopicsPageNav