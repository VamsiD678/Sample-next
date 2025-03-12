'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { MdMenu } from "react-icons/md";

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname();

  return (
    <section>
      <div className="block lg:hidden text-3xl sm:text-4xl cursor-pointer z-50" onClick={() => setIsOpen(s => !s)}>
        <MdMenu />
      </div>
      <div>
        {
          isOpen && <div className="py-6 px-12 absolute top-0 right-0 z-10 bg-white opacity-[0.97] w-[100vw] h-[100vh]">
            <p onClick={() => setIsOpen(s => !s)} className="absolute top-3 right-4 text-5xl z-100 cursor-pointer"><BiX/></p>
            <ul onClick={() => setIsOpen(false)} className="max-w-3xl flex flex-col items-center space-y-5 w-full mx-auto">
              <Link href='/'><li className="text-gray-800 text-xl font-medium hover:text-indigo-800 tracking-[0.015rem] transition-all">Home</li></Link>
              <Link href='/about'><li className="text-gray-800 text-xl font-medium hover:text-indigo-800 tracking-[0.015rem] transition-all">About</li></Link>
              <Link href='/products'><li className="text-gray-800 text-xl font-medium hover:text-indigo-800 tracking-[0.015rem] transition-all">Products</li></Link>
              <Link href='/contact'><li className="text-gray-800 text-xl font-medium hover:text-indigo-800 tracking-[0.015rem] transition-all">Contact</li></Link>
              <Link href='/admin'><li className="text-gray-800 text-xl font-medium hover:text-indigo-800 tracking-[0.015rem] transition-all">Admin</li></Link>
              <Link href='/'><li className="button-primary py-2 px-4 text-white text-xl tracking-[0.015rem] transition-all">Free Consultation</li></Link>
            </ul>
          </div>

        }
      </div>
      <div className="hidden lg:block">
        <nav className="flex space-x-10 lg:text-[22px] text-gray-800 font-medium tracking-[0.015rem]">
          <Link href='/' className={`${pathname === '/'? 'active':''} hover:text-black transition-all`}>Home</Link>
          <Link href='/about' className={`${pathname === '/about'? 'active':''} hover:text-black transition-all`}>About</Link>
          <Link href='/products' className={`${pathname === '/products'? 'active':''} hover:text-black transition-all`}>Products</Link>
          <Link href='/admin' className={`${pathname === '/admin'  ? 'active' : ''} hover:text-black transition-all`}>Admin</Link>
          <Link href='/contact' className={`${pathname === '/contact'? 'active':''} hover:text-black transition-all`}>Contact</Link>
        </nav>
      </div>
    </section>
  )
}

export default Navigation;