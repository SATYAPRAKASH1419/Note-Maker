import { TopBar } from '../components/TopBar'
import { SideBar } from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import { HiddenBar } from '../components/HiddenBar';

const MainLayout = () => {
const [hamburgerClicked,setHamburgerClicked]= useState<boolean>(false);

  return (
    <div className='flex flex-col h-screen w-screen'>
        <TopBar hamburgerClicked={hamburgerClicked} setHamburgerClicked={setHamburgerClicked} />

        <div className='grid grid-cols-7  h-screen'>
           {hamburgerClicked ? <div className='col-span-2 '>
             <HiddenBar/>
           </div>:
           <div className='col-span-2  bg-amber-500 '>
             <SideBar/>
           </div>}
            <main className='col-span-5  bg-pink-400'>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default MainLayout