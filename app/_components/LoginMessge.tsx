import React from 'react'
import Link from 'next/link'

const LoginMessage = () => {
  return (
    <div className='py-32 flex justify-center'>
      <h2 className='text-2xl'>Please
        <Link href='/admin' className='text-indigo-600 border-b border-indigo-600'> login </Link>
        to perform CRUD operations</h2>
    </div>
  )
}

export default LoginMessage;