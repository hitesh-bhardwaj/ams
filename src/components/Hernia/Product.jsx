import Image from 'next/image'
import React from 'react'

const ProductCard=({img, txt})=>{
  return(
    <>
    <div className=" w-[25vw] h-[25vw] relative flex justify-center items-center  text-center text-[#fff] ">
          <Image
            src={img}
           fill
            alt="portfolio-1"
            className="rounded-[40px] border-[1px] border-[#DADADA]"
          />
          <div className="flex justify-center flex-col gap-[1vw] items-center absolute top-[70%] text-[#111111]">
          <p
            className=" font-light text-[2vw] aeonik"
          >
           {txt}
          </p>
          <button className="text-[#143CA3] text-[1vw]">See more</button>
          </div>
        </div>

    </>
  )
}
const Product = () => {
  return (
    <section className='w-full container-lg flex flex-col items-center gap-[2vw] mt-[15%] mb-[10%]'>
        <div>
        <h2 className="title-2 aeonik ">
          <span>The Foundation of Durable Repair</span>
        </h2>
      </div>
      <div className='h-[50vh] flex items-center justify-between gap-[5vw]'>
        <ProductCard img={"/assets/hernia/product-1.png"} txt={"Polypropylene Mesh"}/>
        <ProductCard img={"/assets/hernia/product-2.png"} txt={"Macroporous Mesh"}/>
        <ProductCard img={"/assets/hernia/product-3.png"} txt={"Mid-Weight Mesh"}/>
      </div>
    </section>
  )
}

export default Product