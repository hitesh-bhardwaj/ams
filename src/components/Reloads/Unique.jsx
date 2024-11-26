import React from 'react'
import Image from 'next/image'

const UniqueCard=({src,title,para})=>{
    return(
        <>
        <div className='rounded-[1.5vw] glassmorphism border border-[#DADADA] flex flex-col  items-center justify-center p-[2vw] w-[28vw] h-[18vw] mobile:w-[75vw] mobile:h-[105vw] mobile:rounded-[9vw] mobile:gap-[5vw]  hover:bg-white hover:shadow-xl hover:drop-shadow-xl duration-300 transition-all ease'>
            <div className='w-full h-[5vw] left-[-10%] absolute flex justify-end mobile:justify-start mobile:h-[30vw] mobile:w-[30vw] items-center'>
                <Image src={src} height={80} width={80} alt='unique card' className='object-contain w-full h-full'/>
            </div>
            <div className='flex flex-col items-start justify-between pt-[4vw] gap-[1vw] relative'>
            <p data-para-anim className='text-[1.67vw] font-medium w-[50%] h-[6vw] mobile:text-[8vw] mobile:w-full mobile:text-center mobile:leading-[1]'>{title}</p>
            <p data-para-anim className='text-[1.67vw] font-light mobile:text-[5.5vw] mobile:leading-[1.2] mobile:w-[90%] mobile:text-center mobile:mt-[7vw]'>{para}</p>

            </div>
            </div>
        </>
    )
}

const Unique = () => {
  return (
    <section id="unique" className='w-screen overflow-hidden relative'>
    <div className="w-screen h-full container-lg">
      <div className="w-full h-full flex flex-col items-center justify-center py-[5vw] relative">
        <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
          <h2
            data-para-anim
            className="title-2 aeonik text-center mobile:text-center"
          >
            Unique Design, Universal Benefits
          </h2>
        </div>
       <div className='mobile:w-screen  mobile:overflow-scroll mobile:px-[5%]'>

        <div className="w-full h-full mt-[5vw] flex items-center justify-between gap-[2vw] mobile:w-[230vw] mobile:gap-[5vw]">
            <UniqueCard src={"/assets/reloads/unique-card1.png"} title={"Less Stress:"} para={"Graduated compression for reduced tissue trauma"}/>
            <UniqueCard src={"/assets/reloads/unique-card2.png"} title={"Superior Performance:"} para={"Reliable results across all tissue types"}/>
            <UniqueCard src={"/assets/reloads/unique-card3.png"} title={"Greater Perfusion:"} para={"Enhanced staple line integration."}/>
         
        </div>
       </div>

      </div>
    </div>
        <div className="absolute h-[100%] w-[100vw] z-[-1] top-0 left-0">
          <Image
            src="/assets/poweredlc/surgical-bg.png"
            fill
            alt="surgical bg"
            className="object-cover"
          />
        </div>
  </section>
  )
}

export default Unique