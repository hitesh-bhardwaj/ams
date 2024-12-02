import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";

const ContactDetail = () => {
  return (
    <>
      <section className="py-[5%] pb-[8%] relative" id="contactDetail">
        <div className="container-lg flex flex-col items-center gap-[4vw]">

        <div className=" flex justify-between pr-[5vw]">
          <div className="w-[40%] flex flex-col gap-[7vw] mt-[4vw]">
            <div className="flex flex-col gap-[1vw]">
              <h2 className="aeonik text-[2.5vw] font-light">
                Let’s Work Together to Drive Innovation in Healthcare
              </h2>
              <p className="text-[1.25vw] font-extralight w-[80%]">
                Got questions or want to collaborate? Contact us by phone,
                email, or form below—we’re here to support healthcare
                innovation.
              </p>
            </div>
            <div className="flex flex-col gap-[2vw]">
              <div className="flex flex-col gap-[0.5vw] text-[1.25vw] font-extralight">
                <p>Manufacturing:</p>
                <p className="w-[65%]">
                  P-21-22, 25-26 & 34-35, GIDC Manjusar, Tal-Savli, Vadodara -
                  391775 Gujarat, India | T: +9912667671302
                </p>
              </div>
              <div className="flex flex-col gap-[0.5vw] text-[1.25vw] font-extralight">
                <p>Phone:</p>
                <p>+91 25145 66145</p>
              </div>
              <div className="flex flex-col gap-[0.5vw] text-[1.25vw] font-extralight">
                <p>Working Hours:</p>
                <p>Mon-Fri: 9 am - 6 pm</p>
              </div>
              <div className="flex flex-col gap-[0.5vw] text-[1.25vw] font-extralight">
                <p>Socials:</p>
                <div className="social-icons flex items-bottom gap-[1vw] fadeUp z-10 mobile:mb-[5vw] mobile:mt-[5vw] mobile:gap-[10vw]">
                  <Link
                    href="/#"
                    className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                  >
                    <img
                      className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                      src="/assets/icons/fb.svg"
                      alt="Facebook Icon"
                      height="30"
                      width="30"
                    />
                  </Link>
                  <Link
                    href="/#"
                    className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                  >
                    <img
                      className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                      src="/assets/icons/linkedin.svg"
                      alt="LinkedIn Icon"
                      height="30"
                      width="30"
                    />
                  </Link>
                  <Link
                    href="/#"
                    className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                  >
                    <img
                      className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                      src="/assets/icons/twitter.svg"
                      alt="Twitter Icon"
                      height="30"
                      width="30"
                    />
                  </Link>
                  <Link
                    href="/#"
                    className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                  >
                    <img
                      className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                      src="/assets/icons/insta.svg"
                      alt="Instagram Icon"
                      height="30"
                      width="30"
                    />
                  </Link>
                  <Link
                    href="/#"
                    className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                  >
                    <img
                      className="w-[1.6vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                      src="/assets/icons/youtube.svg"
                      alt="Youtube Icon"
                      height="30"
                      width="30"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <ContactForm />
          </div>
        </div>
        <div className="relative z-0 w-[85vw] h-[40vw] rounded-[2vw] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.271775312155!2d73.1982016!3d22.4416587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcd55d94a2c7b%3A0x15b70110ad06dd8d!2sAdvanced%20MedTech%20Solutions!5e0!3m2!1sen!2sin!4v1699342803289!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
      </section>
    </>
  );
};

export default ContactDetail;
