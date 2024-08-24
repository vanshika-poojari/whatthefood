import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import Features from './components/Features'
import Services from './components/Services'
import Process from './components/Process'
import Wtf from './components/Wtf'
import Nav from './components/Nav'
import What from './components/What'

function App() {

  return (
    <>
    <div>

   <Nav /> 

   <Routes>
    <Route path = "/" element = {<Home />}/>
    <Route path = "/aboutus" element = {<About />}/>
    <Route path = "/feature" element = {<Features />}/>
    <Route path = "/services" element = {<Services />}/>
    <Route path = "/process" element = {<Process />}/>
    <Route path = "/wtf" element = {<Wtf />}/>
    <Route path = "/what" element = {<What />}/>


   </Routes>

    </div> 
    </>

  )
}

export default App
