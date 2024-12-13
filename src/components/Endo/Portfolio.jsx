/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";

const Portfolio = ({ currentlink }) => {

  const filteredContent = content.filter((item) => item.link !== currentlink).slice(0, 4);

  return (
    <section id="portfolio" className="pb-[8%]">
      <div className="flex flex-col items-center justify-center px-[4%] pt-[10%] pb-[4%] mobile:py-[15%] mobile:pt-[5%] tablet:px-[4%] mobile:px-0 overflow-hidden">
        <h2 data-para-anim className="title-2 aeonik mobile:text-center">
          Our Advanced Portfolio
        </h2>
        <div className="items-center justify-between grid grid-cols-4 gap-[3vw] mt-[7vw] portfolio-card-container tablet:grid-cols-2 mobile:grid-cols-1 mobile:gap-8">
          {filteredContent.map((item, index) => (
            <PortfolioCard key={index} img={item.image} text={item.title} link={item.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const PortfolioCard = ({ img, text, link }) => {
  return (
    <>
      <Link href={link} className="block group w-full">
        <div className={`h-[11.5vw] w-full relative rounded-[2.5vw] overflow-hidden portfolio-car tablet:h-[24vw] tablet:rounded-[3vw] mobile:h-[45vw] mobile:w-[85vw] mobile:rounded-[6vw] fadeup`}>
          <Image src={img} width={400} height={225} alt={`${text} image`} className="group-hover:scale-100 scale-110 duration-500 object-cover h-full w-full"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center" >
            <span className="w-[45%] block h-full bg-white/25 backdrop-blur absolute group-hover:w-0 duration-500" />
            <h6 className="font-light text-[1.2vw] text-white w-full text-center relative z-10 tablet:text-[2.5vw] mobile:text-lg">
              {text}
            </h6>
          </div>
        </div>
      </Link>
    </>
  )
}

const content = [
  {
    title: "Advanced Interventional Cardiology",
    image: "/assets/portfolio/Cardiology.png",
    link: "/interventional-cardiology",
  },
  {
    title: "Advanced Wound Care",
    image: "/assets/portfolio/WoundCare.png",
    link: "/wound-care",
  },
  {
    title: "Advanced Cardiovascular Solutions",
    image: "/assets/portfolio/Cardiovascular.png",
    link: "/cardiovascular-solutions"
  },
  {
    title: "Advanced Endo Surgery",
    image: "/assets/portfolio/EndoSurgery.png",
    link: "/endo"
  },
  {
    title: "Advanced Hernia Solutions",
    image: "/assets/portfolio/HerniaSolutions.png",
    link: "/hernia"
  }
]
