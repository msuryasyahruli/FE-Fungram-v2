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
    ]

    return (
        <>
            <div className='py-6 h-fit w-full justify-center flex'>
                <div className='grid grid-cols-3 gap-1 sm:gap-0.5 max-w-[60rem]'>
                    {image.map((img, Index) => (
                        <div key={Index} className='aspect-square'>
                            <img src={gambar} alt="image 1" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Content