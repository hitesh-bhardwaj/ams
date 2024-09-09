import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { paraAnim } from '../gsapAnimations'
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
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
        <div className='dna-card-container flex justify-between items-center p-[3%] gap-[1.5vw] group'>
         <CardContainer className="inter-var">
            <div className='dna-card px-[3%] py-[6%] w-[30vw] border-[1px] rounded-[40px] bg-white/50 h-[30vw] dna-card1 '>
                <CardBody className=" relative group/card h-auto p-6">
                <CardItem translateZ="100" className=' ml-[1vw] w-[5.5vw] h-[6vw] relative '> 
                <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl"
                  src="/assets/about/accessible.webp"
                  alt="Accessible Image"
                  fill
                />
                
                </CardItem>
                <CardItem className='mt-[3vw] mb-[2vw]'  translateZ="60"> 
                    <h2 className='text-[2.5vw] aeonik leading-[1] font-light text-[#111111]'>Accessible Care</h2>
                </CardItem>
                <CardItem className='content-p tracking-wide '  as="p"
          translateZ="60">
               Breaking barriers to care. AMS designs affordable medical solutions that bring quality healthcare to everyone, everywhere.
                </CardItem>
                </CardBody>
                </div>
            </CardContainer>


            <CardContainer className="inter-var">
            <div className='dna-card px-[3%] py-[6%] w-[30vw] border-[1px] rounded-[40px] bg-white/50 h-[30vw] dna-card1 '>
                <CardBody className=" relative group/card h-auto p-6">
                <CardItem translateZ="100" className=' ml-[1vw] w-[5.5vw] h-[6vw] relative '> 
                <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl"
                  src="/assets/about/globe.webp"
                  alt="Accessible Image"
                  fill
                />
                
                </CardItem>
                <CardItem className='mt-[3vw] mb-[2vw]'  translateZ="60"> 
                    <h2 className='text-[2.5vw] aeonik leading-[1] font-light text-[#111111]'>Global Standards</h2>
                </CardItem>
                <CardItem className='content-p tracking-wide '  as="p"
          translateZ="60">
              The AMS facility is equipped to produce cutting edge medical devices that meet the most stringent global specifications
                </CardItem>
                </CardBody>
                </div>
            </CardContainer>



            <CardContainer className="inter-var">
            <div className='dna-card px-[3%] py-[6%] w-[30vw] border-[1px] rounded-[40px] bg-white/50 h-[30vw] dna-card1 '>
                <CardBody className=" relative group/card h-auto p-6">
                <CardItem translateZ="100" className=' ml-[1vw] w-[5.5vw] h-[6vw] relative '> 
                <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl"
                  src="/assets/about/accessible.webp"
                  alt="Accessible Image"
                  fill
                />
                
                </CardItem>
                <CardItem className='mt-[3vw] mb-[2vw]'  translateZ="60"> 
                    <h2 className='text-[2.5vw] aeonik leading-[1] font-light text-[#111111]'>Ethics and Integrity</h2>
                </CardItem>
                <CardItem className='content-p tracking-wide '  as="p"
          translateZ="60">
              We uphold ethical standards and integrity in all business practices, ensuring transparency & honesty in building lasting relationships..
                </CardItem>
                </CardBody>
                </div>
            </CardContainer>

        </div>

    </div>

  </section>
  </>
  )
}

export default DNA;