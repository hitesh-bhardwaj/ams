import React from 'react'

const OemSpecification = ({onClose}) => {
  return (
    <section className='w-screen h-screen bg-black/50 fixed top-0 left-0 z-[999] flex justify-center items-center' id="oem-modal">
        <div className='container-lg bg-white rounded-[3vw] h-[80vh] w-full'>


        </div>
        <p onClick={onClose} className='text-white absolute right-[5%] top-[5%] text-[1.5vw] cursor-pointer'> close</p>
      
    </section>
  )
}

export default OemSpecification
