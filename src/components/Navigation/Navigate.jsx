import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Navigate = () => {
    return (
        <>
            <div className='flex'>
                <div className='w-fit minmd:h-svh minmd:border-e fixed bottom-0 md:w-full bg-white'>
                    <Sidebar />
                </div>
                <div className='w-svw minxl:ms-48 minmd:ms-20 md:my-12'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Navigate