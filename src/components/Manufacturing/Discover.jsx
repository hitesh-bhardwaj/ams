
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

export default function Discover() {
    return (
        <>
            <section className="pt-[0] pb-[4%]" id="discover">
                <div className="container-lg flex justify-between mt-[10%] items-center border-[1px] border-[#DADADA] rounded-[60px] w-full h-[30vw]">
                    <div className="w-[70%] relative  space-y-[3vw] px-[7vw]">
                        <h2 className="title-2 aeonik">
                            <span className="">
                            Discover Our R&D
                            </span>
                        </h2>
                        <p className="content-p pb-[1vw]">
                            <span className="">
                            Engineering the Next Generation of Medical Solutions
                            </span>
                        </p>
                        <PrimaryButton  link={"/"} btnText={"Let's Meet"}/>
                    </div>
                    <div className="relative w-[32vw] h-[25vw] overflow-hidden fadeUp">
                        <Image
                            fill
                            src="/assets/manufacturing/discover.png" 
                            alt="Discover"
                            
                        />
                    </div>
                </div>
            </section>
        </>
    )
}