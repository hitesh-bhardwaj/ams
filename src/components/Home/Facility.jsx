/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
export default function Facility() {

    return (
        <>
            <section className="pt-[0] pb-[4%] mobile:pb-[10%] tablet:pb-[8%]" id="facility">
                <div className="container-lg virtual rounded-[4vw] flex items-center justify-between px-[6%] py-[5%] bg-white/50 glassmorphism border border-gray-200 group-hover:bg-white group-hover:shadow-xl duration-300 mobile:flex-col-reverse mobile:rounded-[9vw] tablet:flex tablet:flex-col tablet:justify-between tablet:gap-[5vw]">
                    <div className="w-[45%] relative z-10 space-y-[2.5vw] duration-300 tablet:order-1 tablet:w-full mobile:w-[89%] mobile:text-center mobile:py-[5vw] mobile:flex-col mobile:items-center mobile:justify-center mobile:space-y-[10vw]">
                        <h2 data-para-anim className="title-2 aeonik">
                            Delve Deeper into the World of AMS
                        </h2>
                        <p data-para-anim className="content-p mr-[6vw] mobile:mr-[0vw] ">
                            Experience our facility virtually.
                        </p>
                        <div className="w-full flex mobile:justify-center pt-[2vw]">
                            <PrimaryButton className={"fadeUp"} link={"/"} btnText={"Virtual Tour"} />
                        </div>
                    </div>
                    <div className="relative w-[45%] h-[28vw] rounded-[4vw] overflow-hidden fadeUp mobile:h-[100vw] mobile:w-[80vw] mobile:rounded-[6vw] tablet:w-[80vw] tablet:h-[30vh]">
                        <Image data-speed="0.7"
                            className="w-full object-cover scale-[1.4] imageanim"
                            src="/assets/home/virtual.webp"
                            alt="facility"
                            fill
                        />
                        <Image
                            src="/assets/icons/360.svg"
                            alt="360 icon"
                            className="absolute w-[15%] bottom-8 right-8"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}