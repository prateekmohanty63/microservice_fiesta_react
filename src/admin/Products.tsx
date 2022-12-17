import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { Product } from "../interfaces/product";

const Products=()=>{

    const [products,setProducts]= useState([])
 
  useEffect(()=>{
     const getProducts=async()=>{
          const response=await fetch('http://localhost:8000/api/products')

          const data=await response.json();

          console.log(data)

          setProducts(data)
     };

     getProducts();
  },[])

   return(
       <Wrapper>
       <div>
            <h2>Section title</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Likes</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {products.map(
                        (p: Product) => {
                            return (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td><img src={p.image} height="180"/></td>
                                    <td>{p.title}</td>
                                    <td>{p.likes}</td>
                                 <td>
                                 <div className="btn-group mr-2">Delete</div>     
                                </td>
                                </tr>
                            )
                        })}
                   

                  </tbody>
                </table>
              </div>
       </div>
       </Wrapper>
   )
}

export default Products