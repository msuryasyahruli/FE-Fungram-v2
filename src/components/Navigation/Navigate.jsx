import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Navigate = () => {
    return (
        <>
            <div className='flex h-svh md:flex-col'>
                <div className='flex border-e md:absolute md:bottom-0 md:w-full'>
                    <Sidebar />
                </div>
                <div className="w-svw flex overflow-auto md:my-12">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Navigate