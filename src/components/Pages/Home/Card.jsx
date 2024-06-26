import React, { useState } from 'react'
import { BsBookmark, BsChatLeftText, BsHeart, BsHeartFill, BsShare, BsThreeDots } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
// import DetailPost from '../../Modal/DetailPost'

const Card = ({ posts }) => {
    const userNick = localStorage.getItem("userNick")
    const location = useLocation();

    const [like, setLike] = useState(0),
        [isLike, setIsLike] = useState(false),
        onClickLike = () => {
            setLike(like + (isLike ? -1 : 1));
            setIsLike(!isLike)
        }

    return (
        <>
            <div className='py-2'>
                <div className='flex pb-2 justify-between items-center 2sm:px-2'>
                    <Link to={posts.user_nickname === userNick ? `/${userNick}` : `/${posts.user_nickname}/${posts.user_id}`} className='flex items-center'>
                        <img src={require("../../../assets/image/profile.png")} alt="profilePic" className='w-10 h-10 rounded-full' />
                        <div className='px-2'>
                            <div className='font-semibold'>{posts.user_nickname}</div>
                        </div>
                    </Link>
                    <div className='text-xl'>
                        <button><BsThreeDots /></button>
                    </div>
                </div>
                {/* {posts.post_image.length === 1 ? posts.image.map((image, Index) => ( */}
                <img
                    // key={Index}
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
                        {/* <DetailPost img={posts.post_image} nick={posts.user_nickname} caption={posts.post_captions} id={posts.post_id}> */}
                        <button className='hover:text-gray-500'>
                            <Link to={`/p/${posts.post_id}`} state={{ background: location }}>
                                <BsChatLeftText />
                            </Link>
                        </button>
                        {/* </DetailPost> */}
                        <button className='hover:text-gray-500'><BsShare /></button>
                    </div>
                    <div>
                        <button className='hover:text-gray-500' ><BsBookmark /></button>
                    </div>
                </div>
                <div className='font-semibold mb-4 2sm:px-2'>
                    <p className='cursor-pointer w-fit active:text-gray-500'>{like} likes</p>
                    {posts.post_captions ? <p className='font-normal'><span className='leading-tight cursor-pointer font-semibold'>{posts.user_nickname} </span>{posts.post_captions}</p> : ''}
                    <p className='font-normal text-gray-500 cursor-pointer w-fit'>View all comment</p>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Card