import React from 'react'
import './Index.css'


const Index = ({key,title,price}) => {
  return (
    <div className='card'>
    <h1>{title}</h1>
    <p className='price'>{price}/-</p>
    <p><button>add to cart</button></p>
    </div>
  )
}

export default Index;
