import React from 'react'
import { BsDoorOpenFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from 'react-icons/fa';
import { TextField } from '@mui/material';

const Index = () => {
    const navigate = useNavigate();

    const isLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <>
            <div className='flex justify-center items-center w-full h-svh p-4 font-medium'>
                <div>
                    <div className='flex items-center gap-4'>
                        <img src={require('../../../assets/image/profile.png')} alt="profile" className='aspect-square rounded-full w-32' />
                        <button className='bg-gray-200 h-fit px-4 py-2 rounded-full flex items-center gap-2'><FaPenToSquare /> Edit</button>
                        <button className='bg-red-500 h-fit px-4 py-2 rounded-full flex items-center gap-2 text-white'><FaTrashAlt /> Delete</button>
                    </div>
                    <div className='my-6 flex flex-col gap-4'>
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            defaultValue="Username"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Fullname"
                            defaultValue="Fullname"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Bio"
                            defaultValue="Bio"
                            multiline
                            rows={6}
                        />
                    </div>
                    <button onClick={isLogout} className='px-4 py-2 bg-red-800 hover:bg-red-600 rounded-full flex items-center gap-2 text-white'> <BsDoorOpenFill />Logout</button>
                </div>
            </div>
        </>
    )
}

export default Index