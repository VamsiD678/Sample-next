import Filter from "@/app/_components/Filter"
import Loading from "@/app/_components/Loading"
import ProductList from "@/app/_components/ProductList"
import { Suspense } from "react"

export interface Data {
  title: string
  id: string
  price: number
  thumbnail:string
  quantity: number
  total: number
}

export interface SearchParams {
  price:string
}

export type handleFunction = (id:string) => void

const Dashboard = async ({ searchParams }: { searchParams: SearchParams }) => {

  const searchParam = await searchParams;
  const filter = searchParam?.price ?? 'all'
  console.log(filter)

  return (
    <section className='py-9 pr-2 relative'>
      <div className="max-w-[200rem] h-full mx-auto shadow-lg">
        <div className="flex flex-col p-4 pb-0">
          <h2 className="self-center text-3xl text-indigo-700 tracking-wide font-semibold mb-12">Crud Operations on Products</h2>
            <div className="grid grid-cols-11 justify-items-center tracking-wide text-[22px] px-4 font-semibold capitalize border-b pb-4">
              <p className="col-span-3 place-self-start">title</p>
              <p className="col-span-2">quantity</p>
              <p className="col-span-1">price</p>
              <p className="col-span-2">total</p>
              <Filter />
            </div>
          </div>

          <Suspense fallback={<Loading/>} key={filter}>
            <ProductList filter={filter} />
          </Suspense>
        </div>
    </section>
  )
}

export default Dashboard;