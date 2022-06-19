import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import {Link} from "react-router-dom"
export const Products = () => {
  const [products , setProducts] = useState([])
  
  useEffect(()=>
  {const getData = async ()=>
    {
        let res = await fetch("http://localhost:8080/products")
        let data = await res.json();
        setProducts(data)
        console.log(data)
    }
    getData()
  },[])

    return (
      <div >
            <div  style={{display:'grid', border:'1px solid black', width:'80%', gridTemplateColumns:"repeat(4,1fr)",padding:'30px', gap:'25px'}} >
                {
                    products.map((elem)=>
                    (
                        <div key={elem.id} style={{border:'1px solid blue',paddingLeft:'20px'}}>
                        
                        <h3> <Link to={`/products/${elem.id}/${elem.name}`}> {elem.name}</Link> </h3>   
                      
                        <h3>{elem.price}</h3>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}
