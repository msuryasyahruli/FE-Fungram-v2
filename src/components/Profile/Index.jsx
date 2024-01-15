import React from 'react'
import Header from './Header'
import Content from './Content'

const Index = () => {
    return (
        <>
            <div className='w-full h-svh minmd:py-8 justify-center flex'>
                <div className='w-fit'>
                    <Header />
                    {/* <hr /> */}
                    <Content />
                </div>
            </div>
        </>
    )
}

export default Index