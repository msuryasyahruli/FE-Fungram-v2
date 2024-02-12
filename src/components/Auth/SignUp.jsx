import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        user_email: "",
        user_fullname: "",
        user_nickname: "",
        user_password: ""
    });

    const userChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
        // console.log(userData);
    };

    const userSubmit = (e) => {
        axios
            .post(`${process.env.REACT_APP_API_KEY}/users/register`, userData)
            .then((res) => {
                if (res.data.message === "User created") {
                    Swal.fire("Success", "Register success", "success");
                    navigate("/");
                } else {
                    Swal.fire({
                        text: res.data.message,
                        icon: "info"
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className='grid justify-center items-center h-svh'>
                <div className='w-96 p-3 text-center items-center'>
                    <img src={require('../../assets/image/FuntechGramLogoB.png')} alt="logo" className='p-10' />
                    <div className='flex-col flex gap-2'>
                        <input type="email" placeholder='Email' name='user_email' id='user_email' onChange={userChange} className='border-b py-3 outline-none' />
                        <input type="text" placeholder='Fullname' name='user_fullname' id='user_fullname' onChange={userChange} className='border-b py-3 outline-none' />
                        <input type="text" placeholder='Username' name='user_nickname' id='user_nickname' onChange={userChange} className='border-b py-3 outline-none' />
                        <input type="password" placeholder='Password' name='user_password' id='user_password' onChange={userChange} className='border-b py-3 outline-none' />
                    </div>
                    {!userData.user_email ? <button onClick={userSubmit} className='my-6 border-b-2 px-5 py-2 border-gray-400 text-gray-400' disabled>Sign Up</button> :
                    <button onClick={userSubmit} className='my-6 border-b-2 border-blue-700 px-5 py-2 text-blue-700 hover:font-medium'>Sign Up</button> }
                    <p>Already have Funtechgram account? <span><Link to={'/'} className='text-red-500'>Login</Link></span></p>
                </div>
            </div>
        </>
    )
}

export default SignUp