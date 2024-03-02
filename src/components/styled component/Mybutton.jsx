import React from 'react'
import styled from 'styled-components'
import { DiAndroid } from "react-icons/di";


const Mybutton = () => {
    const Button = styled.button`
    background: "#BF4F74";
    color:  "white" ;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;`

  return (
    <div>
      <h1>hello this is my button design 
      <DiAndroid /></h1>
       <Button>click me</Button>
      <button>this is old button</button>
    </div>
  )
}

export default Mybutton
