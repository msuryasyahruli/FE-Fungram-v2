import React, { useEffect, useState } from 'react'
import gambar from "../../assets/image/img28.jpg"
import axios from 'axios'

const Content = () => {
    const userId = localStorage.getItem("userId")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/post/user/${userId}`)
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    return (
        <>
            <div className='py-6 h-fit w-full justify-center flex'>
                <div className='grid grid-cols-3 gap-1 sm:gap-0.5 max-w-[60rem]'>
                    {posts.map((posts, Index) => (
                        <div key={Index} className='aspect-square'>
                            <img src={posts.post_image} alt="image" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Content