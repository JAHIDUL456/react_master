import React from 'react'

const Hero = (props) => {
    
  return (
    <div>
       <h1>This page is for testing</h1>
       <button className='p-2 bg-slate-500' onClick={props.click_mar}>click me</button>
    </div>
  )
}

export default Hero