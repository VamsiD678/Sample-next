import Link from 'next/link'

const services = ['SEO', 'Digital Marketing']

const DropDownMenu = ({ pathname } : { pathname:string })=> {
  return (
    <div className='relative'>
      <Link href='/our-services' className={`${pathname === '/our-services' ? 'active' : ''} hover:text-black tracking-[0.015rem] transition-all`}>Services</Link>
      <div className='absolute left-[-50%] top-[120%] flex flex-col bg-gray-700 text-white w-40 min-w-[150px] p-2'>
        {
          services.map(service => <p className='text-lg' key={service}>{service}</p>)
        }
      </div>
    </div>
  )
}

export default DropDownMenu;

