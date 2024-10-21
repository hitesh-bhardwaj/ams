import React from 'react'
import Image from 'next/image'

const Edge = ({card1, card2, card3}) => {
  return (
   <>
   <section className=''>
    <div className='w-screen h-screen container-lg mb-[10%] mobile:h-[200vh] '>
      <div className='w-full h-full flex flex-col items-center justify-center gap-[5vw]'>
        <div>
          <h2 className='title-2 aeonik'>ADVACRYL Edge</h2>
        </div>

        <div className='flex items-center justify-evenly gap-[3vw] w-full mobile:flex-col mobile:gap-[10vw]'>

        <div className='edge-card px-[3vw] py-[3vw] h-[40vw] w-[21vw] border flex flex-col items-center justify-center gap-[5vw] rounded-[40px] glassmorphism  mobile:w-[80vw] mobile:h-[145vw] mobile:order-1 mobile:text-center'>
          <div>
          <h3 className='text-[2.5vw] font-light mobile:text-[8.2vw]'>{card1.title}</h3>
          </div>
          <div className='w-[17.5vw] h-[12vw] mobile:h-[50vw] mobile:w-[65vw]'>
            <div className='w-full h-full relative'>
              <Image
              src={card1.src}
              fill
              alt="Magnifying glass"
              className="object-contain"
              />
            </div>
          </div>
          <div>
          <p className='text-[1.65vw] font-light mobile:text-[5.5vw]'>{card1.para}</p>
          
          </div>

        </div>

        <div className='edge-card py-[1.5vw] px-[1vw] h-[40vw] w-[43vw] border flex flex-col items-center justify-center gap-[5vw] rounded-[40px] glassmorphism mobile:w-[80vw] mobile:h-[145vw]  mobile:text-center '>
          <div className='flex items-center justify-center mobile:flex-col'>
          <span className='block w-[10.7vw] h-[1.65vw] relative mr-[0.5vw] mobile:w-[36vw] mobile:h-[6vw]'>
          <Image src='/assets/advacryl/advatray-blue.png' fill alt='advatray' className=''/>
          </span>
          <p className='text-[1.5vw] font-light  mobile:text-[4.2vw]'>{card2.title}</p>
          </div>
          <div className='w-[28vw] h-[25vw] mobile:h-[50vw] mobile:w-[65vw]'>
            <div className='w-full h-full relative'>
              <Image
              src={card2.src}
              fill
              alt="advacryl tray"
              className="object-contain"
              />
            </div>
          </div> 
          <div className='relative  px-[1vw] py-[2vw]'>
  <img src='/assets/advacryl/purple-rectangle.png' alt='background' className='absolute inset-0 w-full h-full object-cover' />
  <div className='relative flex items-center justify-center mobile:flex-col'>
    <span className='block w-[5vw] h-[1vw] relative mr-[0.5vw]'>
      <Image src='/assets/advacryl/advatray-white.png' fill alt='advatray' className='object-contain' />
    </span>
    <p className='text-white text-[1.1vw] font-light mobile:text-[5.5vw]'>
      {card2.para}
    </p>
  </div>
</div>

</div>

        <div className='edge-card px-[3vw] py-[3vw] h-[40vw] w-[21vw] border flex flex-col items-center justify-center gap-[5vw] rounded-[40px] glassmorphism mobile:w-[80vw] mobile:h-[145vw] mobile:text-center mobile:order-2'>
          <div>
          <h3 className='text-[2.5vw] font-light mobile:text-[8.2vw]'>{card3.title}</h3>
          </div>
          <div className='w-[17.5vw] h-[12vw] mobile:h-[50vw] mobile:w-[65vw]'>
            <div className='w-full h-full relative'>
              <Image
              src={card3.src}
              fill
              alt="Advacryl-graph"
              className="object-contain"
              />
            </div>
          </div>
          <div>
            <p className='text-[1.65vw] font-light mobile:text-[5.5vw]'>{card3.para}</p>
          </div>

        </div>
        </div>

      </div>
    </div>
   </section>
   </>
  )
}

export default Edge