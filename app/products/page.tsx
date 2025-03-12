import { Suspense } from "react";
import ProductItem from "../_components/ProductItem";
import Loading from "../_components/Loading";


// interface product{
//   id: string
//   title: string
//   price: number
//   quantity: number
//   total: number
//   discountPercentage: number
//   discountedTotal: number
// }

export interface productType {
  product: {
    id: string
    title: string
    price: number
    quantity: number
    total: number
    discountPercentage: number
    discountedTotal: number
    thumbnail: string
    // thumbnail: Array<product>
  }
}

export interface Products {
  products: Array<productType['product']>
}

export const metadata = {
  title:'Our Products'
}

const Products = async () => {

  const res = await fetch('http://localhost:3000/products')
  // await new Promise((res) => setTimeout(res, 1000));
  const products = await res.json()
  console.log(products);
  
  return (
    <section className="py-12 pb-16 px-9 bg-gradient-to-r from-indigo-200 to-green-200 min-h-screen">
      <main className="max-w-7xl w-full mx-auto">
        <div>
          <Suspense fallback={<Loading/>}>
            <div className="flex flex-col items-center">
              <h2 className="lg:text-4xl text-3xl text-indigo-700 font-medium mb-10 Capitalize tracking-normal">Our Products</h2>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-items-center content-center gap-x-4 gap-y-7">
              {
                products.map((item: productType["product"]) => <ProductItem product={item} key={item.id} />)
              }
            </div>
          </Suspense>
        </div>
      </main>
    </section>
  )
}

export default Products;