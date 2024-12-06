import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const NewsCard = ({title,date,img}) => {
  return (
    <>
      <div className="h-[40vw] w-[41vw] rounded-[2vw] newsCard relative overflow-hidden transition-all duration-500 ease-in">
      <div className="w-full h-full absolute top-0 left-0 z-[2] rounded-[2vw] bg-gradient-to-b from-transparent to-black/30"></div>
        <div className="relative h-full w-full">
          <Image
            src={img}
            fill
            alt="news-img"
            className="rounded-[2.5vw] object-cover"
          />
        </div>
        <div className="absolute text-white text-[2.5vw] font-light top-[80%] left-[5%] aeonik z-[5]">
          <p data-para-anim>{title}</p>
        </div>
      </div>
      <p data-para-anim className="font-light text-[1.8vw] px-[2vw] py-[1vw] aeonik">
       {date}
      </p>
    </>
  );
};

export default function Insights() {
  const handleSlideChange = (swiper) => {
    gsap.to(".swiper-slide", { scale: 0.8, duration: 0.5, ease: "power2.out" });
    gsap.to(swiper.slides[swiper.activeIndex], {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
    const prevSlide = swiper.slides[swiper.activeIndex - 1];
    const nextSlide = swiper.slides[swiper.activeIndex + 1];

    if (prevSlide) {
      gsap.to(prevSlide, { scale: 0.7, duration: 0.5, ease: "power2.out" });
    }
    if (nextSlide) {
      gsap.to(nextSlide, { scale: 0.7,  duration: 0.5, ease: "power2.out" });
    }
  };

  return (
    <>
      <section
        id="insights"
        className="py-[5%] relative overflow-hidden w-screen h-full mobile:pb-[30%] mobile:pt-[15vw]"
      >
        <div className="">
          <div className="insights-top text-center flex flex-col items-center">
            <h2 data-para-anim className="title-2 aeonik leading-[1.3]">
              Insights and Innovations in Healthcare
            </h2>
            <p
              data-para-anim
              className="content-p my-6 w-[50%] mobile:w-[90%] mobile:my-10 tablet:w-[70%]"
            >
              Welcome to the AMS Blog, your go-to resource for cutting-edge
              advancements and expert insights in the medical and healthcare
              industry.
            </p>
            <p  data-para-anim className="aeonik font-light text-[2.5vw] capitalize mt-[2vw]">
              What’s Trending News
            </p>
          </div>
          <div className="w-full h-full pt-[3vw] pb-[2vw] cursor-grab">
            <Swiper
              scrollbar={{
                hide: false,
              }}
              initialSlide={1}
              centeredSlides={true}
              breakpoints={{
                541: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2.7,
                    spaceBetween: 20,
                },
              }}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => handleSlideChange(swiper)}
              modules={[Scrollbar]}
              className="h-full w-full newsSwiper flex items-start justify-start"
            >
              <SwiperSlide className="pb-[3vw] ">
                <NewsCard title={"ADVASTAP HD3 Row Lauch "}  date={"November 29, 2024"} img={"/assets/blogs/news-img1.png"}/>
              </SwiperSlide>
              <SwiperSlide className="pb-[3vw]">
                <NewsCard title={"MEDICA 2024 Congress "} date={"November 28, 2024"} img={"/assets/blogs/news-img2.png"} />
              </SwiperSlide>
              <SwiperSlide className="pb-[3vw]">
                <NewsCard title={"Expert Perspectives"} date={"November 27, 2024"} img={"/assets/blogs/news-img3.png"}/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
