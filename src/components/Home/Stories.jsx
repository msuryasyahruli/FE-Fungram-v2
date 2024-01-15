import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Stories = () => {
    return (
        <>
            <div className='max-w-[600px] my-4'>
                <Swiper
                    slidesPerView={8}
                // breakpoints={{
                //     768: {
                //         slidesPerView: 5,
                //         // spaceBetween: 20,
                //     },
                //     992: {
                //         slidesPerView: 7,
                //         // spaceBetween: 40,
                //     },
                //     1200: {
                //         slidesPerView: 8,
                //         // spaceBetween: 50,
                //     },
                //     1400: {
                //         slidesPerView: 9,
                //         // spaceBetween: 50,
                //     },
                // }}
                >
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                    <SwiperSlide className='text-center'><img src={require("../../assets/image/profile.png")} alt="profilePic" className='p-1 rounded-full' /> <p>name</p> </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Stories