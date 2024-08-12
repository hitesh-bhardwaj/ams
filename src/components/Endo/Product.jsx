import Image from 'next/image'
import React from 'react'

const ProductCard=({img, heading})=>{
  return(
    <>
    <div className="h-[35vw] w-[30vw] bg-white/50 rounded-[30px] flex flex-col items-center justify-between">
  <div className="h-[50%] w-[100%] relative">
    <Image
      fill
      src={img}
      alt="Product 1"
      className="object-contain"
    />
  </div>
  <div className="h-[50%] w-[100%] flex flex-col items-center justify-center">
    <h2 className="text-center font-light text-[2vw]">{heading}</h2>
    <button className="mt-2 text-[#143CA3] text-[1vw]">See more</button>
  </div>
</div>

    </>
  )
}
const Product = () => {
  return (
    <section className='w-full container-lg flex flex-col items-center gap-[10vw] mb-[15%]'>
        <div>
        <h2 className="title-2 aeonik ">
          <span>Our Advanced Endo Surgery Product Line</span>
        </h2>
      </div>
      <div className='h-[50vh] flex'>
        <ProductCard img={"/assets/endo/Product1.png"} heading={"Powered Linear Cutter III"}/>
        <ProductCard img={"/assets/endo/Product2.png"} heading={"Linear Cutter III"}/>
        <ProductCard img={"/assets/endo/Product3.png"} heading={"Hemorrhoid Stapler III"}/>
        <ProductCard img={"/assets/endo/Product4.png"} heading={"Circular Stapler III"}/>
        <ProductCard img={"/assets/endo/Product5.png"} heading={"Endo Linear Cutter III"}/>
      </div>
    </section>
  )
}

export default Product