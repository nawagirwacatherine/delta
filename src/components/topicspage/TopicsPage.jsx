
import React from 'react'
import WeeklyTips from './WeeklyTips'
import Steps from './Steps'
 import Inquire from './Inquire'
 import QandAnswer from './QandAnswer'

const TopicsPage = () => {
  return (
     <>
          <div className="">
            
    
             <div id="weekly">
               <WeeklyTips/>
          
        </div>

          <div id="step">
            <Steps  />
          
        </div>
            
             <div id="inquire">
              <Inquire />
        </div>
    
              <div id="answer">
          <QandAnswer />
        </div>
    
          </div>
        </>
  )
}

export default TopicsPage  