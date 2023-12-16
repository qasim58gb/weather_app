import React from 'react'

const MiddleSection = ({lat,lon,sunrise,sunset}) => {
  const timeFormat = (timeStamp) => {
    let date = new Date(timeStamp * 1000);
    const options = { hour: 'numeric', minute: 'numeric' };
    return date.toLocaleTimeString([], options);
}
  return (
    <div className='bg-white text-black w-[380px] mt-[20px] rounded-xl flex flex-col justify-center items-center'>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <ul className='mr-[60px]'>
            <li className='text-[40px]'>{lat}</li>
            <li className='text-[15px] text-center mt-[-15px]'>Latitude</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
        <ul>
            <li className='text-[40px] '>{lon}</li>
            <li className='text-[15px] text-center mt-[-15px]'>longitude</li>
          </ul>
        </div>

      </div>
      <div className="flex justify-center items-center mb-1">
        <div className="flex justify-center items-center">
          <ul className='mr-[60px]'>
            <li className='text-[40px] '>{timeFormat(sunrise)}</li>
            <li className='text-[15px] text-center mt-[-15px]'>Sunrise</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
        <ul>
            <li className='text-[40px] '>{timeFormat(sunset)}</li>
            <li className='text-[15px] text-center mt-[-15px]'>Sunset</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default MiddleSection
