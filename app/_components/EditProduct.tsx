'use client'
import React, { useState } from "react";
import { Data } from "../admin/dashboard/page";
import { setterFunction, setterOpen } from "./Product";
import axios from "axios";
import { BiX } from "react-icons/bi";
import { Products, productType } from "../products/page";
import toast from "react-hot-toast";

const EditProduct = ({ isOpen, setIsOpen ,product, setProducts,products }: { isOpen: boolean, setIsOpen:setterOpen ,product: Data, products:Products['products'] ,setProducts: setterFunction }) => {
  
  const [formData, setFormData] = useState({
    id: product?.id,
    title: product?.title || "",
    price: product?.price || 0,
    quantity: product?.quantity || 1,
    total: product?.total,
    discountPercentage: 0,
    discountedTotal:0,
    thumbnail: product?.thumbnail,
  });

  const handleSave = async (id: string) => {
    try {
      const data = await axios.patch(`http://localhost:3000/products/${id}`, formData)
      setProducts(products.map((p: productType['product'])=> p.id === id ? formData : p))
      if (data.status === 200) toast.success('Product edited successfully', {
        style: {
          fontSize: '18px',
          padding: '16px'
        }
      })
    }
    catch (error) {
      console.log(error)
      if(error) toast.error("Failed to edit product")
    }
    finally {
      setIsOpen(false)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement >) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedValue = name === "quantity" || name === "price" ? Number(value) : value;
      const newFormData = { ...prev, [name]: updatedValue };
      return { ...newFormData, total: newFormData.quantity * newFormData.price };
    });
  };

  if (!isOpen) return;

  return (
    <td className="flex items-center justify-center">
      <div className="p-12 absolute top-[0] left-[10%] bg-gray-200 max-w-2xl mx-auto w-full h-[100vh] z-50">
        <span onClick={()=>setIsOpen(false)} className="cursor-pointer top-5 flex items-end justify-end"><BiX className="text-5xl"/></span>
        <div className="modal-content">
          <h2 className="mb-8 text-3xl text-center">Edit Item</h2>
            <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-8 items-center space-x-2">
                <label className="text-2xl col-span-2">Title</label>
                <input type="text" className="col-span-6 py-2 px-3 rounded-sm w-full text-xl outline-none" name="title" value={formData.title} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-8 items-center space-x-2">
                <label className="text-2xl col-span-2">Quantity</label>
                <input type="number" className="col-span-6 py-2 px-3 rounded-sm w-full text-xl outline-none" name="quantity" value={formData.quantity} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-8 items-center space-x-2">
                <label className="text-2xl col-span-2">Price</label>
                <input type="number" className="col-span-6 py-2 px-3 rounded-sm w-full text-xl outline-none" name="price" value={formData.price} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-8 items-center space-x-2">
                <label className="text-2xl col-span-2">Total</label>
                <input type="number" className="col-span-6 py-2 px-3 rounded-sm w-full text-xl outline-none" name="total" value={formData.total} onChange={handleChange} readOnly />
              </div>
              
            </div>
            <div className="flex gap-7 items-center mt-8">
              <button type="submit" className="button-primary" onClick={()=>handleSave(product.id)}>Save</button>
              <button className="button-secondary" onClick={()=>setIsOpen(false)}>Cancel</button>
            </div>
        </div>
      </div>  
    </td>
  );
};

export default EditProduct;
