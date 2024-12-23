import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import styles from './styles.module.css'
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const NewsCard = ({ title, para, img }) => {
  return (
    <>
    <Link href={"#"}>
      <div className="h-full w-full rounded-[2vw] newsCard relative transition-all duration-500 ease group">
        <div className="relative h-full w-full">
          <Image
            src={img}
            fill
            alt="news-img"
            className="rounded-[2.5vw] object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-[5] text-white transition-all rounded-[2.5vw] duration-500 ease opacity-0 group-hover:opacity-100 group-hover:bg-black/80">
          <p
            data-para-anim
            className="text-[1.25vw] font-light text-center px-[2vw] aeonik"
          >
            {para}
          </p>
        </div>
      
      <div>
      <p
       
        className="font-light text-[2vw] px-[2vw] py-[1vw] aeonik leading-[1.2] fadeUp"
      >
        {title}
          <span className="inline-block">
      <Image
            className=" w-[1.2vw] h-[1.2vw] ml-[0.2vw]  mobile:ml-[5%] mobile:w-[11%] relative z-[7]"
            src="/assets/icons/arrow-up-right.svg"
            alt="arrow"
            width={50}
            height={50}
          />
          </span>
      </p>
    
          </div>
         
          </div>
          </Link>
    </>
  );
};


export default function Insights() {
  const handleSlideChange = (swiper) => {
    gsap.to(".swiper-slide", { scale: 0.8, duration: 0.5, ease: "power2.out" });
    gsap.to(swiper.slides[swiper.activeIndex], {
      scale: 1,
      duration: 1,
      ease: "power3.out",
    });
    const prevSlide = swiper.slides[swiper.activeIndex - 1];
    const nextSlide = swiper.slides[swiper.activeIndex + 1];

    if (prevSlide) {
      gsap.to(prevSlide, { scale: 0.8, duration: 1, ease: "power3.out" });
    }
    if (nextSlide) {
      gsap.to(nextSlide, { scale: 0.8,   duration: 1, ease: "power3.out" });
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
            <h2
data-para-anim className="title-2 aeonik leading-[1.3]">
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
            <p  data-para-anim className="aeonik font-light text-[2.5vw]  mt-[2vw]">
              What&apos;s Trending News
            </p>
          </div>
          <div className="w-full h-[48vw] pt-[3vw] pb-[2vw] cursor-grab fadeUp ">
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
                  slidesPerView: 2.5,
                    spaceBetween: 0,
                },
              }}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => handleSlideChange(swiper)}
              modules={[Scrollbar]}
              className={`h-full w-full ${styles.newsSwiper}`}
            >
              <SwiperSlide className="pb-[7vw]">
                <NewsCard para={"The ADVASTAP Staplers 3-row series is here, setting a new benchmark in endo surgery. Designed to enhance precision and improve patient outcomes, our innovative stapling technology is transforming the surgical landscape. "}  title={"Discover the Next Leap in Endo Surgery"} img={"/assets/blogs/news1.png"}/>
              </SwiperSlide>
              <SwiperSlide className="pb-[7vw]">
                <NewsCard para={"Advanced MedTech Solutions is excited to showcase innovation at Arab Health 2025! Visit us to explore advanced solutions transforming healthcare."} title={"Arab Health 2025 "} img={"/assets/blogs/news2.png"} />
              </SwiperSlide>
              <SwiperSlide className="pb-[7vw]">
                <NewsCard para={"AMS is expanding the campus with the launch of its 60,000 sq. ft. Phase 2 facility, enhancing capabilities in medical device manufacturing, sustainability, and innovation. Featuring the Advanced MedTech Academy and advanced cleanroom spaces, this expansion sets new standards in global healthcare and patient care."} title={"Building the Future of MedTech "} img={"/assets/blogs/news3.png"}/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
