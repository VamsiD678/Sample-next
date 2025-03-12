'use client'

export interface ErrorObj {
  message:string
}

const Error = ({ error, reset}: { error: Error & { digest?: string }, reset: ()=> void }) => {
  return (
    <div className="h-[50vh] px-6 flex items-center justify-center flex-col gap-6">
      <h1 className="text-3xl">Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default Error;