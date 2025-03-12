'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export type HandleFilter = (filter: string) => void;

const Filter = () => {

  const searchParams = useSearchParams()
  const currentFilter = searchParams.get('price') || 'all';

  const pathname = usePathname()
  const router = useRouter()

  const handleFilter = ( filter:string ) => {
    const params = new URLSearchParams(searchParams)
    params.set('price', filter) 
    router.replace(`${pathname}?${params.toString()}`, { scroll:false })
  } 

  return (
    <div className="col-span-3 tracking-[0.015rem] flex gap-4">
      <Button handleFilter={handleFilter} filter='all' currentFilter={currentFilter}>All</Button>
      <Button handleFilter={handleFilter} filter='<200' currentFilter={currentFilter}>Under 200₹</Button>
      <Button handleFilter={handleFilter} filter='>200' currentFilter={currentFilter}>Over 200₹</Button>
    </div>
  )
}


const Button = ({ children, handleFilter, currentFilter, filter } : { children:string, handleFilter:HandleFilter, currentFilter:string, filter:string } ) => {
  return (
    <button onClick={() => handleFilter(filter)} className={`${currentFilter === filter ? 'bg-indigo-600 text-white hover:bg-indigo-700':''} text-base font-medium p-2 bg-indigo-100 rounded-md hover:bg-indigo-200 text-center`}>{children}</button>
  )
}

export default Filter;
