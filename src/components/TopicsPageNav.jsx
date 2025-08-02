import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiBlood } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GiSextant } from 'react-icons/gi';

const TopicsPageNav = () => {
  return (
    <>
      <div className='flex gap-10 align-middle justify-center p-5'>
        <ul className='flex gap-3.5'>
          <li className='p-6' style={{ borderRadius: '5px', background: '#4ABBB7', color: 'white' }}>
            <AnchorLink href='#disease'>
              <p><GiBlood /> Weekly tips</p>
            </AnchorLink>
          </li>
          <li className='p-6' style={{ borderRadius: '5px', background: '#4ABBB7', color: 'white' }}>
            <AnchorLink offset={50} href='#challenges'>
              <p><RiMentalHealthFill /> Step-by-step visuals or illustrations</p>
            </AnchorLink>
          </li>
          <li className='p-6' style={{ borderRadius: '5px', background: '#4ABBB7', color: 'white' }}>
            <AnchorLink offset={50} href='#details'>
              <p><GiSextant /> "Ask a Question" button, links to anonymous Chatbot</p>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default TopicsPageNav