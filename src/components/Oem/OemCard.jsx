import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

export default function OemCard() {
  return (
    <>
       <section id='oemcard' className=' py-[5%] overflow-hidden tablet:h-full tablet:py-[10%] mobile:h-full mobile:py-[20%]'>
      <div className='h-full flex flex-col items-center justify-center gap-[8vw] tablet:gap-[4vw]'>
        
          <div
            
            className={`rounded-[45px] border-[1px] w-full border-gray-200 h-full px-[4vw] py-[8vw] flex bg-white/50 justify-center items-center tablet:flex-col tablet:h-[55vh] tablet:py-[5vw] tablet:rounded-[3vw] tablet:gap-[4vw] mobile:flex-col mobile:h-full mobile:rounded-[6vw] mobile:py-[4vw] mobile:pb-[20vw] fadeUp`}
          >
            <div className="w-[75%] flex justify-between ">

            <div className='h-[23vw] w-[35vw] relative rounded-[50px] overflow-hidden tablet:h-[45vw] tablet:w-[85vw] tablet:rounded-[3vw] mobile:w-[85vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeup'>
              <Image
                src="/assets/oem/oem-rnd-img.webp"
                fill
                alt="oem-rnd"
                className={'imageAnim'}
              />
            </div>

            <div className={`flex flex-col w-[43%] items-left justify-center gap-[2vw] tablet:w-[90%] tablet:ml-0 mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw]`}>
              <h2 data-para-anim className='text-[2.5vw] font-light aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation'>Research & Development</h2>
              <p  className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full text-justify'>
                <span data-para-anim className='para-animation block'>At AMS, we’re setting new standards in medical research and development. Our advanced R&D facility paves the way for new therapies and enhanced treatment outcomes through insight-driven medical device technology and innovation.</span>
              </p>
                <PrimaryButton btnText={"Explore Our R&D Capabilities"} link={"/rnd"} className={"fadeUp"}/>
            </div>
            
            
            </div>
          </div>
        
      </div>
    </section>
      
    </>
  )
}

 
