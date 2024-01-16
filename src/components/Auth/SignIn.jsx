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
                        navigate("/");
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
            <div>
                <input type="email" placeholder='Email' name='user_email' id='user_email' onChange={userChange} />
                <input type="password" placeholder='Password' name='user_password' id='user_password' onChange={userChange} />
                <button onClick={userSubmit}>Sign In</button>
                <p>Don’t have Funtechgram account? <span><Link to={'/register'} className='text-red-500'>Sign Up</Link></span></p>
            </div>
        </>
    )
}

export default SignIn