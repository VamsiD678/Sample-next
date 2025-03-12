import LoginMessage from "../_components/LoginMessge";
import Sidebar from "../_components/SideBar";
import { auth } from "../_library/auth";

export const metadata = {
  title: 'Admin'
}

const layout = async ({ children }: { children: React.ReactNode }) => {
  
  const session = await auth()

  return (
    <div className="grid grid-cols-[12rem_1fr] relative gap-4">
      <Sidebar/>
      {
        session?.user ? children : <LoginMessage/>
      }
    </div>
  )
}

export default layout;