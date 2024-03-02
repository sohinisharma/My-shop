import React, { useState } from 'react'

const Form = () => {
    let [name,setName] = useState("");

    function handleform(event){
        event.preventDefault();
        console.log(name);
        }

  return (
    <>

    <form onSubmit={handleform}>
        <label htmlFor="">Name</label>
        <input type="text" name='username' onChange={(event)=>setName(event.target.value)}/>
        <button>Submit</button>
    </form>
      
    </>
  )
}

export default Form
