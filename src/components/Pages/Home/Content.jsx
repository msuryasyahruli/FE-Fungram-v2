// import { Carousel } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import CardSection from '../../Skeleton/CardSection'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import getPostsAction from '../../../config/redux/action/postsAction/getPostsAction'

const Content = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)
    const [limit, setLimit] = useState(5);
    const { posts } = useSelector((state) => state.posts);

    const moreData = () => {
        setTimeout(() => {
            setLimit(limit + 5)
        }, 500);
        posts.length >= limit ? setHasMore(true) : setHasMore(false)
    }

    useEffect(() => {
        dispatch(getPostsAction({ page: 1, limit: `${limit}` }, setIsLoading))
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, limit]);

    return (
        <>
            <section className='max-w-[500px]'>
                {isLoading ?
                    <CardSection /> :
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
                        <div>
                            {posts.map((posts, Index) => (
                                <Card posts={posts} key={Index} />
                            ))}
                        </div>
                    </InfiniteScroll>
                }
            </section>
        </>
    )
}

export default Content