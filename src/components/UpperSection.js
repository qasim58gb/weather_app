import React from 'react'

const UpperSection = ({place,temp}) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  return (
    <div className='flex flex-col justify-start items-center text-white '>
      <div className='text-[50px]'>
      {place}
      </div>
      <div className='text-[150px] mt-[-70px] mb-[-52px]'>
      {temp}&deg;C
      </div>
      <div className='text-[20px]'>
        {year}-{month}-{day}
      </div>
    </div>
  )
}

export default UpperSection
