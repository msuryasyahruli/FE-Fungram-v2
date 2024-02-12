import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const SignIn = () => {
    // const navigate = useNavigate();

    const [userData, setUserData] = useState({
        user_email: "",
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
            .post(`${process.env.REACT_APP_API_KEY}/users/login`, userData)
            .then((res) => {
                if (res.data.message === "Email is incorrect") {
                    Swal.fire({
                        text: res.data.message,
                        icon: "info"
                    });
                } else if (res.data.message === "Password is incorrect") {
                    Swal.fire({
                        text: res.data.message,
                        icon: "info"
                    });
                } else {
                    Swal.fire({
                        title: "Good job!",
                        text: "Login Success",
                        icon: "success"
                    });
                    setTimeout(function () {
                        // navigate("/");
                        window.location.reload()
                    }, 1000)
                    localStorage.setItem("token", res.data.data.token);
                    localStorage.setItem("userId", res.data.data.user_id);
                    localStorage.setItem("userNick", res.data.data.user_nickname);
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Account doesnt exist!",
                });
                console.log(err);
            });
    };

    return (
        <>
            <div className='grid justify-center items-center h-svh'>
                <div className='max-w-96 p-3 text-center items-center'>
                    <img src={require('../../assets/image/FuntechGramLogoB.png')} alt="logo" className='p-10' />
                    <div className='flex-col flex gap-2'>
                        <input type="email" placeholder='Email' name='user_email' id='user_email' onChange={userChange} className='border-b py-3 outline-none' />
                        <input type="password" placeholder='Password' name='user_password' id='user_password' onChange={userChange} className='border-b py-3 outline-none' />
                    </div>
                    {!userData.user_email || !userData.user_password ? 
                    <button onClick={userSubmit} disabled className='my-6 border-b-2 px-5 py-2 border-gray-400 text-gray-400'>Sign In</button> :
                    <button onClick={userSubmit} className='my-6 border-b-2 border-blue-700 px-5 py-2 text-blue-700 hover:font-medium'>Sign In</button> }
                    <p>Don’t have Funtechgram account? <span><Link to={'/register'} className='text-red-500'>Register</Link></span></p>
                </div>
            </div>
        </>
    )
}

export default SignIn