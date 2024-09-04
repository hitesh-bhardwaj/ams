import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

export default function Discover() {
  return (
    <>
      <section className="pt-[0] pb-[4%]" id="discover">
        <div className="container-lg flex justify-between mt-[10%] items-center border-[1px] bg-white/50 glassmorphism border-[#DADADA] rounded-[60px] w-full h-[30vw] fadeUp">
          <div className="w-[70%] relative  space-y-[3vw] px-[7vw]">
            <h2 data-para-anim className="title-2 aeonik">
              <span className="">Discover Our R&D</span>
            </h2>
            <p className="content-p pb-[1vw]">
              <span data-para-anim className="">
                Engineering the Next Generation of Medical Solutions
              </span>
            </p>
            <div className="fadeUp">
              <PrimaryButton link={"/"} btnText={"Let's Meet"} />
            </div>
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
  );
}
