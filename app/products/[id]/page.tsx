import Image from "next/image";
import Link from "next/link";
import { productType } from "../page";
import { notFound } from "next/navigation";


export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> })=> {
  
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/products/${id}`)
  const { title } = await res.json()
  console.log(title)

  return {
    title: title
  }
}

// export const generateStaticParams = async () => {

//   const res = await fetch('http://localhost:3000/products')
//   const products = await res.json()
//   console.log(products)
//   const ids = products.map((product: productType['product']) => { String(product.id) })
//   console.log(ids)

//   return ids;
// }


const Product = async ({ params }: { params: Promise<{ id: string }> }) => {

  const { id } = await params;

  async function getProduct() : Promise<productType['product']> {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`)
      const product = await res.json()
      return product
    }
    catch (error) {
      console.error(error);
      notFound()
    }

  }

  const product = await getProduct()

  // console.log(product);
  
  return (
    <div className="px-9 sm:px-16 py-9 sm:py-12 bg-gradient-to-r from-indigo-200 to-green-200 min-h-screen">
      <Link href='/products' className="hover:text-indigo-900 block mb-4 lg:mb-0">
        <div className="flex items-center gap-1 text-xl"><span>&larr;</span> <p>Back to Products</p></div>
      </Link>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white px-4 flex items-center gap-5 sm:flex-row flex-col py-9 sm:py-4 shadow-md rounded-md mb-6 lg:mb-8">
          <div className="relative aspect-square max-w-lg sm:w-72 md:w-96 w-64 h-full hover:scale-[1.07] duration-300">
            <Image
              src={product.thumbnail}
              className='object-cover rounded-t'
              alt={product.title}
              quality={80}
              placeholder="blur"
              blurDataURL='/loaderImage.svg'
              fill
              />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-medium mb-5">{product.title}</h2>
            <p className="text-2xl font-medium">$ {product.price}</p>
            <button className="button-primary capitalize mt-8">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;