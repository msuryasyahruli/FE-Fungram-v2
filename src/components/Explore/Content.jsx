import React from 'react'
import gambar from "../../assets/image/img28.jpg"

const Content = () => {
    const image = [
        {
            img: gambar
        },
        {
            img: gambar
        },
        {
            img: gambar
        },
        {
            img: gambar
        },
        {
            img: gambar
        },
        {
            img: gambar
        },
        {
            img: gambar
        },
        {
            img: gambar
        },
        {
            img: gambar
        },
    ]

    return (
        <>
            <div className='flex flex-wrap gap-1 justify-center py-6'>
                {image.map((img) => (
                    <div className='w-80 h-80'>
                        <img src={gambar} alt="image 1" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Content