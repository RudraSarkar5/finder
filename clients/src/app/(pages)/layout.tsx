import React from 'react'
import  Sidebar  from "@/components/Sidebar"

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='grid grid-cols-12 h-screen w-[70%]  '>
       <div className=' h-full col-span-3   '>
            <Sidebar/>
       </div>
       <div className=' h-screen col-span-9 bg-blue-500'>
         {children}
       </div>
       
    </div>
    
  )
}

export default Layout;