import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

export default function Discover() {
  return (
    <>
      <section className="pt-[0] pb-[7%] mobile:pb-[15%]" id="discover">
        <div className="px-[5%] h-full flex items-center justify-between tablet:gap-0 tablet:justify-between mobile:flex-col-reverse mobile:px-[5%] mobile:gap-8">
          <div className="w-[39.5vw] px-[2.5vw] py-[5vw] bg-white/50 rounded-[2.5vw] fadeUp overflow-hidden mobile:flex-col mobile:h-full mobile:py-[15vw] mobile:rounded-[6vw] tablet:h-[55vw] tablet:rounded-[3vw] tablet:w-[48%] mobile:w-full">
            <div className="relative space-y-[2.2vw] mobile:order-1 mobile:flex mobile:flex-col mobile:justify-center mobile:gap-[5vw] mobile:w-full">
              <h2 data-para-anim className="text-[2.8vw] tablet:text-[5vw] aeonik mobile:text-center mobile:text-[11vw] mobile:font-light mobile:leading-[1.2]">
                AMS OEM Solutions
              </h2>
              <p data-para-anim className="content-p pb-[1vw] mobile:text-center">
                AMS offers specialized OEM solutions crafted to support medical device manufacturers in achieving excellence.
              </p>
              <div className="fadeUp pt-[1.5vw] mobile:w-full mobile:flex mobile:justify-center">
                <PrimaryButton link={"/oem"} text={"AMS OEM"} className="!border-gray-200" />
              </div>
            </div>
          </div>
          <div className="w-[46.5vw] h-[29vw] relative bg-white/50 rounded-[2.5vw] fadeUp overflow-hidden mobile:flex-col mobile:h-full mobile:rounded-[6vw] tablet:h-[50vw] tablet:w-[48%] tablet:rounded-[3vw] mobile:w-full">
            <Image src="/assets/manufacturing/oem.png" width={870} height={550} className="w-full h-full object-cover" alt="manufacturing oem" />
          </div>
        </div>
      </section>
    </>
  );
}
