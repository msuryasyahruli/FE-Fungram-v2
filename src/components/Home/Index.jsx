import React from 'react'
import Content from './Content'
import Stories from './Stories'
import Suggested from './Suggested'

const Index = () => {
  return (
    <div className='flex w-full px-10 md:px-0'>
      <div className='flex flex-col items-center w-full'>
        <Stories />
        <Content />
        {/* <Content />
        <Content /> */}
      </div>
      <div className='w-96 mx-10 lg:hidden'>
        <Suggested/>
      </div>
    </div>
  )
}

export default Index