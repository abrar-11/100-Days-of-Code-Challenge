import React from 'react'
import Section from '../Utils/Section'
import Profile from './Profile'

const index = () => {
  return (
    <div className='py-10 lg:w-9/12 mx-auto space-x-5 space-y-2 flex justify-center sm:justify-around items-center flex-wrap'>
            

            {/* Profile Section */}

            <Profile/>


            {/* Boost Your Productivity */}
            <Section/>

    </div>
  )
}

export default index