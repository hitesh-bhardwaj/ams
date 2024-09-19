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
          </div>
        </div>
      </section>
    </>
  );
}
