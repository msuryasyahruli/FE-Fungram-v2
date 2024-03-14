import React, { useEffect } from 'react'
import Header from './Header'
import Content from './Content'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import getPostsByUserAction from '../../../config/redux/action/postsAction/getPostByUserAction'
import getUserAction from '../../../config/redux/action/usersAction/getUserAction'
import { useNavigate } from 'react-router-dom/dist'

const Index = () => {
    const { nick } = useParams()
    const { id } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(getUserAction(navigate, nick))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nick]);

    const { postByUser } = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(getPostsByUserAction(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <>
            <div className='w-full minmd:py-8 justify-center flex'>
                <div className='md:w-full'>
                    <Header totalPost={postByUser.length} user={user} nick={nick} />
                    <hr />
                    <Content posts={postByUser} nick={nick} />
                </div>
            </div>
        </>
    )
}

export default Index