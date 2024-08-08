import React from 'react'
import PrimaryButton from "../Button/PrimaryButton"


const Connecting = () => {
  return (
    <section className='mb-[10%]'>
        <div className='container-lg '>
            <div className='px-[3%] py-[5%]  border-[1px]  flex justify-between flex-col items-center rounded-[60px] bg-white/50 '>
                <div className=''>
            <h2 className="title-2 aeonik ">
            <span>Connecting for a Healthier Tomorrow.</span>
          </h2>
          </div>
          <div className='mt-[2vw] mb-[5vw] content-p'>
          <p>
          Ready to shape the future of healthcare with us? Reach out today and let's innovate together.
          </p>
          </div>
          <div>
          <PrimaryButton link="/" btnText="Contact Us"/>
          </div>
        

            </div>


            </div>


       

    </section>
  )
}

export default Connecting