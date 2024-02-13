import React from 'react'
import Modal from '@mui/material/Modal';
import { BsBookmark, BsChatLeftText, BsHeart, BsShare, BsThreeDots } from 'react-icons/bs';
import { FaArrowLeft } from "react-icons/fa";

const DetailPost = ({ img, nick, caption, children }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <section className='border-s relative md:h-screen'>
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
                            {!caption ? <div className='justify-center items-center flex minlg:h-[500px] minmd:h-[350px] md:w-screen'>
                                <p>No comments yet.</p>
                            </div> :
                                <div className='overflow-auto minlg:h-[500px] minmd:h-[350px]'>
                                    <div className='font-semibold flex p-3 justify-between md:w-screen'>
                                        <div className='flex'>
                                            <img src={require("../../assets/image/profile.png")} alt="profilePic" className='w-10 h-10 rounded-full cursor-pointer' />
                                            <div className='flex items-center'>
                                                <p className='font-normal px-2'><span className='font-semibold cursor-pointer pe-1'>{nick}</span>{caption}</p>
                                            </div>
                                        </div>
                                        <p className={caption ? 'hidden' : 'hover:text-gray-500 py-3'}><BsHeart /></p>
                                    </div>
                                </div>}
                            <div className='flex justify-between text-2xl p-3 border-t w-full  bottom-0'>
                                <div className='flex space-x-4'>
                                    <button className='hover:text-gray-500'><BsHeart /></button>
                                    <button className='hover:text-gray-500'><BsChatLeftText /></button>
                                    <button className='hover:text-gray-500'><BsShare /></button>
                                </div>
                                <div>
                                    <button className='hover:text-gray-500'><BsBookmark /></button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Modal>
        </>
    )
}

export default DetailPost