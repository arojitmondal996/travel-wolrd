import SearchBox from '@/components/Helper/SearchBox';
import React from 'react';

const Hero = () => {
    return (
        <div className='relative w-full h-[128vh] sm:h-[100vh]'>
            {/* overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'>
            </div>
            {/* video */}
            <video
                src="/images/hero1.mp4"
                autoPlay
                muted
                loop
                preload="metadata" className='w-full h-full object-cover' />
            {/* text content */}
            <div className='absolute z-[100] text-white top-[30%] left-[10%] translate-x-[50%]translate-y-[50%]'>
                <div className='flex items-center justify-center flex-col'>
                    <div>
                        <h1 className='text-[25px] mb-2 md:mb-0 md:text-[35px] lg:text-[45px] tracking-[0.7rem]text-white font-bold uppercase'>Lets Enjoy The Nature</h1>
                        <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px]'>
                            Get the best prices on 2,000,000+ properties, worldwide
                        </p>
                    </div>
                    {/* search bar */}
                    <SearchBox/>
                </div>
            </div>
        </div>
    );
};

export default Hero;