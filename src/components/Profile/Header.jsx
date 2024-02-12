import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsGearFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/users/profile`, {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                if (err.response.data.message === "Token expired" || "Token invalid") {
                    localStorage.clear();
                    navigate("/");
                    window.location.reload()
                }
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

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

    const onLink =()=>{
        navigate('/setting')
    }
    
    return (
        <>
            <div className='justify-center minsm:pb-8'>
                <div className='border-b minmd:hidden absolute w-full h-12 top-0 bg-white flex items-center'>
                    <button className='justify-center items-center flex p-2' onClick={onLink}> <BsGearFill className='w-6 h-6' /> </button>
                </div>
                <div className='h-fit grid minsm:grid-cols-3 sm:flex'>
                    <div className='minmd:w-full h-fit flex justify-center md:m-4 minsm:col-span-1'>
                        <div className='aspect-square w-36 h-36 sm:w-20 sm:h-20'>
                            <img src={require("../../assets/image/profile.png")} alt="profile" className='rounded-full w-full h-full object-cover cursor-pointer' />
                        </div>
                    </div>
                    <div className='minsm:col-span-2 items-center sm:flex md:my-4'>
                        <div className='minsm:flex items-center gap-4 py-1'>
                            <p className='text-xl'>{user.user_nickname}</p>
                            <button className='h-8 px-4 rounded-lg bg-blue-gray-300 sm:my-2'>Edit profile</button>
                            <button className='justify-center items-center flex md:hidden'> <BsGearFill className='w-6 h-6' /> </button>
                        </div>
                        <div className='sm:hidden'>
                            <div className='flex text-center gap-10 my-4'>
                                <p><span className='font-semibold'>{posts.length}</span> Posts</p>
                                <p><span className='font-semibold'>0</span> Followers</p>
                                <p><span className='font-semibold'>0</span> Following</p>
                            </div>
                            <div>
                                <p>{user.user_fullname}</p>
                                <p>{user.user_bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='minsm:hidden'>
                    <div className='px-4 pb-2'>
                        <p>{user.user_fullname}</p>
                        <p>{user.user_bio}</p>
                    </div>
                    <div className='grid grid-cols-3 text-center py-2 border-y'>
                        <div><p className='font-semibold'>{posts.length}</p> <p>Posts</p></div>
                        <div><p className='font-semibold'>0</p> <p>Followers</p></div>
                        <div><p className='font-semibold'>0</p> <p>Following</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header