import Link from 'next/link'

const NotFound = () => {
  return (
    <main className="flex flex-col h-[50vh] items-center justify-center gap-7">
      <h1 className="text-3xl">This Product could not be found :(</h1>
      <Link href='/products' className='button-primary'>Go to all Products</Link>
    </main>
  )
}

export default NotFound; 