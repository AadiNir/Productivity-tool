import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Heading from './Components/Heading'
import Button from './Components/Button';

function App() {
  const [hour,sethour] = useState<number>(0);
  const [minutes,setminutes]=useState<number>(0);
  const [seconds,setseconds]=useState<number>(0);
  const [n,setn]=useState<number>(1000);
  const [running, setRunning] = useState<Boolean>(true);


  useEffect(()=>{
    const interval = setInterval(() => {
      setseconds((seconds + 1) % 60);
    }, n);
    if(seconds==59){
      setminutes(set=>(set+1)%60);
    }
    if(minutes==59){
      sethour(set=>(set+1)%24);
    }


    return () => clearInterval(interval);
  },[running])
  return (
    <>
      <div className="p-3 flex justify-center mt-10 mb-44">
        <Heading label={"Timer program"}/>
      </div>
      <div className='flex flex-col items-center'>
      <div className='p-28 rounded-2xl bg-slate-900  border-4 w-1/3 mb-16'>
        <div className='flex justify-center'>
        <h1 className='font-extrabold sm:text-lg md:text-2xl lg:text-6xl text-gray-300'>{hour.toString().padStart(2,'0')}:{minutes.toString().padStart(2,'0')}:{seconds.toString().padStart(2,'0')}</h1>
        </div>
      </div>
      <div className=''>
      <Button label="Start bro" onClick={()=>setseconds(0)}/>
      <Button label="Stop bro" onClick={()=>{setn(0)}}/>

      </div>
      </div>
    </>
  )
}

export default App
