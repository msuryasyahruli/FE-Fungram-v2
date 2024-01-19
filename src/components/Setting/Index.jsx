import React from 'react'
import { BsDoorOpenFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();

    const isLogout = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload()
    };

    return (
        <>
            <div className='flex justify-center items-center w-full'>
                <button onClick={isLogout} className='px-4 py-2 bg-red-500 rounded text-9xl'> <BsDoorOpenFill/></button>
            </div>
        </>
    )
}

export default Index