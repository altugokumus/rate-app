import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Raiting from './Components/Raiting';
import ThankYou from './Components/ThankYou';

function App() {

  const [raiting, setRaiting] = useState("");

  function getRate(e){
    setRaiting(e.target.innerText);

  }

  return (
  <>
    <Routes>
      <Route exact path="/" element={<Raiting click={getRate}/>} />
      <Route path="/thankyou" element={<ThankYou raiting={raiting} />} />     
    </Routes>
  </>)
  ;
}

export default App;
