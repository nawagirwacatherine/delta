
import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiBlood } from 'react-icons/gi';
import { GiWomanElfFace } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GiSextant } from 'react-icons/gi';


const ClinicFinderNav = () => {
    
  return (
    <>
 <div className=' flex gap-10 align-middle justify-center p-5 '>
  
       


        <ul className='flex gap-3.5'>
                  <li className=' p-6' style={{ borderRadius:'50%'}}><AnchorLink className=''  href='#disease'><p> <GiBlood className=' '/>GPSmap  </p></AnchorLink></li>
                          <li className='p-6 '  style={{ borderRadius:'50%'}}><AnchorLink className='' offset={50} href='#symptoms'><p> <GiWomanElfFace/>Contact buttons</p></AnchorLink></li>
                                  <li className=' p-6 '  style={{ borderRadius:'50%'}}><AnchorLink className='' offset={50} href='#challenges'><p> <RiMentalHealthFill/>Emergency Info</p></AnchorLink></li>
                                          <li className='p-6'  style={{ borderRadius:'50%'}}><AnchorLink className='' offset={50} href='#details'><p> <GiSextant/> Suggestion If any</p></AnchorLink></li>
        </ul>

    </div>

    </>
  )
}

export default ClinicFinderNav

