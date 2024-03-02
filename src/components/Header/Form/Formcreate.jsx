import React, { useState } from 'react'

const Formcreate = () => {
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    
    function Handleinputs(event){
        event.preventDefault();
        console.log(name,email);        
    }

  return (
    <>
    <form action="" onSubmit={Handleinputs}>
    <label htmlFor="">Username</label>
      <input type="text" name='username'  onChange={(event)=>setName(event.target.value)}/><br />
      <label htmlFor="">Email</label>
      <input type="email" name='email'  onChange={(event)=>setEmail(event.target.value)}/><br />
      <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Formcreate
