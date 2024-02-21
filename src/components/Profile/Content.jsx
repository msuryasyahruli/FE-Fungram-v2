import React, { useEffect, useState } from 'react'
// import gambar from "../../assets/image/img28.jpg"
import axios from 'axios'
import DetailPost from '../Modal/DetailPost'

const Content = () => {
    const userId = localStorage.getItem("userId")
    const userNick = localStorage.getItem("userNick")
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
            <div className='py-6 w-full justify-center flex'>
                {posts.length === 0 ? <div className='grid max-w-[60rem] minmd:px-24'><img src={require('../../assets/image/noposts.png')} alt="no posts" /></div> : <div className='grid grid-cols-3 gap-1 sm:gap-0.5 max-w-[60rem]'>
                    {posts.map((posts, Index) => (
                        <DetailPost key={Index} img={posts.post_image} nick={userNick} caption={posts.post_captions}>
                            <div className='aspect-square'>
                                <img src={posts.post_image} alt="content" className="w-full h-full object-cover" />
                            </div>
                        </DetailPost>
                    ))}
                </div>}
            </div>
        </>
    )
}

export default Content