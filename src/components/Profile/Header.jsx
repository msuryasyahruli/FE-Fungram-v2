import React from 'react'
import { BsGearFill } from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <div className='justify-center minsm:pb-8 border-b border-blue-gray-900'>
                <div className='border-b border-blue-gray-900 minmd:hidden'>
                    <button className='justify-center items-center flex m-2'> <BsGearFill className='w-6 h-6' /> </button>
                </div>
                <div className='max-w-full h-fit grid minsm:grid-cols-3 sm:flex'>
                    <div className='minmd:w-full h-fit flex justify-center md:m-4 minsm:col-span-1'>
                        <div className='aspect-square w-36 h-36 sm:w-20 sm:h-20'>
                            <img src={require("../../assets/image/profile.png")} alt="profile" className='rounded-full w-full h-full object-cover cursor-pointer' />
                        </div>
                    </div>
                    <div className='minsm:col-span-2 items-center sm:flex'>
                        <div className='minsm:flex items-center gap-4 py-1'>
                            <p className='text-xl'>name</p>
                            <button className='h-8 px-4 rounded-lg bg-blue-gray-900 sm:my-2'>Edit profile</button>
                            <button className='justify-center items-center flex md:hidden'> <BsGearFill className='w-6 h-6' /> </button>
                        </div>
                        <div className='sm:hidden'>
                            <div className='flex text-center gap-10 my-4'>
                                <p><span className='font-semibold'>100</span> Posts</p>
                                <p><span className='font-semibold'>10M</span> Followers</p>
                                <p><span className='font-semibold'>1</span> Following</p>
                            </div>
                            <div>
                                <p>Fullname</p>
                                <p>Bio</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='minsm:hidden'>
                    <div className='px-4 pb-2'>
                        <p>Fullname</p>
                        <p>Bio</p>
                    </div>
                    <div className='grid grid-cols-3 text-center py-2 border-t border-blue-gray-900'>
                        <div><p className='font-semibold'>100</p> <p>Posts</p></div>
                        <div><p className='font-semibold'>10M</p> <p>Followers</p></div>
                        <div><p className='font-semibold'>1</p> <p>Following</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header