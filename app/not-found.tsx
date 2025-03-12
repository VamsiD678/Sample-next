import Link from 'next/link'

const NotFound = () => {
  return (
    <main className="flex flex-col h-[50vh] items-center justify-center gap-7">
      <h1 className="text-3xl">This Page could not be found</h1>
      <Link href='/' className='button-primary'>Go back to Home</Link>
    </main>
  )
}

export default NotFound;