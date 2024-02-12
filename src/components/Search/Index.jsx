import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
// import style from './search.module.css'

const Index = () => {
    const [input, setInput] = useState("")
    const [result, setResult] = useState([])
    const [data, setData] = useState([])

    const handleChange = (value) => {
        setInput(value);
        fetchData(value)
    };

    const fetchData = ((value) => {
        const result = data.filter((product) => {
            return (
                product &&
                product.product_name &&
                product.product_name.toLowerCase().includes(value)
            );
        });
        setResult(result);
    })

    useEffect(() => {
        axios.get(`https://blanja-backend-v2.vercel.app/products`)
            .then((res) => {
                setData(res.data.data)
            })
    }, [])

    return (
        <>
            <div className='flex justify-center w-full md:absolute md:top-0'>
                <div className='flex flex-col p-12 md:py-2 md:w-full'>
                    <div className="bg-gray-200 py-1 px-3 w-96 md:w-full rounded-full h-fit justify-between flex items-center gap-2">
                        <input
                            className="bg-transparent outline-none w-full"
                            type="text"
                            placeholder="Search"
                            value={input}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        <BsSearch />
                    </div>
                    {input === "" ? (
                        ""
                    ) : (
                        <div className="flex flex-col bg-blue-gray-100 rounded-md my-4 p-2 gap-1 max-h-48 overflow-auto w-full">
                            {result.map((result, id) => (
                                <button className="text-start flex justify-between bg-blue-gray-200 p-2 items-center rounded" key={id}>
                                    {result.product_name}
                                    <BsSearch />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Index