
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

export default function Discover() {
    return (
        <>
            <section className="pt-[0] pb-[4%]">
                <div className="container-lg flex justify-between mt-[10%] items-center border-[1px] border-[#DADADA] rounded-[40px]">
                    <div className="w-1/2 relative  space-y-[3vw] px-[5vw]">
                        <h2 className="title-2 aeonik">
                            <span className="">
                            Discover Our R&D
                            </span>
                        </h2>
                        <p className="content-p mr-[6vw]">
                            <span className="">
                            Engineering the Next Generation of Medical Solutions
                            </span>
                        </p>
                        <PrimaryButton  link={"/"} btnText={"Let's Meet"}/>
                    </div>
                    <div className="relative w-[40vw] h-[30vw] rounded-[3vw] overflow-hidden fadeUp">
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