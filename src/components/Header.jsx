import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
    return (
        <div className='pt-20'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="container mx-auto px-4">
                        <div className="bg-cover bg-center h-[500px] shadow-lg bg-[url('https://media.themoviedb.org/t/p/w500_and_h282_face/pIm2w8ohhYhUwT4nhNmh9QAzdk0.jpg')]" >
                            <div className="bg-black bg-opacity-70 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold text-white mb-4">Welcome to Movie Portal</h1>
                                    <p className="text-white mb-8">Explore and manage your favorite movies effortlessly.</p>
                                    <a href="#" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">Explore Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container mx-auto px-4">
                        <div className="bg-cover bg-center h-[500px] shadow-lg bg-[url('https://media.themoviedb.org/t/p/w500_and_h282_face/3sh2UA2Q2l7fihgoj1LhFFPTlIM.jpg')]">
                            <div className="bg-black bg-opacity-70 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold text-white mb-4">Welcome to Movie Portal</h1>
                                    <p className="text-white mb-8">Explore and manage your favorite movies effortlessly.</p>
                                    <a href="#" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">Explore Now</a>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="container mx-auto px-4">
                        <div className="bg-cover bg-center h-[500px]  shadow-lg bg-[url('https://media.themoviedb.org/t/p/w500_and_h282_face/3rxoUVI74z7rTWYSAC2q3Uax2nC.jpg')]" >
                            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold text-white mb-4">Welcome to Movie Portal</h1>
                                    <p className="text-white mb-8">Explore and manage your favorite movies effortlessly.</p>
                                    <a href="#" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">Explore Now</a>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="container mx-auto px-4">
                    <div className="bg-cover bg-center h-[500px] shadow-lg bg-[url('https://media.themoviedb.org/t/p/w500_and_h282_face/1pmXyN3sKeYoUhu5VBZiDU4BX21.jpg')]" >
                        <div className="bg-black bg-opacity-70 h-full flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-white mb-4">Welcome to Movie Portal</h1>
                                <p className="text-white mb-8">Explore and manage your favorite movies effortlessly.</p>
                                <a href="#" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">Explore Now</a>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="container mx-auto px-4">
                    <div className="bg-cover bg-center h-[500px] shadow-lg bg-[url('https://media.themoviedb.org/t/p/w500_and_h282_face/au3o84ub27qTZiMiEc9UYzN74V3.jpg')]" >
                        <div className="bg-black bg-opacity-70 h-full flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-white mb-4">Welcome to Movie Portal</h1>
                                <p className="text-white mb-8">Explore and manage your favorite movies effortlessly.</p>
                                <a href="#" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">Explore Now</a>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="container mx-auto px-4">
                    <div className="bg-cover bg-center h-[500px] shadow-lg bg-[url('https://media.themoviedb.org/t/p/w500_and_h282_face/35OoC3JxHXrAOg4FAa2DrPCzUX9.jpg')]" >
                        <div className="bg-black bg-opacity-70 h-full flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-white mb-4">Welcome to Movie Portal</h1>
                                <p className="text-white mb-8">Explore and manage your favorite movies effortlessly.</p>
                                <a href="#" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">Explore Now</a>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Header;