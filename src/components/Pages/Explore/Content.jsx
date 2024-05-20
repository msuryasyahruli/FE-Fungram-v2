import React, { useEffect, useState } from 'react'
import DetailPost from '../../Modal/DetailPost'
import Search from '../Search/Index'
import { useDispatch, useSelector } from 'react-redux'
import getPostsAction from '../../../config/redux/action/postsAction/getPostsAction'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link, useLocation } from 'react-router-dom'

const Content = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)
    const dispatch = useDispatch();
    const location = useLocation();
    const [limit, setLimit] = useState(12);
    const { posts } = useSelector((state) => state.posts);

    const moreData = () => {
        setTimeout(() => {
            setLimit(limit + 12)
        }, 500);
        posts.length >= limit ? setHasMore(true) : setHasMore(false)
    }

    useEffect(() => {
        dispatch(getPostsAction({ page: 1, limit: `${limit}` }, setIsLoading));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, limit]);

    return (
        <>
            <div className='minmd:hidden'>
                <Search />
            </div>
            <div className='w-full justify-center flex'>
                <InfiniteScroll
                    dataLength={posts.length}
                    next={moreData}
                    hasMore={hasMore}
                    loader={
                        <h4 className="text-center">
                            <div
                                className="inline-block my-2 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                                role="status">
                            </div>
                        </h4>
                    }
                >
                    <div className='py-6 md:py-2'>
                        <div className='grid grid-cols-3 gap-1 sm:gap-0.5 max-w-[60rem]'>
                            {posts.map((posts, Index) => (
                               // <DetailPost img={posts.post_image} nick={posts.user_nickname} caption={posts.post_captions} id={posts.post_id}>
                                    <Link key={Index} to={`/p/${posts.post_id}`} state={{ background: location }}>
                                        <img src={posts.post_image} alt="content" className=" object-cover aspect-square" />
                                    </Link>
                               // </DetailPost>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

export default Content