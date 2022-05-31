
import React from 'react'

function About(props) {

  return (
    <div className="card" >
  <div className="card-header" style={{backgroundColor: props.mode==='light'? '#0d6efd':'#28282B',color: props.mode==='light'? 'white':'white'}}>
    About Us
  </div>
  <div className="card-body" style={{backgroundColor: props.mode==='light'? '#add8e6':'#A4A690',color: props.mode==='light'? 'white':'white'}} >
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
  </div>
</div>
  )
}

export default About
