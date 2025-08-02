import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiBlood, GiWomanElfFace, GiSextant } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';

const ClinicFinderNav = () => {
  return (
    <>
      <div className='flex gap-10 align-middle justify-center p-5'>
        <ul className='flex gap-3.5'>
          <li className='p-6' style={{ borderRadius: '5px', background: '#4ABBB7', color: 'white' }}>
            <AnchorLink href='#disease'>
              <p><GiBlood /> GPS Map</p>
            </AnchorLink>
          </li>
          <li className='p-6' style={{ borderRadius: '5px', background: '#4ABBB7', color: 'white' }}>
            <AnchorLink offset={50} href='#symptoms'>
              <p><GiWomanElfFace /> Contact Buttons</p>
            </AnchorLink>
          </li>
          <li className='p-6' style={{ borderRadius: '5px', background: '#4ABBB7', color: 'white' }}>
            <AnchorLink offset={50} href='#challenges'>
              <p><RiMentalHealthFill /> Emergency Info</p>
            </AnchorLink>
          </li>
          <li className='p-6' style={{ borderRadius: '5px', background: '#4ABBB7', color: 'white' }}>
            <AnchorLink offset={50} href='#details'>
              <p><GiSextant /> Suggestions (if any)</p>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ClinicFinderNav

