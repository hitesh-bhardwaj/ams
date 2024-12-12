import Image from 'next/image'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { paraAnim  } from '../gsapAnimations'
import { Media } from '../media'
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
gsap.registerPlugin(ScrollTrigger)

const DNA = () => {
  paraAnim()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dna-card", {
        yPercent: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".dna-card-container",
          start: "top 80%",
          end: "bottom 40%",
        },
        stagger: 0.2,
      });
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);
  return (
  <>
  <section className='dna' id='dna'>
    <div className=' ml-auto mr-auto py-[7%] mobile:pb-[15%]'>
        <div className='mobile:w-full mobile:flex mobile:justify-center'>
        <h2
data-para-anim className="title-2 aeonik ml-[7%] mobile:ml-0">
            <span>Our DNA</span>
          </h2>
        </div>
        <Media at='desktop'>

        <div className='dna-card-container flex justify-between items-center p-[3%] px-[5vw] gap-[1.5vw] group '>
         <CardContainer className="inter-var ">
            <div className='dna-card px-[3%] py-[6%] w-[29vw] border-[1px] rounded-[3vw] bg-white/50 h-[30vw] dna-card1'>
                <CardBody className=" relative group/card h-auto p-6">
                <CardItem translateZ="100" className=' ml-[1vw] w-[5.5vw] h-[6vw] relative'> 
                <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                  src="/assets/about/accessible.webp"
                  alt="Accessible Image"
                  fill
                />  
                </CardItem>
                <CardItem className='mt-[3vw] mb-[2vw]'  translateZ="60"> 
                    <h2 className='text-[2.5vw] aeonik leading-[1] font-light text-[#111111]'>Accessible Care</h2>
                </CardItem>
                <CardItem className='content-p tracking-wide'  as="p"
          translateZ="60">
               Breaking barriers to care. AMS designs affordable medical solutions that bring quality healthcare to everyone, everywhere.
                </CardItem>
                </CardBody>
                </div>
            </CardContainer>


            <CardContainer className="inter-var">
            <div className='dna-card px-[3%] py-[6%] w-[29vw] border-[1px] rounded-[3vw] bg-white/50 h-[30vw] dna-card1'>
                <CardBody className=" relative group/card h-auto p-6">
                <CardItem translateZ="100" className=' ml-[1vw] w-[5.5vw] h-[6vw] relative'> 
                <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
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
            <div className='dna-card px-[3%] py-[6%] w-[29vw] border-[1px] rounded-[3vw] bg-white/50 h-[30vw] dna-card1'>
                <CardBody className=" relative group/card h-auto p-6">
                <CardItem translateZ="100" className=' ml-[1vw] w-[5.5vw] h-[6vw] relative'> 
                <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                  src="/assets/about/ethics.webp"
                  alt="Accessible Image"
                  fill
                />
                
                </CardItem>
                <CardItem className='mt-[3vw] mb-[2vw]'  translateZ="60"> 
                    <h2 className='text-[2.5vw] aeonik leading-[1] font-light text-[#111111]'>Ethics and Integrity</h2>
                </CardItem>
                <CardItem className='content-p tracking-wide'  as="p"
          translateZ="60">
              We uphold ethical standards and integrity in all business practices, ensuring transparency & honesty in building lasting relationships..
                </CardItem>
                </CardBody>
                </div>
            </CardContainer>

        </div>
        </Media>
        <Media at='tablet'>

        <div className=' mobile:pt-[10%] tablet:pt-[10%]'>

        <div className='w-full flex flex-col justify-center items-center gap-[7vw] tablet:flex-row tablet:flex-wrap tablet:gap-[2vw]'>

        <div className='w-[85vw] h-[100vw] border border-gray-200 py-[6vw] rounded-[7vw] flex flex-col gap-[5vw] justify-center bg-white/50 items-center px-[2vw] fadeUp tablet:w-[45vw] tablet:h-[55vw] tablet:rounded-[3vw]'>
          <div className='w-[15vw] h-[15vw] relative'>
          <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                  src="/assets/about/accessible.webp"
                  alt="Accessible Image"
                  fill
                />  
          </div>
          <div className='w-full text-center'>
          <h2 className='text-[2.5vw] aeonik leading-[1.2] font-light text-[#111111] tablet:text-[4vw] mobile:text-[8.2vw] '>Accessible Care</h2>

          </div>
          <div>
            <p className='content-p tracking-wide mobile:w-[100%] mobile:p-[5vw] mobile:text-center '>Breaking barriers to care. AMS designs affordable medical solutions that bring quality healthcare to everyone, everywhere.</p>
          </div>

        </div>
        <div className='w-[85vw] h-[100vw] border border-gray-200 py-[6vw] rounded-[7vw] flex flex-col gap-[5vw] justify-center bg-white/50 items-center px-[2vw] fadeUp tablet:w-[45vw] tablet:h-[55vw] tablet:rounded-[3vw]'>
          <div className='w-[15vw] h-[15vw] relative'>
          <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                  src="/assets/about/globe.webp"
                  alt="Accessible Image"
                  fill
                />  
          </div>
          <div className='w-full text-center'>
          <h2 className='text-[2.5vw] aeonik leading-[1.2] font-light text-[#111111] tablet:text-[4vw] mobile:text-[8.2vw] '>Global Standards</h2>

          </div>
          <div>
            <p className='content-p tracking-wide mobile:w-[100%] mobile:p-[5vw] mobile:text-center '>The AMS facility is equipped to produce cutting edge medical devices that meet the most stringent global specifications.</p>
          </div>

        </div>
        <div className='w-[85vw] h-[100vw] border border-gray-200 py-[6vw] rounded-[7vw] flex flex-col gap-[5vw] justify-center bg-white/50 items-center px-[2vw] fadeUp tablet:w-[45vw] tablet:h-[55vw] tablet:rounded-[3vw]'>
          <div className='w-[15vw] h-[15vw] relative'>
          <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                  src="/assets/about/ethics.webp"
                  alt="Accessible Image"
                  fill
                />  
          </div>
          <div className='w-full text-center'>
          <h2 className='text-[2.5vw] aeonik leading-[1.2] font-light text-[#111111] tablet:text-[4vw] mobile:text-[8.2vw] '>Ethics and Integrity</h2>

          </div>
          <div>
            <p className='content-p tracking-wide mobile:w-[100%] mobile:p-[5vw] mobile:text-center '>We uphold ethical standards and integrity in all business practices, ensuring transparency & honesty in building lasting relationships..</p>
          </div>

        </div>
        </div>
        </div>
        </Media>
        <Media at='mobile'>

        <div className=' mobile:pt-[10%] tablet:pt-[10%]'>

        <div className='w-full flex flex-col justify-center items-center gap-[7vw] tablet:flex-row tablet:flex-wrap tablet:gap-[2vw]'>

        <div className='w-[85vw] h-[100vw] border border-gray-200 py-[6vw] rounded-[7vw] flex flex-col gap-[5vw] justify-center bg-white/50 items-center px-[2vw] fadeUp tablet:w-[45vw] tablet:h-[55vw] tablet:rounded-[3vw]'>
          <div className='w-[15vw] h-[15vw] relative'>
          <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                  src="/assets/about/accessible.webp"
                  alt="Accessible Image"
                  fill
                />  
          </div>
          <div className='w-full text-center'>
          <h2 className='text-[2.5vw] aeonik leading-[1.2] font-light text-[#111111] tablet:text-[4vw] mobile:text-[8.2vw] '>Accessible Care</h2>

          </div>
          <div>
            <p className='content-p tracking-wide mobile:w-[100%] mobile:p-[5vw] mobile:text-center '>Breaking barriers to care. AMS designs affordable medical solutions that bring quality healthcare to everyone, everywhere.</p>
          </div>

        </div>
        <div className='w-[85vw] h-[100vw] border border-gray-200 py-[6vw] rounded-[7vw] flex flex-col gap-[5vw] justify-center bg-white/50 items-center px-[2vw] fadeUp tablet:w-[45vw] tablet:h-[55vw] tablet:rounded-[3vw]'>
          <div className='w-[15vw] h-[15vw] relative'>
          <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                  src="/assets/about/globe.webp"
                  alt="Accessible Image"
                  fill
                />  
          </div>
          <div className='w-full text-center'>
          <h2 className='text-[2.5vw] aeonik leading-[1.2] font-light text-[#111111] tablet:text-[4vw] mobile:text-[8.2vw] '>Global Standards</h2>

          </div>
          <div>
            <p className='content-p tracking-wide mobile:w-[100%] mobile:p-[5vw] mobile:text-center '>The AMS facility is equipped to produce cutting edge medical devices that meet the most stringent global specifications.</p>
          </div>

        </div>
        <div className='w-[85vw] h-[100vw] border border-gray-200 py-[6vw] rounded-[7vw] flex flex-col gap-[5vw] justify-center bg-white/50 items-center px-[2vw] fadeUp tablet:w-[45vw] tablet:h-[55vw] tablet:rounded-[3vw]'>
          <div className='w-[15vw] h-[15vw] relative'>
          <Image
                  className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                  src="/assets/about/ethics.webp"
                  alt="Accessible Image"
                  fill
                />  
          </div>
          <div className='w-full text-center'>
          <h2 className='text-[2.5vw] aeonik leading-[1.2] font-light text-[#111111] tablet:text-[4vw] mobile:text-[8.2vw] '>Ethics and Integrity</h2>

          </div>
          <div>
            <p className='content-p tracking-wide mobile:w-[100%] mobile:p-[5vw] mobile:text-center '>We uphold ethical standards and integrity in all business practices, ensuring transparency & honesty in building lasting relationships..</p>
          </div>

        </div>
        </div>
        </div>
        </Media>

    </div>

  </section>
  </>
  )
}

export default DNA;