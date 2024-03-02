import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DetailPost from '../../Modal/DetailPost'
import Index from '../Search/Index'

const Content = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/post`)
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <>
        <div className='minmd:hidden'>
        <Index/>
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