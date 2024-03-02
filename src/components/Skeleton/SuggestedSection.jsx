import React from 'react'

const SuggestedSection = () => {
    const [length] = React.useState(Array.from({ length: 5 }))

    return (
        <>
            {length.map((item, i) => (
                <div key={i} role='status' className="max-w-sm animate-pulse flex items-center gap-2">
                    <div className="h-12 w-12 bg-gray-200 rounded-full dark:bg-gray-700 my-2" />
                    <div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2" />
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default SuggestedSection