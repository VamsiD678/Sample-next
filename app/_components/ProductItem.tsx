import Image from "next/image";
import { productType } from "../products/page";
import Link from "next/link";


const ProductItem = ({ product }: productType) => {
  
  const { id, title, thumbnail } = product;
  
  console.log(product);
  

  return (
    <Link href={`products/${id}`}>
      <div className="max-w-lg w-72 sm:w-64 md:w-72 h-full bg-gray-953 overflow-hidden
        mb-2 flex flex-col justify-between shadow-md rounded-md bg-white">
        <div>
          <div className="relative aspect-square">
            <Image 
              src={thumbnail} 
              className="object-cover rounded-t hover:scale-105 overflow-hidden transition-all duration-300"
              fill 
              quality={80}
              placeholder="blur"
              blurDataURL="/Loader.jpg"
              alt={title}
            />
          </div>
          <div className="px-4 pt-3">
            <p className="text-lg leading-[26px] tracking-[0.01em] mb-1 text-black font-medium uppercase line-clamp-2">{product.title}</p>
            {/* <p className="tex-gray-700 text-lg tracking-[0.01em] truncate" >{product.}</p> */}
          </div>
          <div className="px-4 py-2">
            <span className="inline-block text-2xl text-gray-952 mb-2">${product.price}</span>
          </div>
        </div>
      </div>
    </Link>
  )
} 

export default ProductItem;