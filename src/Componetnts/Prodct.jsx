import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from "react-router-dom"
import { Products } from './Products'
export const Prodct = () => {
 
  const [product , setProduct] = useState([])

  const {id , name} = useParams()
//  console.log(id)
 
 useEffect(()=>
 {
  if(id)
  {
    fetch(`http://localhost:8080/products/${id}`)
    .then((res)=> res.json())
    .then((data)=> setProduct(data))
  }

 },[id])
  return (
    <div>Prodct
      {/* <h2>Roynig name {id} {product.id} </h2>
     
       <h2>{product.name}</h2> */}
    
    </div>
  )
}
