import React from 'react'
import Image from 'next/image'

const UniqueCard=({src,title,para})=>{
    return(
        <>
        <div className='rounded-[1.5vw] glassmorphism border border-[#DADADA]flex flex-col  items-center justify-center p-[2vw] w-[35vw]'>
            <div className='w-full h-full relative flex justify-end'>
                <Image src={src} height={80} width={80} alt='unique card'/>
            </div>
            <p className='text-[2vw] font-medium w-[50%] h-[6vw]'>{title}</p>
            <p className='text-[1.675vw] font-light'>{para}</p>
            </div>
        </>
    )
}

const Unique = () => {
  return (
    <section id="unique">
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

        <div className="w-full h-full mt-[5vw] flex items-center justify-between gap-[2vw]">
            <UniqueCard src={"/assets/reloads/unique-card1.png"} title={"Less Stress:"} para={"Graduated compression for reduced tissue trauma"}/>
            <UniqueCard src={"/assets/reloads/unique-card2.png"} title={"Superior Performance:"} para={"Reliable results across all tissue types"}/>
            <UniqueCard src={"/assets/reloads/unique-card3.png"} title={"Greater Perfusion:"} para={"Enhanced staple line integration."}/>
         
        </div>

        <div className="absolute h-[100%] w-[100vw]">
          <Image
            src="/assets/poweredlc/surgical-bg.png"
            fill
            alt="surgical bg"
            className="object-cover z-[-1]"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Unique