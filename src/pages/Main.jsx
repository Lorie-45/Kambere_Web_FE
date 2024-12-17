import Sidebar from './Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import TopBar from './Dashboard/TopBar'

const Main = () => {
  return (
    <div className='flex flex-row h-screen w-full ' >
        <div className='w-60 fixed h-full' >
        <Sidebar />
        </div>
        <div className="ml-60 flex-1 flex flex-col gap-3" >
        <TopBar />
        <div className="p-4 overflow-y-auto h-full" >

        <Outlet />
        </div>
        </div>
    </div>
    
    
  )
}

export default Main

