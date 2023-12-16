import React from 'react'
import UpperSection from './UpperSection.js'
import MiddleSection from './MiddleSection.js'
import LowerSection from './LowerSection.js'
const MainSection = ({place,data}) => {
  return (
    <div className='w-[450px] h-[550px] bg-img rounded-2xl flex flex-col justify-start items-center'>
      <UpperSection place={place} temp={Math.round(data?.main?.temp-273)}/>
      <MiddleSection lat={data?.coord?.lat} lon={data?.coord?.lon} 
      sunrise={data?.sys?.sunrise} sunset={data?.sys?.sunset} />
      <LowerSection  pressure={data?.main?.pressure} humidity={data?.main?.humidity}
       wind={data?.wind?.speed} cloud={data?.weather[0]?.description}/>
    </div>
  )
}

export default MainSection
