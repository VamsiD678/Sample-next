'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {

  const pathname = usePathname()

  return ( 
    <nav className='px-6 py-16 h-screen overflow-y-hidden sticky self-start top-0 border-r flex justify-center bg-gray-100'>
      <ul className='flex flex-col gap-2 text-xl'>
          <li>
            <Link
              className={`${pathname === '/admin' && 'active' } py-3 px-5 transition-colors flex items-center gap-4`}
              href='/admin'>Home
            </Link>
          </li>
        
          <li>
            <Link
              className={`${pathname === '/admin/dashboard' && 'active' } py-3 px-5 transition-colors flex items-center gap-4`}
              href='/admin/dashboard'> Dashboard
            </Link>
          </li>
      </ul>
    </nav>
  )
}

export default Sidebar;