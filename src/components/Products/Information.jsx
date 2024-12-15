import React from 'react'

const Information = ({info}) => {
  return (
   <section id='info' className='w-screen h-full overflow-hidden py-[8vw]'>
    <div className='container-lg w-[90%] h-full p-[5vw] px-[7vw] rounded-[2.5vw] bg-white/50 '>
    <p data-para-anim className=' text-[1.65vw] font-light leading-[1.5] tracking-wide text-center'>
  {info}
        </p> 

    </div>

   </section>
  )
}

export default Information