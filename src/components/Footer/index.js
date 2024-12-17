/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { fadeup, paraAnim } from "../gsapAnimations";
import { Media } from "../media";

export default function Footer() {
  paraAnim();
  fadeup();
  return (
    <>
      <footer className=" h-full mobile:pb-[10vw] relative overflow-hidden rounded-tl-[3vw] mt-[-2.5%] rounded-tr-[3vw] ">
        <div className="absolute w-screen h-[120vh]  mobile:h-full  overflow-hidden">
          <Image
            src="/assets/footer-bg-img.webp"
            alt="footer-bg"
            className="object-cover"
            fill
          />
        </div>
        <div className="container-sm px-[5vw] pt-[2vw] mobile:pt-[10vw]">
          <div className="grid grid-cols-12 pt-[3.5vw] pb-[1.5vw] mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:pt-[6.5vw] tablet:pt-[5vw] ">
            <div className="col-span-6  mobile:flex mobile:flex-col mobile:items-center mobile:justify-center">
              <div className="mobile:flex mobile:items-center mobile:justify-center mobile:flex-col">
                <p className="content-p text-anim-2">
                  <span data-para-anim className="uppercase text-head">
                    do you have any questions?
                  </span>
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-baseline gap-[1.5vw] mb-[2.5vw] fadeUp tablet:mb-[3.5vw] ml-[-0.5vw]"
                >
                  <span
                    data-para-anim
                    className="text-[5.3vw] text-head aeonik leading-[1] font-light mobile:text-[16vw] tablet:text-[7vw]"
                  >
                    Contact
                  </span>
                  <Image
                    className="inline w-[7.35%] mobile:ml-[5%] mobile:w-[11%] relative z-[7] fadeUp"
                    src="/assets/icons/arrow-up-right.svg"
                    alt="arrow"
                    width={50}
                    height={50}
                  />
                </Link>
                <div className="mb-[2.5vw]  mobile:mb-[5vw] mobile:mt-[5vw] mobile:flex mobile:flex-col mobile:justify-center mobile:items-center ">
                  <p className="w-[50%] content-p mb-[1vw] fadeUp mobile:w-[90%] mobile:text-center tablet:mb-[2vw]">
                    <span data-para-anim className="text-head">
                      P-21-22, 25-26 & 34-35, GIDC Manjusar, Ta. Savli,
                      Vadodara, Gujarat, India
                    </span>
                  </p>
                  <a
                    data-v="T: +91 2667671302"
                    href="tel:+91 2667671302"
                    className="content-p block text-head fadeUp mobile:text-[5vw]"
                  >
                    <span data-para-anim className="font-[400]">
                      T: +91 2667671302
                    </span>
                  </a>
                  <a
                    href="mailto:info@amsltd.com"
                    className="content-p block text-head fadeUp mobile:text-[5vw]"
                  >
                    <span
                      data-para-anim
                      data-v="info@amsltd.com"
                      className="font-[400]"
                    >
                      M: info@amsltd.com
                    </span>
                  </a>
                </div>
                <div className="social-icons flex items-bottom gap-[3vw] fadeUp z-10 mobile:mb-[5vw] mobile:mt-[5vw] mobile:gap-[10vw]">
                  <Link
                    href="https://www.facebook.com/AdvancedMedTechSolutions" target="_blank"
                    className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                  >
                    <Image
                      className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                      src="/assets/icons/fb.svg"
                      alt="Facebook Icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/advanced-medtech-solutions/" target="_blank"
                    className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                  >
                    <Image
                      className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                      src="/assets/icons/linkedin.svg"
                      alt="LinkedIn Icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/AmsMedTech" target="_blank"
                    className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                  >
                    <Image
                      className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                      src="/assets/icons/twitter.svg"
                      alt="Twitter Icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/officialamsltd/" target="_blank"
                    className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                  >
                    <Image
                      className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                      src="/assets/icons/insta.svg"
                      alt="Instagram Icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCRwHSaWfb2ciojSBz3dhrUw" target="_blank"
                    className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                  >
                    <Image
                      className="w-[1.6vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                      src="/assets/icons/youtube.svg"
                      alt="Youtube Icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-5 col-start-9 flex justify-between mobile:flex mobile:flex-col mobile:mt-[8vw] mobile:justify-center mobile:items-center mobile:space-y-[8vw] tablet:col-start-8 tablet:row-start-1 tablet:gap-[5vw]">
              <div className="">
                <h6 className="text-head content-p-lg mb-[1vw] fadeUp  mobile:text-center mobile:text-[7vw]">
                  <span data-para-anim className="font-light">
                    About Us
                  </span>
                </h6>
                <ul className="space-y-[0.5vw] leading-[135%] fadeUp mobile:text-center mobile:space-y-[2vw]  mobile:mt-[5vw]">
                  <li className="footer-link">
                    <Link
                      className="content-p text-head font-light mobile:text-[5vw]"
                      href="/#"
                    >
                      <span data-para-anim data-attr="Our Promise">
                        Our Promise
                      </span>
                    </Link>
                  </li>
                  <li className="footer-link">
                    <Link
                      className="content-p text-head font-light mobile:text-[5vw]"
                      href="/#"
                    >
                      <span data-para-anim data-attr="Leadership">
                        Leadership
                      </span>
                    </Link>
                  </li>
                  <li className="footer-link">
                    <Link
                      className="content-p text-head font-light mobile:text-[5vw]"
                      href="/manufacturing"
                    >
                      <span data-para-anim data-attr="Manufacturing">
                        Manufacturing
                      </span>
                    </Link>
                  </li>
                  <li className="footer-link">
                    <Link
                      className="content-p text-head font-light mobile:text-[5vw]"
                      href="/career"
                    >
                      <span data-para-anim data-attr="Careers">
                        Careers
                      </span>
                    </Link>
                  </li>
                  <li className="footer-link">
                    <Link
                      className="content-p text-head font-light mobile:text-[5vw]"
                      href="/contact-us"
                    >
                      <span data-para-anim data-attr="Contact Us">
                        Contact Us
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-[35%] mobile:w-full mobile:text-center tablet:w-full mobile:mt-[5vw]">
                <h6 className="text-head content-p-lg mb-[1vw] fadeUp mobile:text-[7vw]">
                  <span data-para-anim className="font-light">
                    Products
                  </span>
                </h6>
                <ul className="space-y-[0.5vw] leading-[135%] fadeUp mobile:space-y-[2vw] mobile:mt-[5vw]">
                  <li className="footer-link">
                    <Link
                      className="content-p text-head font-light mobile:text-[5vw]"
                      href="/wound-care"
                    >
                      <span data-para-anim data-attr="Wound Closure">
                        Wound Closure
                      </span>
                    </Link>
                  </li>
                  <li className="footer-link">
                    <Link
                      className="content-p text-head font-light mobile:text-[5vw]"
                      href="/endo"
                    >
                      <span data-para-anim data-attr="Endo Surgery">
                        Endo Surgery
                      </span>
                    </Link>
                  </li>
                  <li className="footer-link">
                    <Link
                      className="content-p text-head font-light mobile:text-[5vw]"
                      href="/hernia"
                    >
                      <span data-para-anim data-attr="Hernia Solutions">
                        Hernia Solutions
                      </span>
                    </Link>
                  </li>
                  <li className="footer-link">
                    <Link
                      className="content-p text-head font-light mobile:text-[5vw]"
                      href="/interventional-cardiology"
                    >
                      <span
                        data-para-anim
                        data-attr="Interventional Cardiology"
                      >
                        Interventional Cardiology
                      </span>
                    </Link>
                  </li>
                  <li className="footer-link">
                    <Link
                      className="content-p text-head font-light mobile:text-[5vw]"
                      href="/cardiovascular-solutions"
                    >
                      <span data-para-anim data-attr="Cardiovascular Solutions">
                        Cardiovascular Solutions
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative col-span-full my-[3vw] h-[13vw] w-full tablet:my-[6vw] tablet:h-[15vw] fadeUp mobile:hidden">
              <Image
                className="drop-shadow-2xl"
                src="/ams-logo-with-tag.svg"
                alt="Logo"
                fill
              />
            </div>

            <div className="relative col-span-full my-[3vw] h-[27vw] w-full tablet:my-[6vw] tablet:h-[15vw] fadeUp hidden mobile:block mobile:w-[80%] mobile:my-[6vw]">
              <Image
                className=" drop-shadow-2xl  "
                src="/ams-logo-with-tag-mobile.png"
                alt="Logo"
                fill
              />
            </div>

            <div className="col-span-full flex justify-between text-head text-[1vw] font-light mobile:text-[3.6vw] mobile:flex-col mobile:items-center mobile:justify-center tablet:text-[1.8vw] mobile:mt-[5vw]">
              <p className="relative z-[6]">
                © {new Date().getFullYear()} Advanced MedTech Solutions Pvt. Ltd
              </p>
              <a
                className="relative after:absolute after:block after:left-0 after:bg-current after:bottom-0 after:h-[1px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all"
                target="_blank"
                title="UI/UX, Strategy, Marketing Agency"
                href="https://weareenigma.com"
              >
                By: Enigma
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
