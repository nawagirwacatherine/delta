
import React from 'react'
import menstraulData from './menstraualData'
import { GiBlood } from 'react-icons/gi';


const MentrualHealth= () => {
   return (
    <div  className='m-15'>
       <h1  className='ml-20 flex gap-1.5' > <GiBlood style={{ color:'#4ABBB7'}}/>Mestrual Health</h1>
       <p className="text-lg text-gray-700 px-4 py-2">
    Menstrual health is a vital aspect of overall well-being for individuals who menstruate. Understanding the menstrual cycle, maintaining hygiene, and addressing concerns openly are crucial for promoting both physical and mental health. This section aims to provide helpful information and resources to support menstrual wellness with clarity, compassion, and care.
  </p>
      <div className=" grid grid-cols-2 gap-30  align-middle justify-center p-25 ">
        {menstraulData.map((menstrual,index)=>{
          return <div  key={index} className=" flex flex-col justify-center gap-5 p-5  border-3 hover:bg-green-200" style={{borderRadius:'5px', transition: '0.4s',
    cursor: 'pointer',
    transform: 'scale(1.05)',
   
    
    }}>
            <h3>{menstrual.sNo}</h3>
            <h2>{menstrual.sName}</h2>
            <p>{menstrual.sDescri}</p>
          <img src= {menstrual.image} alt="image" className='w-15 h-15' /> 
          
          </div>
        })}
      </div>
    </div>
  )
}

export default MentrualHealth


