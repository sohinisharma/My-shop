import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Contactform from './components/Contactform/Contactform'
import About from './components/About/About'



const App = () => {
  return (
    <>

<BrowserRouter>
    <Navbar/>
    <Routes>
    
        <Route path="/" element={<Home/>} />
        <Route path="/cards" element={<Cards/>} />
        <Route path="/contactform" element={<Contactform/>} />
        <Route path="/about" element={<About/>} />
                
    </Routes>
    <Footer/>  
  </BrowserRouter> 


     {/* <Cards/> */}
    {/* <Formcreate/> */}
     {/* <Form/> */}
      {/* <Navbar/> */} 
    </>
  )
}

export default App;











// function App() {
//   let data=[
//     {id: 1, "title":"jeans", "price":1000},
//     {id: 2, "title":"top", "price":500},
//     {id: 3, "title":"shirt", "price":800},
//     {id: 4, "title":"shoes", "price":1100},
//     {id: 5, "title":"jacket", "price":2000}
//   ]

//   return (
//     <>
//    {data.map((data)=>{
//     return(
//       <Index key={data.id} title={data.title} price={data.price}/>
//     )
//    })}
//     </>
//   )
// }

