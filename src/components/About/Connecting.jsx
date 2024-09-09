import React from 'react'
import PrimaryButton from "../Button/PrimaryButton"


const Connecting = () => {
  
  return (  
    <section className='' id='connect'>
        <div className='container-lg my-[10%] fadeUp group'>
            <div className='px-[3%] py-[5%]  border-[1px]  flex justify-between flex-col items-center rounded-[60px] bg-white/50 group-hover:bg-white group-hover:shadow-xl duration-300'>
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
          <div className='fadeUp'>
          <PrimaryButton link="#" btnText="Contact Us"/>
          </div>
        

            </div>


            </div>


       

    </section>
  )
}

export default Connecting