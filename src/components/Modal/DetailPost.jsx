import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import { BsBookmark, BsChatLeftText, BsHeart, BsShare, BsThreeDots } from 'react-icons/bs';
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';

const DetailPost = ({ img, nick, caption, id, children }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [comments, setComments] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/comment/${id}`)
            .then((res) => {
                setComments(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id])

    const userNick = localStorage.getItem("userNick")

    const [comment, setComment] = useState({
        comment_text: "",
        post_id: id,
        user_nickname: userNick,
    });

    const commentChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value,
        });
    };

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const onSent = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_KEY}/comment`, comment)
            .then((res) => {
                Toast.fire({
                    icon: "success",
                    title: res.data.message,
                });
                // window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <button onClick={handleOpen}>{children}</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='flex justify-center items-center backdrop-blur-sm'
            >
                <div className='bg-white minmd:w-9/12 grid minmd:grid-cols-2 rounded'>
                    <section className='flex items-center h-full md:hidden'>
                        <img src={img} alt="post" />
                    </section>
                    <section className='minmd:border-s relative md:h-screen overflow-auto'>
                        <div className='flex p-3 justify-between items-center border-b'>
                            <FaArrowLeft className='minmd:hidden' onClick={handleClose} />
                            <div className='flex items-center'>
                                <img src={require("../../assets/image/profile.png")} alt="profilePic" className='w-10 h-10 rounded-full cursor-pointer md:hidden' />
                                <p className='font-semibold cursor-pointer px-2'>{nick}</p>
                            </div>
                            <div className='text-xl'>
                                <button><BsThreeDots /></button>
                            </div>
                        </div>
                        <img src={img} alt="post" className='minmd:hidden' />
                        <div className='md:flex md:flex-col-reverse'>
                            {!comments ?
                                <div className='justify-center items-center flex minlg:h-[500px] minmd:h-[350px] md:w-screen'>
                                    <p>No comments yet.</p>
                                </div> :
                                <div className='overflow-auto minlg:h-[500px] minmd:h-[350px]'>
                                    {comments.map((comment, i) => (
                                        <div key={i} className='font-semibold flex p-3 justify-between md:w-screen'>
                                            <div className='flex'>
                                                <img src={require("../../assets/image/profile.png")} alt="profilePic" className='w-10 h-10 rounded-full cursor-pointer' />
                                                <div className='flex items-center'>
                                                    <p className='font-normal px-2'><span className='font-semibold cursor-pointer pe-1'>{comment.user_nickname}</span>{comment.comment_text}</p>
                                                </div>
                                            </div>
                                            <p className={caption ? 'hidden' : 'hover:text-gray-500 py-3'}><BsHeart /></p>
                                        </div>
                                    ))}
                                </div>
                            }
                            <section>
                                <div className='flex justify-between text-2xl p-3 border-t w-full  bottom-0'>
                                    <div className='flex space-x-4'>
                                        <button className='hover:text-gray-500'><BsHeart /></button>
                                        <label htmlFor="comment" className='hover:text-gray-500 my-auto cursor-pointer'><BsChatLeftText /></label>
                                        <button className='hover:text-gray-500'><BsShare /></button>
                                    </div>
                                    <div>
                                        <button className='hover:text-gray-500'><BsBookmark /></button>
                                    </div>
                                </div>
                                <div className='p-3 flex'>
                                    <input type="text" placeholder='Add comment' className='outline-none w-full' id='comment' name='comment_text' onChange={commentChange} />
                                    {comment.comment_text ?
                                        <button className='text-blue-500' onClick={onSent}>Sent</button> :
                                        <button className='text-gray-500 cursor-not-allowed' disabled>Sent</button>
                                    }
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </Modal>
        </>
    )
}

export default DetailPost