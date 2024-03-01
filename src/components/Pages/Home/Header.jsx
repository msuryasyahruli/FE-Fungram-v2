import React from 'react'
// import { BsGearFill } from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <div className='h-12 w-full minmd:hidden flex justify-center border-b absolute top-0'>
                <img src={require('../../../assets/image/FunW.png')} alt="logo" className='h-full p-1 absolute left-0' />
                <input type="text" placeholder='Search' className='outline-none bg-gray-200 rounded-full px-3 my-2 z-10' />
                {/* <button className='justify-center items-center flex p-2'> <BsGearFill className='w-6 h-6 absolute right-0 mx-1' /> </button> */}
            </div>
        </>
    )
}

export default Header