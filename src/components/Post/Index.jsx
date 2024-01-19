import React, { useRef, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

const Index = () => {
    const userId = localStorage.getItem('userId')
    const [addPost, setAddPost] = useState({
        user_id: `${userId}`,
        post_captions: ""
    })

    const handleChange = (e) => {
        setAddPost({
            ...addPost,
            [e.target.name]: e.target.value,
        });
        // console.log(addPost);
    };

    const [photo, setPhoto] = useState(null);
    const inputRef = useRef(null);
    const handleImgClick = () => {
        inputRef.current.click();
    };

    const [preview, setPreview] = useState(null);
    const handleUpload = (e) => {
        const img = e.target.files[0];
        setPhoto(img);
        setPreview(URL.createObjectURL(img));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("user_id", addPost.user_id);
        formData.append("post_captions", addPost.post_captions);
        formData.append("post_image", photo);
        axios
            .post(`${process.env.REACT_APP_API_KEY}/post`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: res.data.message,
                });
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            })
            .catch((err) => {
                console.log(err);
                alert(err.message);
            });
    };

    return (
        <>
            <div className='w-full h-svh justify-center minmd:items-center grid '>
                <form onSubmit={handleSubmit}>
                    <div className='max-w-[60rem] px-4 py-8 md:px-2'>
                        <button onClick={handleImgClick}>
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="avatar"
                                    className="max-h-96 rounded"
                                />
                            ) : (
                                <img src={require("../../assets/image/add img.png")} alt="addImg" />
                            )}
                            <input
                                className="border hidden"
                                type="file"
                                ref={inputRef}
                                name="photo"
                                onChange={handleUpload}
                            />
                        </button>
                        <div>
                            <textarea name="post_captions" id="captions" placeholder='Captions' className='w-full my-4 bg-gray-200 p-2 rounded outline-none' value={addPost.post_captions} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className='bg-light-blue-700 px-10 py-2 rounded hover:bg-light-blue-800 active:bg-gray-900'>Post</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Index