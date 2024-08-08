import Image from 'next/image'
import React from 'react'

const DNA = () => {
  return (
  <>
  <section className='dna mb-[10%]'>
    <div className='container-lg ml-auto mr-auto'>
        <div>
        <h2 className="title-2 aeonik ml-[7%]">
            <span>Our DNA</span>
          </h2>
        </div>
        <div className='dna-card-container flex justify-between items-center p-[5%] gap-[2vw]'>
            <div className='dna-card px-[2%] py-[6%] w-[w/3] border-[1px] rounded-[40px] bg-white/50'>
                <div className='mt-[-2vw] ml-[1vw] w-[6vw]'>
                <Image
                  className="rounded-[20px] "
                  src="/assets/about/accessible.png"
                  alt="Accessible Image"
                  width= {125}
                  height= {125}
                />
                </div>
                <div className='mt-[3vw] mb-[2vw]'>
                    <h2 className='text-[2vw] aeonik leading-[1] font-light text-[#111111]'>Accessible Care</h2>
                </div>
                <div className='content-p tracking-wide '>
                <p>Breaking barriers to care. AMS designs affordable medical solutions that bring quality healthcare to everyone, everywhere.</p>
                </div>

            </div>

            <div className='dna-card px-[2%] py-[6%] w-[w/3] border-[1px] bg-white/50 rounded-[40px]'>
                <div className='mt-[-2vw] ml-[1vw] w-[7vw]'>
                <Image
                  className="rounded-[20px] "
                  src="/assets/about/globe.png"
                  alt="Accessible Image"
                  width= {125}
                  height= {125}
                />
                </div>
                <div className='mt-[3vw] mb-[2vw]'>
                    <h2 className='text-[2vw] aeonik leading-[1] font-light text-[#111111]'>Global Standards</h2>
                </div>
                <div className='content-p tracking-wide '>
                <p>The AMS facility is equipped to produce cutting edge medical devices that meet the most stringent global specifications</p>
                </div>

            </div>


            <div className='dna-card px-[2%] py-[6%] w-[w/3] border-[1px] bg-white/50 rounded-[40px]'>
                <div className='mt-[-2vw] ml-[1vw] w-[7vw]'>
                <Image
                  className="rounded-[20px] "
                  src="/assets/about/ethics.png"
                  alt="Accessible Image"
                  width= {125}
                  height= {125}
                />
                </div>
                <div className='mt-[3vw] mb-[2vw]'>
                    <h2 className='text-[2vw] aeonik leading-[1] font-light text-[#111111]'>Ethics and Integrity</h2>
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