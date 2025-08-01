
import React from 'react'
import menstraulData from './menstraualData'


const MentrualHealth= () => {
   return (
    <div  className='services'>
      <div  className='services-title'>
        <h1  className='p-10' >Mestrual Health</h1>
      
      </div>
      <div className=" grid grid-cols-2 gap-30  align-middle justify-center p-25 ">
        {menstraulData.map((menstrual,index)=>{
          return <div  key={index} className=" flex flex-col justify-center gap-5 p-5  border-3 hover:bg-pink-500" style={{borderRadius:'5px', transition: '0.4s',
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


