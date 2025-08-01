import React from 'react'
import ClinicFinderNav from '../components/ClinicFinderNav'
import Contacts from '../components/clinicFinder/Contacts'
import EmergencyInfo from '../components/clinicFinder/EmergencyInfo'
import GpsMap from '../components/clinicFinder/GpsMap'
import Suggestions from '../components/clinicFinder/Suggestions'

const ClinicFinder = () => {
  return (
    <div>
        <ClinicFinderNav/>

        <div id='#contacts'>
            <Contacts/>
            </div>
         
         <div id='#emergency'>
            <EmergencyInfo/>
            </div>
         
         <div id='#gpsmap'>
             <GpsMap/>
             </div>
           
           <div id='suggestions'> 
            <Suggestions/>
            </div>
           
    </div>
  )
}

export default ClinicFinder


