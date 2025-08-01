
import React from 'react'
import ReportDisease from '../components/MentrualHealth'
import CurrentChallenges from '../components/CurrentChallenges'
import HealthJourneyNav from '../components/HealthJourneyNav'
import NewSymptom from '../components/NewSymptom'
import GiveDetails from '../components/GiveDetails'


const User = () => {
  return (
     <>
          <div className="">
            < HealthJourneyNav/>
    
            <div id="disease">
              <ReportDisease />
            </div>
    
            <div id="symptoms">
              <NewSymptom />
            </div>
    
            <div id="challenges">
              <CurrentChallenges />
            </div>

             <div id="challenges">
              <GiveDetails />
            </div>
    
          </div>
        </>
  )
}

export default User