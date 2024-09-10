/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="main-gradient h-full mt-[4vw] pt-[3vw]">
                

                <div className="container-sm">
                    <div className="grid grid-cols-12 pt-[3.5vw] pb-[1.5vw] mobile:flex mobile:flex-col mobile:items-center mobile:justify-center ">
                        <div className="col-span-4  mobile:flex mobile:flex-col mobile:items-center mobile:justify-center">
                            <div className="mobile:flex mobile:items-center mobile:justify-center mobile:flex-col">
                                <p className="content-p text-anim-2">
                                    <span className="uppercase text-head">
                                        do you have any questions?
                                    </span>
                                </p>
                                <Link href="/#" className="flex items-baseline gap-[1.5vw] mb-[2.5vw] fadeUp">
                                    <span className="text-[5.3vw] text-head aeonik leading-[1] font-light mobile:text-[14vw]">
                                        Contact
                                    </span>
                                    <img 
                                        className="inline w-[11%] mobile:ml-[5%]"
                                        src="/assets/icons/arrow-up-right.svg"
                                        alt="arrow"
                                        height="50px"
                                        width="50px"
                                    />
                                </Link>
                                <div className="mb-[2.5vw] mobile:mb-[5vw] mobile:mt-[5vw] mobile:flex mobile:flex-col mobile:justify-center mobile:items-center ">
                                    <p className="content-p mb-[1vw] fadeUp mobile:w-[80%] mobile:text-center">
                                        <span className="text-head">
                                            P-21-22, 25-26 & 34-35, GIDC Manjusar, Ta. Savli, Vadodara, Gujarat, India
                                        </span>
                                    </p>
                                    <a data-v="T: +91 2667671302" href="tel:+91 2667671302" className="content-p block text-head fadeUp">
                                        <span className="font-[400]">
                                            T: +91 2667671302
                                        </span>
                                    </a>
                                    <a href="mailto:info@amsltd.com" className="content-p block text-head fadeUp">
                                        <span data-v="info@amsltd.com" className="font-[400]">
                                            info@amsltd.com
                                        </span>
                                    </a>
                                </div>
                                <div className="social-icons flex items-bottom gap-[3vw] fadeUp mobile:mb-[5vw] mobile:mt-[5vw] mobile:gap-[10vw]">
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100">
                                        <img 
                                            className="w-[1.5vw] h-[1.5vw] mobile:w-[9vw] mobile:h-[9vw]"
                                            src="/assets/icons/fb.svg"
                                            alt="Facebook Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100">
                                        <img 
                                            className="w-[1.5vw] h-[1.5vw] mobile:w-[9vw] mobile:h-[9vw]"
                                            src="/assets/icons/linkedin.svg"
                                            alt="LinkedIn Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100">
                                        <img 
                                            className="w-[1.5vw] h-[1.5vw] mobile:w-[9vw] mobile:h-[9vw]"
                                            src="/assets/icons/twitter.svg"
                                            alt="Twitter Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100">
                                        <img 
                                            className="w-[1.5vw] h-[1.5vw] mobile:w-[9vw] mobile:h-[9vw]"
                                            src="/assets/icons/insta.svg"
                                            alt="Instagram Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100">
                                        <img 
                                            className="w-[1.6vw] h-[1.5vw] mobile:w-[9vw] mobile:h-[9vw]"
                                            src="/assets/icons/youtube.svg"
                                            alt="Youtube Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5 col-start-9 flex justify-between mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:space-y-[5vw]">
                            <div className="">
                                <h6 className="text-head content-p-lg mb-[1vw] fadeUp  mobile:text-center">
                                    <span className="font-light">
                                        About Us
                                    </span>
                                </h6>
                                <ul className="space-y-[0.8vw] leading-[135%] fadeUp mobile:text-center">
                                    <li className="footer-link">
                                        <Link  className="content-p text-head font-light" href="/#">
                                            <span data-attr="Our Promise">
                                                Our Promise
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="footer-link">
                                        <Link className="content-p text-head font-light" href="/#">
                                            <span data-attr="Leadership">
                                                Leadership
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="footer-link">
                                        <Link className="content-p text-head font-light" href="/manufacturing">
                                            <span data-attr="Manufacturing">
                                                Manufacturing
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="footer-link">
                                        <Link className="content-p text-head font-light" href="/career">
                                            <span data-attr="Careers">
                                            Careers
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="footer-link">
                                        <Link className="content-p text-head font-light" href="/#">
                                            <span data-attr="Contact Us">
                                            Contact Us
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-[35%] mobile:w-[60%] mobile:text-center">
                            <h6 className="text-head content-p-lg mb-[1vw] fadeUp">
                                    <span className="font-light">
                                        Products
                                    </span>
                                </h6>
                                <ul className="space-y-[0.8vw] leading-[135%] fadeUp">
                                    <li className="footer-link">
                                        <Link className="content-p text-head font-light" href="/#">
                                            <span data-attr="Wound Closure">
                                            Wound Closure
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="footer-link">
                                        <Link className="content-p text-head font-light" href="/endo">
                                            <span data-attr="Endo Surgery">
                                            Endo Surgery
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="footer-link">
                                        <Link className="content-p text-head font-light" href="/hernia">
                                            <span data-attr="Hernia Solutions">
                                            Hernia Solutions
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="footer-link">
                                        <Link className="content-p text-head font-light" href="/#">
                                            <span data-attr="Interventional Cardiology">
                                            Interventional Cardiology
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="footer-link">
                                        <Link className="content-p text-head font-light" href="/#">
                                            <span data-attr="Cardiovascular Solutions">
                                            Cardiovascular Solutions
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img
                            className="col-span-full my-[3vw]  drop-shadow-2xl mobile:hidden"
                            src="/ams-logo-with-tag.png"
                            alt="Logo"
                            height="248"
                        /> 
                         <img
                            className="col-span-full my-[3vw]  drop-shadow-2xl hidden mobile:block mobile:w-[70%] mobile:my-[6vw]"
                            src="/ams-logo-with-tag-mobile.png"
                            alt="Logo"
                            height="200"
                        /> 
                        <div className="col-span-full flex justify-between text-head text-[1vw] font-light mobile:text-[3.6vw] mobile:flex-col mobile:items-center mobile:justify-center">
                            <p>© {new Date().getFullYear()} Advanced MedTech Solutions Pvt. Ltd</p>
                            <a className="relative after:absolute after:block after:left-0 after:bg-current after:bottom-0 after:h-[1px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all" target='_blank' title='UI/UX, Strategy, Marketing Agency' href='https://weareenigma.com'>By: Enigma</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}