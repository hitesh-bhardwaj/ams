import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactList = () => {
  return (
    <>
      <section
        className="w-full h-full bg-white/50 py-[7%]"
        id="contact-list"
      >
        <div className="container-lg h-full flex flex-col items-center gap-[5vw] ">
          <h2 data-para-anim className="title-2 aeonik  ">Contact AMS</h2>
          <div className="w-full flex justify-between fadeUp">
            <Link href={"#"}>
              <div className="w-[29vw] h-full flex flex-col gap-[1.5vw]  ">
                <div className="w-full h-[16vw] rounded-[2vw] overflow-hidden relative">
                  <Image
                    src={"/assets/contact/contact-healthcare.png"}
                    alt="healthcare"
                    fill
                  />
                </div>
                <div className="flex gap-[0.5vw]">
                  <h4 data-para-anim className="text-[1.2vw] aeonik font-normal ">
                    Healthcare Providers
                  </h4>
                  <Image
                    src={"/assets/icons/arrow-up-right.svg"}
                    width={12}
                    height={12}
                    alt="arrow-up-right fadeUp"
                  />
                </div>
                <p data-para-anim className="text-[1.25vw] leading-[1.4] aeonik font-light">
                  Join us in advancing MedTech solutions. Reach out for sales,
                  distribution, clinical support, or collaboration
                  opportunities. Submit a request, and a representative from AMS
                  will get in touch with you shortly.
                </p>
              </div>
            </Link>
            <Link href={"#"}>
              <div className="w-[29vw] h-full flex flex-col gap-[1.5vw]  ">
                <div className="w-full h-[16vw] rounded-[2vw] overflow-hidden relative">
                  <Image
                    src={"/assets/contact/contact-oem.png"}
                    alt="healthcare"
                    fill
                  />
                </div>
                <div className="flex gap-[0.5vw]">
                  <h4 data-para-anim className="text-[1.2vw] aeonik font-normal ">
                    OEM Solutions
                  </h4>
                  <Image
                    src={"/assets/icons/arrow-up-right.svg"}
                    width={12}
                    height={12}
                    alt="arrow-up-right"
                  />
                </div>
                <p data-para-anim className="text-[1.25vw] leading-[1.4] aeonik font-light">
                  Explore our expertise in OEM manufacturing. Reach out for
                  bespoke product designs, high-quality manufacturing, and
                  innovative medical device solutions.
                </p>
              </div>
            </Link>
            <Link href={"#"}>
              <div className="w-[29vw] h-full flex flex-col gap-[1.5vw]  ">
                <div className="w-full h-[16vw] rounded-[2vw] overflow-hidden relative">
                  <Image
                    src={"/assets/contact/contact-other.png"}
                    alt="healthcare"
                    fill
                  />
                </div>
                <div className="flex gap-[0.5vw]">
                  <h4 data-para-anim className="text-[1.2vw] aeonik font-normal ">
                    Other Enquiries
                  </h4>
                  <Image
                    src={"/assets/icons/arrow-up-right.svg"}
                    width={12}
                    height={12}
                    alt="arrow-up-right"
                  />
                </div>
                <p data-para-anim className="text-[1.25vw] leading-[1.4] aeonik font-light">
                  Have a different query? We’re here to assist. Simply fill out
                  the details for general questions, business inquiries, or more
                  information about our offerings.
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
