
import { useState } from "react";
import { Data, handleFunction } from "../admin/dashboard/page";
import EditProduct from "./EditProduct";
import { Products } from "../products/page";


export type setterFunction = (products: Products['products']) => Products['products']
export type setterOpen = (boo: boolean) => void

const Product = ({ product, products ,onDelete, setProducts }: { product: Data, products: Products['products'] ,setProducts:setterFunction ,onDelete: handleFunction }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="grid grid-cols-11 items-center place-items-center justify-items-center border-b py-5 px-4 text-lg hover:bg-indigo-50" key={product.id}>
        <p className="col-span-3 justify-self-start">{product.title}</p>
        <p className="col-span-2">{product.quantity}</p>
        <p className="col-span-1">{product.price}</p>
        <p className="col-span-2">{product.total}</p>
        <div className="flex gap-4 col-span-3 place-self-center">
          <button onClick={()=> setIsOpen(true)} className="bg-indigo-700 hover:bg-indigo-800 text-white py-1 px-4 rounded-lg cursor-pointer">Edit</button>
          <button onClick={() => onDelete(product.id)} className="bg-indigo-700 hover:bg-indigo-800 text-white py-1 px-4 rounded-lg cursor-pointer">Delete</button>
        </div>
      </div>
      {  isOpen && 
        <>
          <EditProduct product={product} products={products} setProducts={setProducts} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      }
    </>
  )
}

export default Product;