import { auth } from "../_library/auth";


const Admin = async () => {

  const session = await auth();
  console.log(session?.user);
  
  return (
    <div className="py-16 px-12 h-auto grid grid-cols-2">
      <h2 className="text-[26px] text-indigo-600">Welcome, {session?.user?.name?.split(' ')[0] || 'Admin'}</h2>
      {
        session?.user &&
          <img src={session?.user?.image} alt='Profile' className="h-10 w-10 rounded-full justify-self-end" referrerPolicy='no-referrer' />
      }
    </div>
  )
}

export default Admin; 