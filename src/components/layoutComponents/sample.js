<div className=" relative">
<Swiper
  slidesPerView={1}
  spaceBetween={0}
  loop={true}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false,
  }}
  effect={'creative'}
  speed={1500}
  creativeEffect={{
    prev: {
      shadow: true,
      translate: ['-40%', 0, -1],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  }}
  modules={[FreeMode, Thumbs, Navigation,EffectCreative , Autoplay]}
  className="mySwiper rounded-bl-[20px] rounded-tl-[20px] overflow-hidden"
  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
>
  <SwiperSlide>
    <PortfolioCard
      src={"/assets/hernia/portfolio-1.png"}
      heading={"Advancing Patient Recovery"}
      para={"Our ADVAMESH products are designed to enhance patient recovery and comfort. By offering exceptional support and promoting natural tissue integration, our meshes minimize bioreactivity and reduce recurrence rates, ensuring a smoother recovery process."}
      className="bgfilter"
    />
  </SwiperSlide>
  <SwiperSlide>
    <PortfolioCard
      src={"/assets/hernia/portfolio-2.png"}
      heading={"Commitment to Excellence"}
      para={"AMS is dedicated to maintaining the highest standards of quality and innovation. Our rigorous quality assurance protocols guarantee that every ADVAMESH product delivers superior performance and reliability. We continuously strive to meet the evolving needs of hernia repair through ongoing research and collaboration with leading surgeons."}
      className="bgfilter"
    />
  </SwiperSlide>
  <SwiperSlide>
    <PortfolioCard
      src={"/assets/hernia/portfolio-3.png"}
      heading={"Empowering Surgical Success"}
      para={"AMS partners with healthcare professionals to achieve surgical success. Our comprehensive range of ADVAMESH products is supported by extensive training and resources, enabling surgeons to perform hernia repairs with confidence and precision. We provide the necessary tools and support to enhance surgical practice and improve patient care."}
       className="bgfilter"
    />
  </SwiperSlide>
</Swiper>

<div className="absolute top-[80%] w-full left-[-3%]">
  <Swiper
    onSwiper={setThumbsSwiper}
    spaceBetween={10}
    slidesPerView={4}
    freeMode={true}
    watchSlidesProgress={true}
    modules={[FreeMode, Navigation, Thumbs]}
    className="endoSmallSwiper"
  >
    <SwiperSlide className="flex gap-[1vw]">
      <div className="h-[7vw] w-[12vw] relative cursor-pointer">
        <Image
          fill
          src="/assets/hernia/portfolio-1.png"
          className="rounded-[20px]"
          alt="small swiper"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="h-[7vw] w-[12vw] relative cursor-pointer">
        <Image
          fill
          src="/assets/hernia/portfolio-2.png"
          className=" rounded-[20px]"
          alt="small swiper"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="h-[7vw] w-[12vw] relative cursor-pointer">
        <Image
          fill
          src="/assets/hernia/portfolio-3.png"
          className="rounded-[20px]"
          alt="small swiper"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</div>
</div>