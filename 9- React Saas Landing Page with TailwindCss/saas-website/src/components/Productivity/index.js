import React from 'react'
import Section from '../Utils/Section'
import Profile from './Profile'

const index = () => {
  return (
    <div className='py-10  mx-auto  space-y-12 flex justify-center sm:justify-around items-center flex-wrap  overflow-hidden'>
            

            {/* Profile Section */}

            <Profile/>


            {/* Boost Your Productivity */}
            <Section/>

    </div>
  )
}

export default index