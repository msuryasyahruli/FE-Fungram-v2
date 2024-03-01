import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import SuggestedSection from '../../Skeleton/SuggestedSection';

const Suggested = () => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState([])
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/users/profile`, {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            .then((res) => {
                setUser(res.data.data);
                setIsLoading(false)
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
    }, []);

    const [users, setUsers] = useState([])
    const sliceSlice = users.slice(-5)
    const data = sliceSlice.reverse()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/users`)
            .then((res) => {
                setUsers(res.data.data)
            })
    }, [])

    // const name = [{nick:'account 1'},{nick:'account 2'},{nick:'account 3'},{nick:'account 4'},{nick:'account 5'}]

    return (
        <>
            <div className='my-4'>
                <div className='flex py-2 mb-2 justify-between items-center'>
                    {isLoading ?
                        <div role='status' className="max-w-sm animate-pulse flex items-center gap-2">
                            <div className="h-12 w-12 bg-gray-200 rounded-full dark:bg-gray-700" />
                            <div>
                                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2" />
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28" />
                            </div>
                        </div> :
                        <div className='flex cursor-pointer items-center'>
                            <img src={require("../../../assets/image/profile.png")} alt="profilePic" className='w-12 h-12 rounded-full ' />
                            <div className='px-2'>
                                <p className='font-semibold'>{user.user_nickname}</p>
                                <p className='text-sm text-gray-400'>{user.user_fullname}</p>
                            </div>
                        </div>}
                    <div className='cursor-pointer'>
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-500 font-medium'>Suggested for you</p>
                    <p>See all</p>
                </div>
                {isLoading ?
                    <SuggestedSection /> :
                    data.map((data, Index) => (
                        <div key={Index} className='flex py-2 justify-between items-center'>
                            <div className='flex'>
                                <img src={require("../../../assets/image/profile.png")} alt="profilePic" className='w-12 h-12 rounded-full ' />
                                <div className='px-2'>
                                    <p className='font-semibold'>{data.user_nickname}</p>
                                    <p className='text-gray-400'>{data.user_fullname}</p>
                                </div>
                            </div>
                            <p className='text-blue-500'>Follow</p>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Suggested