// import { Carousel } from '@material-tailwind/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardSection from '../../Skeleton/CardSection'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from './Card'

const Content = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(2);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/post?page=1&limit=5`)
            .then((res) => {
                setPosts(res.data.data)
                setIsLoading(false)
            })
            .catch((err) => console.log(err));
    }, []);

    const fetchMoreData = () => {
        setTimeout(() => {
            axios
                .get(`${process.env.REACT_APP_API_KEY}/post?page=${index}&limit=5`)
                .then((res) => {
                    setPosts((prevPosts) => [...prevPosts, ...res.data.data]);
                    res.data.data.length > 0 ? setHasMore(true) : setHasMore(false);
                })
                .catch((err) => console.log(err));
            setIndex((prevIndex) => prevIndex + 1);
        }, 1000);
    };

    return (
        <>
            <section className='max-w-[500px]'>
                {isLoading ?
                    <CardSection /> :
                    <InfiniteScroll
                        dataLength={posts.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<h4 className="text-center text-xl font-semibold my-2">Loading...</h4>}
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