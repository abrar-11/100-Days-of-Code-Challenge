import React from 'react'
import barGraph from '../../assets/barGraph.svg'
const BarGraphSection = () => {
  return (
    <div className="shadow p-5 rounded bg-gray-50 order-first lg:order-last mb-16">

            <div className="flex justify-between  p-3 rounded shadow mb-6 hover:scale-105 transition-all hover:cursor-pointer" >
                    <div className="">
                        <p className="text-sm text-gray-500">Visitors</p>
                        <p className="text-md ">567,231</p>
                    </div>
                    <div className="">
                        <p className="text-sm text-gray-500">week</p>
                        <p className="text-md text-emerald-600">7,228 New</p>
                    </div>
            </div>

            <div className="">
                <img src={barGraph} alt="Visitors Graph" />
            </div>
          

    </div>
  )
}

export default BarGraphSection