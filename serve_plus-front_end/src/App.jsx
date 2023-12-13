import './App.css'
import  {Routes, Route} from 'react-routesRouter-dom'
import Hero from './components/Hero/Hero';
import { Routes, Route } from 'react-router-dom';
function App() { 

  return (
    <>
      <Routes>
         <Route exact path="/" element={<Hero/>} /> 
      </Routes>
    </>
  )
}

export default App
