import React from 'react'
import Content from './Content'
// import Stories from './Stories'
import Suggested from './Suggested'
import Header from './Header'

const Index = () => {
    return (
        <>
            <div className='flex w-full px-10 md:px-0'>
                <section className='flex flex-col items-center w-full'>
                    <Header />
                    {/* <Stories /> */}
                    <Content />
                </section>
                <section className='w-96 mx-10 lg:hidden'>
                    <Suggested />
                </section>
            </div>
        </>
    )
}

export default Index