import React from 'react'
import { FaPenToSquare } from "react-icons/fa6";

const Index = () => {
    return (
        <>
            <div className='grid minmd:grid-cols-3 minmd:px-16 minmd:py-6 h-svh'>
                <section className='col-span-1 bg-blue-gray-600'>
                    <header className='h-12 font-bold text-2xl px-3 flex items-center justify-between'>
                        <p>Message</p>
                        <FaPenToSquare />
                    </header>
                    <div className='overflow-x-auto'>
                        <div className='p-3 flex gap-2 bg-gray-700'>
                            <img src={require('../../../assets/image/profile.png')} alt="prof" className='h-14 w-14 rounded-full' />
                            <div>
                                <p className='text-xl font-semibold'>name</p>
                                <p>Hallo.........</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='col-span-2 bg-blue-gray-200 md:hidden'></section>
            </div>
        </>
    )
}

export default Index