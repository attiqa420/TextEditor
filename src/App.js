import React, { useState }  from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom"
import NavBar from './components/NavBar.js'
import InputArea from './components/InputArea.js'
import './App.css'
import About from './components/About.js'
import ContactUs from './components/ContactUs.js'

function App() {
  
 const [mode, setMode] = useState('light');
 const [btn, setBtn] = useState('Enable Dark Mode');
 const [btnColor, setBtnColor] = useState('primary');

 const toggleMode = ()=> {

if (mode ==='light'){
  setMode('dark')
  setBtn('Disable Dark Mode')
  setBtnColor('dark')
  document.body.style.backgroundColor = '#61634f';
}
else {
  setMode('light')
  setBtn('Enable Dark Mode')
  setBtnColor('primary')
  document.body.style.backgroundColor = 'lightblue';
}
 }

  return (

    <>
    <Router>
    
<NavBar  mode={mode} toggleMode={toggleMode} btn={btn} />

   
    <div className='container my-3'>
    <Switch>
    <Route exact path="/">
          <InputArea heading='Welcome to Our Text Editor Tool'  mode={mode}  btnColor={btnColor} />
          </Route>
          <Route exact path="/about" >
            <About  mode={mode} />
          </Route>
          <Route exact path="/contactus">
            <ContactUs mode={mode} />
          </Route>
          </Switch>
        </div>
       
    </Router>
    </>
  )
}

export default App
