import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { paraAnim } from '../gsapAnimations'
gsap.registerPlugin(useGSAP,ScrollTrigger)

const DNA = () => {
  paraAnim()
  useGSAP(()=>{
   
      
    
    gsap.from(".dna-card",{
      yPercent:50,
      opacity:0,
     
      duration:1,
      scrollTrigger:{
        trigger:".dna-card-container",
      
        start:"top 80%",
        end:"bottom 40%",
       
      },
      stagger:0.2
      
    })

  })
  return (
  <>
  <section className='dna' id='dna'>
    <div className=' ml-auto mr-auto py-[7%]'>
        <div>
        <h2 data-para-anim className="title-2 aeonik ml-[7%]">
            <span>Our DNA</span>
          </h2>
        </div>
        <div className='dna-card-container flex justify-between items-center p-[5%] gap-[2vw] '>
            <div className='dna-card px-[3%] py-[6%] w-[30vw] border-[1px] rounded-[40px] bg-white/50 h-[30vw] dna-card1 '>
                <div className=' ml-[1vw] w-[5.5vw] h-[6vw] relative'>
                <Image
                  className="rounded-[20px] "
                  src="/assets/about/accessible.png"
                  alt="Accessible Image"
                  fill
                  
                />
                </div>
                <div className='mt-[3vw] mb-[2vw]'>
                    <h2 className='text-[2.5vw] aeonik leading-[1] font-light text-[#111111]'>Accessible Care</h2>
                </div>
                <div className='content-p tracking-wide '>
                <p>Breaking barriers to care. AMS designs affordable medical solutions that bring quality healthcare to everyone, everywhere.</p>
                </div>

            </div>

            <div className='dna-card px-[2%] py-[6%] w-[30vw] border-[1px] bg-white/50 rounded-[40px] h-[30vw] '>
                <div className=' ml-[1vw] w-[7vw] h-[6vw] relative'>
                <Image
                  className="rounded-[20px] "
                  src="/assets/about/globe.png"
                  alt="Accessible Image"
                 fill
                />
                </div>
                <div className='mt-[3vw] mb-[2vw]'>
                    <h2 className='text-[2.5vw] aeonik leading-[1] font-light text-[#111111]'>Global Standards</h2>
                </div>
                <div className='content-p tracking-wide '>
                <p>The AMS facility is equipped to produce cutting edge medical devices that meet the most stringent global specifications</p>
                </div>

            </div>


            <div className='dna-card px-[2%] py-[6%] w-[30vw] border-[1px] bg-white/50 rounded-[40px] h-[30vw] '>
                <div className=' ml-[1vw] w-[7vw] h-[6vw] relative'>
                <Image
                  className="rounded-[20px] "
                  src="/assets/about/ethics.png"
                  alt="Accessible Image"
                  fill
                />
                </div>
                <div className='mt-[3vw] mb-[2vw]'>
                    <h2 className='text-[2.5vw] aeonik leading-[1] font-light text-[#111111]'>Ethics and Integrity</h2>
                </div>
                <div className='content-p tracking-wide '>
                <p>We uphold ethical standards and integrity in all business practices, ensuring transparency & honesty in building lasting relationships..</p>
                </div>

            </div>
           

        </div>

    </div>

  </section>
  </>
  )
}

export default DNA