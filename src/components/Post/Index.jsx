import React from 'react'

const Index = () => {
    return (
        <>
            <div className='w-full h-svh justify-center minmd:items-center grid '>
                <div className='max-w-[60rem] px-4 py-8 md:px-2'>
                    <button>
                        <img src={require('../../assets/image/add img.png')} alt="add" />
                    </button>
                    <div>
                        <textarea name="captions" id="captions" placeholder='Captions' className='w-full my-4 bg-gray-800 p-2 rounded outline-none'></textarea>
                    </div>
                    <button className='bg-light-blue-700 px-10 py-2 rounded hover:bg-light-blue-800 active:bg-gray-900'>Post</button>
                </div>
            </div>
        </>
    )
}

export default Index