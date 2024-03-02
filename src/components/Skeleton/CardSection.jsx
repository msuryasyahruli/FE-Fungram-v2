import React from 'react'

const CardSection = () => {
    const [length] = React.useState(Array.from({ length: 3 }))
    
    return (
        <>
            {length.map((item, i) => (
                <div key={i} role='status' className="max-w-lg sm:w-screen animate-pulse">
                    <div className='flex items-center gap-2 sm:px-2'>
                        <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 my-2" />
                        <div className="h-3 w-24 bg-gray-200 rounded-full dark:bg-gray-700 my-2" />
                    </div>
                    <div className="h-72 w-[500px] sm:w-full bg-gray-200 rounded dark:bg-gray-700" />
                    <div className="h-3 w-16 bg-gray-200 rounded-full dark:bg-gray-700 my-3" />
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 my-2" />
                    <div className="h-2.5 w-3/4 bg-gray-200 rounded-full dark:bg-gray-700 my-2" />
                    <hr />
                </div>
            ))}
        </>
    )
}

export default CardSection