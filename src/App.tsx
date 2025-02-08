import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isRuning, setIsRuning] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isRuning) {
      const interval = setInterval(() => {
        setCount((count) => count + 10);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isRuning]);

  function fTime(num : number){
    return (num < 10 ? '0' : '') + num;
  }

  function getTime(num: number) {
    const hours = Math.floor(num / 1000 / 60 / 60);
    const minutes = Math.floor(num / 1000 / 60) % 60;
    const seconds = Math.floor(num / 1000) % 60;
    const milliseconds = Math.floor(num / 10) % 100;

    return `${fTime(hours)}:${fTime(minutes)}:${fTime(seconds)}:${fTime(milliseconds)}`

  }




  return (
    <>
      <h1>{getTime(count)}</h1>
      <input type="button" value="start" onClick={() => setIsRuning(true)} />
      <input type="button" value="stop" onClick={() => setIsRuning(false)} />
    </>
  )
}

export default App
