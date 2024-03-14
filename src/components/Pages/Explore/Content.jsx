import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import DetailPost from '../../Modal/DetailPost'
import Search from '../Search/Index'
import { useDispatch, useSelector } from 'react-redux'
import getPostsAction from '../../../config/redux/action/postsAction/getPostsAction'

const Content = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(getPostsAction({ page: 1, limit: 9 }, setIsLoading));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setIsLoading]);

    return (
        <>
            <div className='minmd:hidden'>
                <Search />
            </div>
            <div className='w-full justify-center flex'>
                <div className='py-6 md:py-2'>
                    <div className='grid grid-cols-3 gap-1 sm:gap-0.5 max-w-[60rem]'>
                        {posts.map((posts, Index) => (
                            <DetailPost key={Index} img={posts.post_image} nick={posts.user_nickname} caption={posts.post_captions} id={posts.post_id}>
                                <div className='aspect-square'>
                                    <img src={posts.post_image} alt="content" className="w-full h-full object-cover" />
                                </div>
                            </DetailPost>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content