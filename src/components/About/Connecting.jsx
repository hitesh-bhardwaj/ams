import React from 'react'
import PrimaryButton from "../Button/PrimaryButton"


const Connecting = () => {
  return (
    <section className='' id='connect'>
        <div className='container-lg py-[10%]'>
            <div className='px-[3%] py-[5%]  border-[1px]  flex justify-between flex-col items-center rounded-[60px] bg-white/50 '>
                <div className=''>
            <h2 data-para-anim className="title-2 aeonik ">
            Connecting for a Healthier Tomorrow.
          </h2>
          </div>
          <div className='mt-[2vw] mb-[5vw] content-p'>
          <p data-para-anim>
          Ready to shape the future of healthcare with us? Reach out today and let&apos;s innovate together.
          </p>
          </div>
          <div>
          <PrimaryButton link="#" btnText="Contact Us" className={"w-[18vw]"}/>
          </div>
        

            </div>


            </div>


       

    </section>
  )
}

export default Connecting