import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
            <div className='w-full h-screen justify-center flex'>
                <div className='py-6 md:py-2 h-fit'>
                    <div className='grid grid-cols-3 gap-1 sm:gap-0.5 max-w-[60rem]'>
                        {posts.map((posts, Index) => (
                            <div key={Index} className='aspect-square'>
                                <img src={posts.post_image} alt="image 1" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content