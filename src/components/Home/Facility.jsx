/* eslint-disable @next/next/no-img-element */
import PrimaryButton from "../Button/PrimaryButton";
import { paraAnim , imageAnim} from "../gsapAnimations";

export default function Facility() {
    paraAnim()
    imageAnim()
    return (
        <>
            <section className="pt-[0] pb-[4%] " id="facility">
                <div className="container-lg virtual bg-white/50 glassmorphism border border-gray-200">
                    <div className="w-1/2 relative z-10 space-y-[3.5vw] duration-300">
                        <h2 data-para-anim className="title-2 aeonik">
                            
                                Delve Deeper into the World of AMS
                            
                        </h2>
                        <p data-para-anim className="content-p mr-[6vw]">
                           
                                Experience our facility virtually.
                            
                        </p>
                        <PrimaryButton className={"fadeUp"} link={"/"} btnText={"Virtual Tour"}/>
                    </div>
                    <div className="relative w-[55%] rounded-[3vw] overflow-hidden fadeUp">
                        <img
                            className="w-full object-cover imageanim"
                            src="/assets/home/virtual.webp" 
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