import React from 'react'



export default function Button ({label = "Submit", rounded = false, shadow = false}) {
    
  return (
    <>
     <button className={`${rounded ? "rounded-lg" : ""} ${shadow ? "shadow-lg" : "" }`} >{label}</button> 
    </>
  )
}

