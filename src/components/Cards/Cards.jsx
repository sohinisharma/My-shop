import React from 'react'
import './Cards.css'


const Shop = ({ key, title, price, image, productname, trend }) => {
  return (

    <div className='card'>
      <span className='trend'>{trend}</span>
      <img src={image} alt={productname} className='setimg'/>
      <h1 className='productname'>{title}</h1>
      <p className='price'>Price {price}/-</p>
      <p><button className='btn'>add to cart</button></p>
    </div>
  )
}

const Cards = () => {
  let data = [{ id: 1, "title": "jeans", "price": 1000, img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "jeans-img", "trend":"Trending"},

  { id: 2, "title": "top", "price": 500, img: "https://plus.unsplash.com/premium_photo-1690349404248-3ddd9be40eb1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "top-img", "trend":"Trending" },

  { id: 3, "title": "shirt", "price": 800, img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "shirt-img" },

  { id: 4, "title": "shoes", "price": 1100, img: "https://images.unsplash.com/photo-1704951108136-0153f403c5cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "shoes-img",  "trend":"Trending" },

  { id: 5, "title": "jacket", "price": 2000, img: "https://images.unsplash.com/photo-1578948856697-db91d246b7b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGphY2tldHN8ZW58MHx8MHx8fDA%3D", "alt": "jacket-img",  "trend":"Trending" },

  { id: 6, "title": "pant", "price": 900, img: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "pant-img" },

  { id: 7, "title": "kurta", "price": 1200, img: "https://plus.unsplash.com/premium_photo-1691030256214-dc57034ec935?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "kurta-img",  "trend":"Trending" },

  { id: 8, "title": "pajama", "price": 700, img: "https://images.unsplash.com/photo-1628250520426-14966d958157?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "pajama-img",  "trend":"Trending" },

  { id: 9, "title": "t-shirt", "price": 600, img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "t-shirt-img", "trend":"Trending" },

  { id: 10, "title": "shocks", "price": 100, img: "https://images.unsplash.com/photo-1619575633397-fb4b20cc2465?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "shocks-img" },

  { id: 11, "title": "hanky", "price": 50, img: "https://plus.unsplash.com/premium_photo-1661598981451-86ad5855b1b7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "hanky-img" },

  { id: 12, "title": "belt", "price": 250, img: "https://images.unsplash.com/photo-1627909190136-f592b7557b71?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt": "belt-img", "trend":"Trending" }]
  return (
    <>
      <div className='container'>
        {data.map((data) => {
          return (<Shop key={data.id} image={data.img} productname={data.alt} title={data.title} price={data.price} trend={data.trend} />
          )
        })}
      </div>
    </>
  )
}

export default Cards
