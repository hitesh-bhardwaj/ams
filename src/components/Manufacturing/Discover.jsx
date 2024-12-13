import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

export default function Discover() {
  return (
    <>
      <section className="pt-[0] pb-[7%] mobile:pb-[15%]" id="discover">
        <div className=" w-screen h-full flex items-center justify-center gap-[7vw]">
        <div className="w-[38%] px-[2.5vw] py-[5vw] bg-white/50  rounded-[2.5vw]  fadeUp overflow-hidden mobile:flex-col mobile:h-full mobile:py-[15vw] mobile:rounded-[6vw] tablet:h-[50vw] tablet:rounded-[3vw]">
          <div className="relative  space-y-[3vw]  mobile:order-1 mobile:w-[90%] mobile:flex mobile:flex-col mobile:justify-center mobile:gap-[5vw] mobile:mt-[10vw]">
            <h2
data-para-anim className="text-[2.5vw] font-light aeonik mobile:text-center">
              <span className="">AMS OEM Solutions</span>
            </h2>
            <p className="content-p pb-[1vw] mobile:text-center">
              <span data-para-anim className="">
              AMS offers comprehensive OEM solutions tailored to meet diverse client needs.
              </span>
            </p>
            <div className="fadeUp mobile:w-full mobile:flex mobile:justify-center">
              <PrimaryButton link={"/oem"} text={"AMS OEM"} />
            </div>
          </div>
        </div>
        <div className="w-[45%] h-[29vw] p-[3vw] relative bg-white/50 rounded-[2.5vw]  fadeUp overflow-hidden mobile:flex-col mobile:h-full mobile:py-[15vw] mobile:rounded-[6vw] tablet:h-[50vw] tablet:rounded-[3vw]">
          <Image src="/assets/manufacturing/oem.png" fill alt="manufacturing oem"
          />
        </div>

        </div>
      </section>
    </>
  );
}
