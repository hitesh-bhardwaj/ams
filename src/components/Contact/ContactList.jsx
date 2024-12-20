import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactList = () => {
  return (
    <>
      <section
        className="w-full h-full bg-white/50 py-[7%] mobile:py-[15%]"
        id="contact-list"
      >
        <div className="container-lg h-full flex flex-col items-center gap-[5vw] ">
          <h2 data-para-anim className="title-2 aeonik">Contact AMS</h2>
          <div className="w-full flex justify-between fadeUp mobile:flex-col mobile:gap-12">
            <Link href={"#"}>
              <div className="w-[29vw] h-full flex flex-col gap-[1.5vw] mobile:w-full">
                <div className="w-full h-[16vw] rounded-[2vw] overflow-hidden relative mobile:h-[50vw]">
                  <Image
                    src={"/assets/contact/contact-healthcare.png"}
                    alt="healthcare"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-[0.5vw] items-center mobile:gap-2">
                  <h4 data-para-anim className="text-[1.2vw] aeonik font-normal tablet:text-[2.5vw] mobile:text-[7vw]">
                    Healthcare Providers
                  </h4>
                  <Image
                    src={"/assets/icons/arrow-up-right.svg"}
                    width={12}
                    height={12}
                    className="mobile:mt-1"
                    alt="arrow-up-right fadeUp"
                  />
                </div>
                <p data-para-anim className="text-[1.25vw] leading-[1.4] aeonik font-light tablet:text-[2vw] mobile:text-xl">
                  Empowering healthcare professionals with innovative medical solutions. Reach out for tailored product demos, comprehensive product insights, expert clinical support, and opportunities to collaborate in advancing patient care.
                </p>
              </div>
            </Link>
            <Link href={"#"}>
              <div className="w-[29vw] h-full flex flex-col gap-[1.5vw] mobile:w-full">
                <div className="w-full h-[16vw] rounded-[2vw] overflow-hidden relative mobile:h-[50vw]">
                  <Image
                    src={"/assets/contact/contact-oem.png"}
                    alt="healthcare"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-[0.5vw] items-center mobile:gap-2">
                <h4 data-para-anim className="text-[1.2vw] aeonik font-normal tablet:text-[2.5vw] mobile:text-[7vw]">
                    OEM Solutions
                  </h4>
                  <Image
                    src={"/assets/icons/arrow-up-right.svg"}
                    width={12}
                    height={12}
                    alt="arrow-up-right"
                    className="mobile:mt-1"
                  />
                </div>
                <p data-para-anim className="text-[1.25vw] leading-[1.4] aeonik font-light tablet:text-[2vw] mobile:text-xl">
                  Explore our expertise in OEM manufacturing. Reach out for bespoke product designs, high-quality manufacturing, and innovative medical device solutions.
                </p>
              </div>
            </Link>
            <Link href={"#"}>
              <div className="w-[29vw] h-full flex flex-col gap-[1.5vw] mobile:w-full">
                <div className="w-full h-[16vw] rounded-[2vw] overflow-hidden relative mobile:h-[50vw]">
                  <Image
                    src={"/assets/contact/contact-other.png"}
                    alt="healthcare"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-[0.5vw] items-center mobile:gap-2">
                  <h4 data-para-anim className="text-[1.2vw] aeonik font-normal tablet:text-[2.5vw] mobile:text-[7vw]">
                    Other Enquiries
                  </h4>
                  <Image
                    src={"/assets/icons/arrow-up-right.svg"}
                    width={12}
                    height={12}
                    alt="arrow-up-right"
                    className="mobile:mt-1"
                  />
                </div>
                <p data-para-anim className="text-[1.25vw] leading-[1.4] aeonik font-light tablet:text-[2vw] mobile:text-xl">
                  Have a different query? We&apos;re here to assist. Get in touch for general questions, business inquiries, or more information about our offerings.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;
