import React from 'react'
import { paraAnim } from '@/components/gsapAnimations';
const Hero = () => {
  paraAnim()
  return (
    <section className=" career-container" id='hero'>
    <div className="px-[10%] relative">
      <div className="flex h-dvh w-full flex-col justify-center items-start">
        <div className="">
          <h1 data-para-anim className="title-1 aeonik drop-shadow-md  leading-[1]">
            <span className="leading-[1.2] overflow-hidden">
            Join Our Mission to Create a 
            </span>
            <br />
            <span className="leading-[1.2] overflow-hidden">
            Healthier World
            </span>
          </h1>
          <p data-para-anim className="w-[25vw] mt-[4vw] mb-[4vw] content-p">
            
            Be a part of a team making a meaningful difference in healthcare.
           
          </p>
        </div>
        <div className='w-full'>
            <div className='h-[3vw] w-[3vw] relative top-[40%] left-[2%] z-[2]'>
            <img src='/assets/career/search.png' alt='search-icon'/>
            </div>
            <input type='text' placeholder='Explore job openings' className='w-[95%] h-[4vw] px-[7%] rounded-[40px] outline-0 text-[1.3vw] bg-white/80  placeholder-[#143CA3] placeholder:opacity-75 text-[#143CA3] glassmorphism'/>

            <div className='relative left-[90%] bottom-[35%]'>
                <div className='bg-[#143CA3] w-[3vw] h-[3vw] text-[#ffffff] rounded-[50%] flex items-center justify-center p-[0.8%] cursor-pointer '>
                <svg viewBox="0 0 22 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                        <g className="btn-path" fill="#ffffff">
                            <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="#ffffff"/>
                            <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="#ffffff"/>
                        </g>
                        
                    </svg>

                </div>
            </div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero