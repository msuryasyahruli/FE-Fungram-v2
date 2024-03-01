import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Index = () => {
    const { nick } = useParams()
    const { id } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/users/${nick}`)
            .then((res) => {
                setUser(res.data.data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/post/user/${id}`)
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className='w-full minmd:py-8 justify-center flex'>
                <div className='md:w-full'>
                    <Header totalPost={posts.length} user={user} nick={nick} />
                    <hr />
                    <Content posts={posts} nick={nick} />
                </div>
            </div>
        </>
    )
}

export default Index