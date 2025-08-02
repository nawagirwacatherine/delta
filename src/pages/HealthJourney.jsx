
import React from 'react'
import MentrualHealth from '../components/MentrualHealth'
import Pregnancy from '../components/HealthyMenu/Pregnancy'
import HealthJourneyNav from '../components/HealthJourneyNav'
import StiAndSafepractices from '../components/HealthyMenu/StiAndSafepractices'
import MentalHealth from '../components/HealthyMenu/MentalHealth'


const HealthJourney = () => {
  return (
     <>
          <div className="">
            < HealthJourneyNav/>
    
             <div id="disease">
          <MentrualHealth />
        </div>

          <div id="symptoms">
          <Pregnancy />
        </div>
            
             <div id="challenges">
          <MentalHealth />
        </div>
    
              <div id="details">
          <StiAndSafepractices />
        </div>
    
          </div>
        </>
  )
}

export default HealthJourney 