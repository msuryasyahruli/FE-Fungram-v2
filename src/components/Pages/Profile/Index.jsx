import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import { useDispatch, useSelector } from 'react-redux'
import getPostsByUserAction from '../../../config/redux/action/postsAction/getPostByUserAction'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'
import getUserProfileAction from '../../../config/redux/action/usersAction/getUserProfileAction'

const Index = () => {
    const userId = localStorage.getItem("userId")
    const token = localStorage.getItem("token");
    const { userNick } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    
    const { user } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(getUserProfileAction(token, navigate, setIsLoading))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { postByUser } = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(getPostsByUserAction(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    return (
        <>
            <div className='w-full minmd:py-8 justify-center flex'>
                <div className='md:w-full'>
                    <Header posts={postByUser} user={user} />
                    <hr />
                    <Content posts={postByUser} nick={userNick} />
                </div>
            </div>
        </>
    )
}

export default Index