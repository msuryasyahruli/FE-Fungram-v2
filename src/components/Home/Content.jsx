import { Carousel } from '@material-tailwind/react'
import React from 'react'
import { BsBookmark, BsChatLeftText, BsHeart, BsShare, BsThreeDots } from 'react-icons/bs'

const Content = () => {
    const posts = [
        {
            name: 'test',
            image: [{
                img: "https://res.cloudinary.com/dy626njls/image/upload/v1702191672/j9r9k3ec79h09am3ynkp.jpg"
            }, {
                img: "https://res.cloudinary.com/dy626njls/image/upload/v1702284619/mffu9c5if97hfesiqxtp.jpg"
            }],
            caps: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            name: 'test2',
            image: [{
                img: 'https://res.cloudinary.com/dy626njls/image/upload/v1702199362/c1gyiybhs9qglohjoxwp.png'
            }],
            caps: 'Voluptate, autem tenetur cumque enim maiores possimus nam qui ullam quo neque.'
        },
        {
            name: 'test3',
            image: [{
                img: 'https://res.cloudinary.com/dy626njls/image/upload/v1702205787/wsm86ffby2doalaeu8cg.png'
            }],
            caps: ' enim maiores possimus nam qui ullam quo neque.'
        },
    ]

    return (
        <>
            <div className='max-w-[500px]'>
                {posts.map((posts, Index) => (
                    <div key={Index} className='py-2'>
                        <div className='flex pb-2 justify-between items-center sm:px-2'>
                            <div className='flex'>
                                <button><img src={require("../../assets/image/profile.png")} alt="profilePic" className='w-10 h-10 rounded-full' /></button>
                                <div className='leading-4 px-2'>
                                    <p className='font-semibold cursor-pointer'>{posts.name}</p>
                                    <p>loc</p>
                                </div>
                            </div>
                            <div className='text-2xl'>
                                <button><BsThreeDots /></button>
                            </div>
                        </div>
                        {posts.image.length === 1 ? posts.image.map((image, Index) => (
                            <img
                                key={Index}
                                src={image.img}
                                alt="image 1"
                                className="max-h-96 w-full object-contain rounded"
                            />
                        )) : <Carousel className="rounded h-auto items-center">
                            {posts.image.map((image, Index) => (
                                <img
                                    key={Index}
                                    src={image.img}
                                    alt="image 1"
                                    className="max-h-96 w-full object-contain"
                                />
                            ))}
                        </Carousel>}
                        <div className='flex justify-between text-2xl my-2 sm:px-2'>
                            <div className='flex space-x-4'>
                                <button className='hover:text-gray-500'><BsHeart /></button>
                                <button className='hover:text-gray-500'><BsChatLeftText /></button>
                                <button className='hover:text-gray-500'><BsShare /></button>
                            </div>
                            <div>
                                <button className='hover:text-gray-500'><BsBookmark /></button>
                            </div>
                        </div>
                        <div className='font-semibold my-2 mb-4 sm:px-2'>
                            <p className='my-2 cursor-pointer w-fit active:text-gray-500'>100 likes</p>
                            <p className='leading-tight cursor-pointer'>{posts.name} <span className='font-normal cursor-text'>{posts.caps}</span></p>
                            <p className='font-normal text-gray-500 cursor-pointer w-fit'>View all comment</p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Content