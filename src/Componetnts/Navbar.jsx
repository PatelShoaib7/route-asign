import React from 'react'
import {Link , useNavigate} from "react-router-dom"

export const Navbar = () => {
 const navigate = useNavigate()
 
 const open_1 =(id)=>
 {
       if(id === 1)
       {
        navigate("/products")
       }
 }
 const open_2 =(id)=>
 {
    if(id === 2)
    {
     navigate("products/:id/:name")
    }
 }
 
 
  return (
    <div style={{border:'1px solid black', fontSize:'20px', width:'80%'}}>
       
    <a  style={{marginLeft:'20px'}} href='/'>Home</a>
    <a  style={{marginLeft:'20px'}}href='/about'>About</a> 
    <a  style={{marginLeft:'20px'}} href='/products'>Products</a>
    <a  style={{marginLeft:'20px'}} href='/sign'>Sign_Up</a> 
    {/* <a    style={{marginLeft:'20px'}} href='/Prodct'>Prodct</a> */}
 
   <button onClick={()=>open_1(1)}>Go to Products </button>

   <button  onClick={()=>open_2(2)}>Go to Prodct </button>
    
    </div>
  )
}
