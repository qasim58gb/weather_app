import React from 'react'

const LowerSection = ({pressure,humidity,wind,cloud}) => {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <div className="border-2 border-white my-3 rounded-xl flex w-[380px] justify-center items-center">
        <p className='text-[30px] mt-[-5px]'>{cloud}</p>
      </div>
      <div className=" flex w-[380px] justify-center items-center bg-white rounded-xl text-black pb-1 ">
        <div className="flex flex-col justify-center items-center">
          <ul>
            <li className='text-[30px]'>{pressure}</li>
            <li className='text-[15px] text-center mt-[-15px]'>Perssure</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ul>
            <li className='text-[30px] mx-[30px]'>{humidity}%</li>
            <li className='text-[15px] text-center mt-[-15px]'>Humidity</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ul>
            <li className='text-[30px]'>{wind}km/h</li>
            <li className='text-[15px] text-center mt-[-15px]'>Wind speed</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LowerSection
