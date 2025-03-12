// import { NextResponse } from "next/server";

// const middleware = (request) => {
  //   console.log(request);
  
  //   return NextResponse.redirect(new URL("/", request.url));
// }
  
import { auth } from '@/app/_library/auth'
  
export const middleware = auth

export const config = {
  matcher:["/admin"]
}
