// import { Carousel } from '@material-tailwind/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsChatLeftText, BsHeart, BsHeartFill, BsShare, BsThreeDots } from 'react-icons/bs'
import DetailPost from '../Explore/DetailPost'

const Content = () => {
    const [posts, setPosts] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/post`)
            .then((res) => {
                setPosts(res.data.data);
                // setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [like, setLike] = useState(999),
        [isLike, setIsLike] = useState(false),

        onClickLike = () => {
            setLike(like + (isLike ? -1 : 1));
            setIsLike(!isLike)
        }

    // const [saved, setsaved] = useState(false),

    //     onClickSave = () => {
    //         { saved ? setsaved(false) : setsaved(true) }
    //     }

    return (
        <>
            <div className='max-w-[500px]'>
                {posts.map((posts, Index) => (
                    <div key={Index} className='py-2'>
                        <div className='flex pb-2 justify-between items-center 2sm:px-2'>
                            <div className='flex items-center'>
                                <button><img src={require("../../assets/image/profile.png")} alt="profilePic" className='w-10 h-10 rounded-full' /></button>
                                <div className='px-2'>
                                    <p className='font-semibold cursor-pointer'>{posts.user_nickname}</p>
                                    {/* <p className='text-sm'>location</p> */}
                                </div>
                            </div>
                            <div className='text-xl'>
                                <button><BsThreeDots /></button>
                            </div>
                        </div>
                        {/* {posts.post_image.length === 1 ? posts.image.map((image, Index) => ( */}
                        <img
                            key={Index}
                            src={posts.post_image}
                            alt="imgContent"
                            className="max-h-96 w-full object-contain min2sm:rounded"
                        />
                        {/* )) : <Carousel className="rounded h-auto items-center">
                            {posts.image.map((image, Index) => (
                                <img
                                    key={Index}
                                    src={posts.post_image}
                                    alt="imgContent"
                                    className="max-h-96 w-full object-contain"
                                />
                            ))}
                        </Carousel>} */}
                        <div className='flex justify-between text-2xl my-2 2sm:px-2'>
                            <div className='flex space-x-4'>
                                <button className='hover:text-gray-500' onClick={onClickLike} >{isLike ? <BsHeartFill className='text-red-900' /> : <BsHeart />}</button>
                                <DetailPost key={Index} img={posts.post_image} nick={posts.user_nickname} caption={posts.post_captions}>
                                    <div className='hover:text-gray-500'><BsChatLeftText /></div>
                                </DetailPost>
                                <button className='hover:text-gray-500'><BsShare /></button>
                            </div>
                            <div>
                                <button className='hover:text-gray-500' ><BsBookmark /></button>
                            </div>
                        </div>
                        <div className='font-semibold my-2 mb-4 2sm:px-2'>
                            <p className='my-2 cursor-pointer w-fit active:text-gray-500'>{like} likes</p>
                            {posts.post_captions ? <p className='font-normal'><span className='leading-tight cursor-pointer font-semibold'>{posts.user_nickname} </span>{posts.post_captions}</p> : ''}
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