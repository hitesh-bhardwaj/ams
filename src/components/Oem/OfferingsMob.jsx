import Image from "next/image";
import React from "react";

export default function OfferingsMob() {
  // Card data array
  const cards = [
    {
      id: 1,
      imgSrc: "/assets/oem/suture-card-needle.webp",
      alt: "suture-needle",
      title: "Surgical Suture Needles",
    },
    {
      id: 2,
      imgSrc: "/assets/oem/sternotomy.webp",
      alt: "sternotomy",
      title: "Sternotomy Suture",
    },
    {
      id: 3,
      imgSrc: "/assets/oem/oem-hernia-img.webp",
      alt: "oem-hernia",
      title: "Hernia Solutions",
    },
    {
      id: 4,
      imgSrc: "/assets/oem/stent.webp",
      alt: "stent",
      title: "Stent Delivery Systems",
    },
  ];

  return (
    <>
      <section className="py-[10%] hidden mobile:block tablet:block" id="offering">
        <div className="hidden mobile:block tablet:block ">
          <div className="w-full flex flex-col gap-[12vw] tablet:gap-[7vw]">
            <div className="w-full flex justify-center">
              <h2 className="title-2 aeonik text-center px-[2vw] tablet:w-[80%] mobile:w-[95%]">
                <span data-para-anim>Unmatched Precision with AMS Needles</span>
              </h2>
            </div>

            <div className="w-full mobile:overflow-scroll mobile:mt-[5vw] mobile:fadeup mobile:block hidden mobile:pr-[5%] fadeUp tablet:overflow-scroll mobile:fadeup tablet:block tablet:pr-[5%] overflow-visible tablet:mt-0 ">
              <div className="mobile:flex mobile:flex-nowrap mobile:w-fit mobile:gap-[5vw] mobile:ml-[6vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[2vw] tablet:h-fit tablet:ml-[4vw]">
                {/* Mapping over the cards array */}
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="w-[80vw] h-[150vw] rounded-[10vw] px-[3vw] py-[3vw] glassmorphism flex flex-col justify-between border pb-[15vw] tablet:w-[45vw] tablet:h-[60vw] tablet:pb-0 tablet:rounded-[4vw] tablet:justify-start"
                  >
                    <div className="w-full h-[90vw] relative rounded-[6vw] overflow-hidden tablet:h-[70%] tablet:rounded-[3vw]">
                      <Image
                        src={card.imgSrc}
                        alt={card.alt}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <h5
                      data-para-anim
                      className="aeonik text-[9vw] text-center font-light tablet:text-[4vw] tablet:mt-[3vw]"
                    >
                      {card.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
              <div className="w-full h-full bg-white rounded-[6vw] pt-[12vw] pb-[20vw] flex flex-col items-center gap-[9vw] tablet:pb-[10vw] tablet:pt-[2vw] tablet:gap-[5vw] ">
                <h3 data-para-anim className="text-[9vw] aeonik text-center font-light">Features</h3>
                <div className="w-[90vw] h-[50vw] rounded-[6vw] relative overflow-hidden">
                  <Image src="/assets/oem/suture-card-needle.webp" alt="suture-needle" className="object-cover" fill/>

                </div>
                <div className="w-full h-full flex flex-col gap-[2vw] px-[7vw]">
                  <h3 data-para-anim className="text-[10vw] aeonik font-light leading-[1.25] tablet:text-[7vw]">Surgical Suture Needles</h3>
                  <h4 data-para-anim className="text-[7vw] aeonik font-light leading-[1.25] tablet:text-[4.5vw]">The Next Generation of Needle Technology</h4>
                  <ul  className="list-disc space-y-[0.5vw] text-[4.5vw] font-light ml-[4vw] mt-[4vw] tablet:text-[2.5vw] tablet:mt-[2vw]">
                            <li data-para-anim>Advanced US & German Technology</li>
                            <li data-para-anim>Cutting-Edge Robotics and Automation</li>
                            <li data-para-anim>Robust Capacity of 60 Million Needles Annually</li>
                            <li data-para-anim>Precision Engineering & Quality Assurance</li>
                            <li data-para-anim>Expedited Turnaround and Delivery</li>
                            <li data-para-anim>60,000 sq. ft. Needle Production Facility</li>
                            <li data-para-anim>Team with Over 2-3 Decades of Expertise</li>
                        </ul>
                </div>

              </div>
          </div>
        </div>
      </section>
    </>
  );
}
