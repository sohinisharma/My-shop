import React from 'react'
import './Home.css'
import homeImage from '../../assets/img/home-img.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <img src={homeImage} alt="home-img" className='home-img'/>
    </div>   
  )
}

export default Home
