import React from 'react'
import "./Contactform.css"

const Contactform = () => {
  return (
    <>
    <div className='form-container'>
    <h1 className='heading'>Contact Us</h1>
    <input type="text" placeholder='First Name'/><br />
    <input type="text" placeholder='Second Name'/><br />
    <input type="email" placeholder='E-Mail' /><br />
    <input type="number" placeholder='Contact Number' /><br />
    <textarea name="" placeholder='Message' className='msg'></textarea><br />
    <button type="submit" className='submit-btn'>Submit</button>
    </div>      
    </>
  )
}

export default Contactform
