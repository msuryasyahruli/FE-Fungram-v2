import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const SignIn = () => {
    const navigate = useNavigate();

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
                        title: "Error",
                        text: res.data.message,
                        icon: "info"
                    });
                } else if (res.data.message === "Password is incorrect") {
                    Swal.fire({
                        title: "Error",
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
                    <button onClick={userSubmit} className='my-6 bg-blue-700 px-5 py-2 rounded-sm text-white hover:bg-blue-600'>Sign In</button>
                    <p>Don’t have Funtechgram account? <span><Link to={'/register'} className='text-red-500'>Sign Up</Link></span></p>
                </div>
            </div>
        </>
    )
}

export default SignIn