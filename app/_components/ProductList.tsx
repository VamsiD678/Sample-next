'use client'

import { useEffect, useState } from "react";
import { Data } from "../admin/dashboard/page";
import Product from "./Product";
import axios from "axios";
import toast from "react-hot-toast";


const ProductList = ( { filter } : { filter:string } ) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/products/`)
        const data = await res.json()
        // await new Promise((res)=> setTimeout(res,4000))
        setProducts(data)
      }
      fetchData()
    }
    catch (e) {
      console.log(e)
    }
  }, [])
  
  let displayProducts;
  
  if (filter === 'all') displayProducts = products
  if (filter === '<200') displayProducts = products?.filter((product: Data) => product.price <= 200)
  if (filter === '>200') displayProducts = products?.filter((product: Data) => product.price > 200)
  
  const handleDelete = (id: string) => {
    if (confirm('Are you sure want to delete this product?')) { 
      setProducts(products => products.filter((product: Data) => product.id !== id))
      axios.delete(`http://localhost:3000/products/${id}`)
      toast.success('Product Deleted Successfully')
    }
    else {
      toast.error('Could not delete this product')
    }
  }

  return (
    <div className="flex flex-col px-4">
    {
      displayProducts?.map((product: Data) => <Product product={product} products={products} setProducts={setProducts} onDelete={handleDelete} key={product.id} />    )
    }
    </div>
  )
}

export default ProductList;