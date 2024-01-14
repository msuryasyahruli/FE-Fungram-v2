import { Carousel } from '@material-tailwind/react'
import React from 'react'
import { BsBookmark, BsChatLeftText, BsHeart, BsShare, BsThreeDots } from 'react-icons/bs'

const Content = () => {
    return (
        <div className='py-4 max-w-[500px]'>
            <div className='flex pb-2 justify-between items-center sm:px-2'>
                <div className='flex'>
                    <button><img src={require("../../assets/image/profile.png")} alt="profilePic" className='w-10 h-10 rounded-full' /></button>
                    <div className='leading-4 px-2'>
                        <p className='font-semibold cursor-pointer'>name</p>
                        <p>loc</p>
                    </div>
                </div>
                <div className='text-2xl'>
                    <button><BsThreeDots /></button>
                </div>
            </div>
            <Carousel className="rounded h-auto items-center">
                <img
                    src={require("../../assets/image/img28.jpg")}
                    alt="image 1"
                    className="max-h-96 w-full object-contain"
                />
                <img
                    src={require("../../assets/image/Screenshot_1695048800.png")}
                    alt="image 2"
                    className="max-h-96 w-full object-contain"
                />
                <img
                    src={require("../../assets/image/GyozaChicken.jpg")}
                    alt="image 3"
                    className="max-h-96 w-full object-contain"
                />
            </Carousel>
            <div className='flex justify-between text-2xl my-2 sm:px-2'>
                <div className='flex space-x-4'>
                    <button className='hover:text-blue-gray-500'><BsHeart /></button>
                    <button className='hover:text-blue-gray-500'><BsChatLeftText /></button>
                    <button className='hover:text-blue-gray-500'><BsShare /></button>
                </div>
                <div>
                    <button className='hover:text-blue-gray-500'><BsBookmark /></button>
                </div>
            </div>
            <div className='font-semibold my-2 mb-4 sm:px-2'>
                <p className='my-2 cursor-pointer w-fit active:text-blue-gray-500s'>100 likes</p>
                <p className='leading-tight cursor-pointer'>name <span className='font-normal cursor-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, autem tenetur cumque enim maiores possimus nam qui ullam quo neque.</span></p>
                <p className='font-normal text-gray-500 cursor-pointer w-fit'>View all comment</p>
            </div>
            <hr />
        </div>
    )
}

export default Content