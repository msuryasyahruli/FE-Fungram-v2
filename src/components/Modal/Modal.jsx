import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BsXCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { BsBookmark, BsChatLeftText, BsHeart, BsShare } from 'react-icons/bs';
import { FaArrowLeft } from "react-icons/fa";
import getDetailPostAction from '../../config/redux/action/postsAction/getDetailPostAction';
import getCommetsAction from '../../config/redux/action/commentsAction/getCommentsAction';
import createCommentAction from '../../config/redux/action/commentsAction/createCommentAction';
import MenuEdit from '../Menu/MenuPost';
import MenuReport from '../Menu/MenuReport';

const Modal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { postId } = useParams()

    const { postDetail } = useSelector((state) => state.posts)
    useEffect(() => {
        dispatch(getDetailPostAction(postId))
    }, [dispatch, postId])

    const img = !postDetail.post_image ? '' : postDetail.post_image.split("/")[7].split(".")[0]

    const { comments } = useSelector((state) => state.comments)
    useEffect(() => {
        dispatch(getCommetsAction(postId))
    }, [dispatch, postId])

    const userNick = localStorage.getItem("userNick")

    const [data, setData] = useState({
        comment_text: "",
        post_id: postId,
        user_nickname: userNick,
    });

    const commentChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const onSent = (e) => {
        e.preventDefault();
        dispatch(createCommentAction(data))
    }

    return (
        <>
            <div className='w-full h-svh fixed top-0 flex justify-center items-center z-10 bg-black/55'>
                <button onClick={() => navigate(-1)} className='fixed top-4 right-4 text-4xl text-white'><BsXCircleFill /></button>
                <div className='bg-white h-fit minmd:rounded flex md:w-full md:h-full mx-16'>
                    <section className='flex items-center max-w-2xl md:hidden'>
                        <img src={postDetail.post_image} alt="post" />
                    </section>
                    <section className='minmd:border-s md:h-screen minmd:min-w-[448px] md:w-full'>
                        <div className='flex p-3 justify-between items-center border-b md:w-screen'>
                            <button onClick={() => navigate(-1)} className='text-xl minmd:hidden'><FaArrowLeft /></button>
                            <div className='flex items-center'>
                                <img src={require("../../assets/image/profile.png")} alt="profilePic" className='w-10 h-10 rounded-full cursor-pointer md:hidden' />
                                <p className='font-semibold cursor-pointer px-2'>{postDetail.user_nickname}</p>
                            </div>
                            <div className='text-xl'>
                                {userNick !== postDetail.user_nickname
                                    ?
                                    <MenuReport />
                                    :
                                    <MenuEdit id={postId} img={img} />
                                }
                            </div>
                        </div>
                        {!comments ?
                            <div className='justify-center items-center flex w-full md:w-screen bg-blue-gray-50 h-[500px]'>
                                <p>No comments yet.</p>
                            </div> :
                            <div className='overflow-auto bg-blue-gray-50 h-[500px]'>
                                {comments.map((comment, i) => (
                                    <div key={i} className='font-semibold flex p-3 justify-between minmd:max-w-md md:w-full'>
                                        <div className='flex'>
                                            <img src={require("../../assets/image/profile.png")} alt="profilePic" className='w-10 h-10 rounded-full cursor-pointer' />
                                            <div className='flex items-center'>
                                                <p className='font-normal px-2'><span className='font-semibold cursor-pointer pe-1'>{comment.user_nickname}</span>{comment.comment_text}</p>
                                            </div>
                                        </div>
                                        <p className={'hover:text-gray-500 py-3'}><BsHeart /></p>
                                    </div>
                                ))}
                            </div>
                        }
                        <section className=' bottom-0 w-full md:w-screen'>
                            <div className='flex justify-between text-2xl p-3 border-t'>
                                <div className='flex space-x-4'>
                                    <button className='hover:text-gray-500'><BsHeart /></button>
                                    <label htmlFor="comment" className='hover:text-gray-500 my-auto cursor-pointer'><BsChatLeftText /></label>
                                    <button className='hover:text-gray-500'><BsShare /></button>
                                </div>
                                <div>
                                    <button className='hover:text-gray-500'><BsBookmark /></button>
                                </div>
                            </div>
                            <div className="mx-3 mb-2 flex">
                                <input
                                    type="text"
                                    placeholder="Add comment..."
                                    className="outline-none w-full"
                                    id="comment"
                                    name="comment_text"
                                    onChange={commentChange}
                                    aria-label="Add comment input"
                                />
                                <button
                                    className={`text-blue-500 ${data.comment_text ? '' : 'text-gray-500 cursor-not-allowed'}`}
                                    onClick={onSent}
                                    disabled={!data.comment_text}
                                    aria-label="Send button"
                                >
                                    Sent
                                </button>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Modal