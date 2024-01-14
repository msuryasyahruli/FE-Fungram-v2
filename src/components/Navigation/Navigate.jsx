import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Navigate = () => {
    return (
        <div className='flex h-svh  md:flex-col-reverse'>
            <div className='flex border-e '>
                <Sidebar />
            </div>
            <div className="w-svw flex overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default Navigate