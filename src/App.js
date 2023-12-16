
import { useState } from 'react';
import './App.css';
import MainSection from './components/MainSection';
import axios from 'axios'

function App() {
  const[weatherData, setWeatherData] = useState(null)
  const[location, setLocation] = useState(null)
  const[submitted, setSubmitted] = useState(false)

  const fatch = async()=>{
    try{
      let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b745ad7d7633805b9c34751ba6cee760`)
      setWeatherData(response.data)
      setSubmitted(true)
      console.log(response.data)
    }catch(err){
        console.log('Data fatching error')
      }
  }
 
  return (
    <div className='flex flex-col text-white font-custom justify-center items-center bg-[#141316] h-screen'>
      <div className="flex justify-center items-center mb-2 ">
        <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} className='w-[250px] px-4 py-2 text-black outline-none border-none rounded-xl' />
        <button type='submit'onClick={()=>fatch()} className='px-4 py-2 ml-2 bg-blue-500 rounded-xl'>Submit</button>
      </div>
      { submitted ? (
        location ? (
          <MainSection place={location} data ={weatherData}/> 
          ):(
            alert('Enter the location first:')
          )
          ): null }
        
    </div>
  );
}

export default App;
