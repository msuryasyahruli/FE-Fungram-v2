import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import createPostAction from '../../../config/redux/action/postsAction/createPostAction';

const Index = () => {
    const dispatch = useDispatch()
    const userId = localStorage.getItem('userId')
    const [data, setData] = useState({
        user_id: `${userId}`,
        post_captions: ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        // console.log(addPost);
    };

    const [photo, setPhoto] = useState(null);
    const inputRef = useRef(null);
    const handleImgClick = () => {
        inputRef.current.click();
    };

    const [preview, setPreview] = useState();
    const handleUpload = (e) => {
        const img = e.target.files[0];
        setPhoto(img);
        if (img.size > 2097152) {
            Swal.fire({
                icon: "error",
                title: "File size should not be more than 2mb",
            })
            setPreview()
        } else {
            setPreview(URL.createObjectURL(img));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPostAction(data, photo))
    };

    return (
        <>
            <div className='w-full justify-center minmd:items-center grid '>
                <form onSubmit={handleSubmit}>
                    <div className='max-w-[60rem] px-4 py-8 md:px-2'>
                        <div onClick={handleImgClick}>
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="avatar"
                                    className="w-full rounded"
                                />
                            ) : (
                                <img src={require("../../../assets/image/add img.png")} alt="addImg" />
                            )}
                            <input
                                className="border hidden"
                                type="file"
                                ref={inputRef}
                                name="photo"
                                onChange={handleUpload}
                            />
                        </div>
                        <div>
                            <textarea name="post_captions" id="captions" placeholder='Captions' className='w-full my-4 bg-gray-200 p-2 rounded outline-none' value={data.post_captions} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className={!photo ? 'hidden' : 'bg-light-blue-700 text-white px-10 py-2 rounded hover:bg-light-blue-800 active:bg-gray-900'}>Post</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Index