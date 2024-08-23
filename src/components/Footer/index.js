/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="main-gradient">
                <div className="bg-white py-10 w-full ">

                </div>
                <div className="container-sm">
                    <div className="grid grid-cols-12 pt-[3.5vw] pb-[1.5vw]">
                        <div className="col-span-4">
                            <div className="">
                                <p className="content-p text-anim-2">
                                    <span className="uppercase text-head">
                                        do you have any questions?
                                    </span>
                                </p>
                                <Link href="/#" className="flex items-baseline gap-[1.5vw] mb-[2.5vw] fadeUp">
                                    <span className="text-[5.3vw] text-head aeonik leading-[1] font-light">
                                        Contact
                                    </span>
                                    <img 
                                        className="inline w-[11%]"
                                        src="/assets/icons/arrow-up-right.svg"
                                        alt="arrow"
                                    />
                                </Link>
                                <div className="mb-[2.5vw]">
                                    <p className="content-p mb-[1vw] fadeUp">
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
                                <div className="social-icons flex items-bottom gap-[3vw] fadeUp">
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300">
                                        <img 
                                            className="w-[1.5vw] h-[1.5vw]"
                                            src="/assets/icons/fb.svg"
                                            alt="Facebook Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300">
                                        <img 
                                            className="w-[1.5vw] h-[1.5vw]"
                                            src="/assets/icons/linkedin.svg"
                                            alt="LinkedIn Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300">
                                        <img 
                                            className="w-[1.5vw] h-[1.5vw]"
                                            src="/assets/icons/twitter.svg"
                                            alt="Twitter Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300">
                                        <img 
                                            className="w-[1.5vw] h-[1.5vw]"
                                            src="/assets/icons/insta.svg"
                                            alt="Instagram Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300">
                                        <img 
                                            className="w-[1.6vw] h-[1.5vw]"
                                            src="/assets/icons/youtube.svg"
                                            alt="Youtube Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5 col-start-9 flex justify-between">
                            <div className="">
                                <h6 className="text-head content-p-lg mb-[1vw] fadeUp">
                                    <span className="font-light">
                                        About Us
                                    </span>
                                </h6>
                                <ul className="space-y-[0.8vw] leading-[135%] fadeUp">
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
                                        <Link className="content-p text-head font-light" href="/maufacturing">
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
                            <div className="w-[35%]">
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
                            className="col-span-full my-[5vw] fadeUp"
                            src="/ams-logo-with-tag.png"
                            alt="Logo"
                            height="248"
                        /> 
                        <div className="col-span-full flex justify-between text-head text-[1vw] font-light">
                            <p>© {new Date().getFullYear()} Advanced MedTech Solutions Pvt. Ltd</p>
                            <a className="relative after:absolute after:block after:left-0 after:bg-current after:bottom-0 after:h-[1px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all" target='_blank' title='UI/UX, Strategy, Marketing Agency' href='https://weareenigma.com'>By: Enigma</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}