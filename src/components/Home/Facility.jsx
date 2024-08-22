/* eslint-disable @next/next/no-img-element */
import PrimaryButton from "../Button/PrimaryButton";

export default function Facility() {
    return (
        <>
            <section className="pt-[0] pb-[4%]">
                <div className="container-lg virtual">
                    <div className="w-1/2 relative z-10 space-y-[3.5vw]">
                        <h2 data-para-anim className="title-2 aeonik">
                            <span className="">
                                Delve Deeper into the World of AMS
                            </span>
                        </h2>
                        <p data-para-anim className="content-p mr-[6vw]">
                            <span className="">
                                Experience our facility virtually.
                            </span>
                        </p>
                        <PrimaryButton className={"fadeUp"} link={"/"} btnText={"Virtual Tour"}/>
                    </div>
                    <div className="relative w-[55%] rounded-[3vw] overflow-hidden fadeUp">
                        <img
                            className="w-full object-cover"
                            src="/assets/home/virtual.png" 
                            alt="facility"
                            loading="lazy"
                            width={800}
                            height={600}
                        />
                        <img
                            src="/assets/icons/360.svg"
                            alt="360 icon"
                            className="absolute w-[15%] bottom-8 right-8"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}