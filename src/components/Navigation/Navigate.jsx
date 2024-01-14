import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Navigate = () => {
    return (
        <div className='flex h-svh bg-black text-white md:flex-col-reverse'>
            <div className='flex border-e border-e-blue-gray-900'>
                <Sidebar />
            </div>
            <div className="w-svw flex overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default Navigate