import React, { useState } from 'react'


const Hookclass = () => {
  let [color, setColor]= useState("red");
  return (
    <>
    <p>my favorite color is {color}!</p>
      <button type='button' onClick={()=>setColor("blue")}>blue</button>
      <button type='button' onClick={()=>setColor("green")}>green</button>
      <button type='button' onClick={()=>setColor("yellow")}>yellow</button>
      <button type='button' onClick={()=>setColor("pink")}>pink</button>
    </>
  )
}


export default Hookclass;
