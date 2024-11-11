import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

export default function Discover() {
  return (
    <>
      <section className="pt-[0] pb-[7%] mobile:pb-[15%]" id="discover">
        <div className="">
        <div className=" group container-lg flex justify-between items-center border-[1px] bg-white/50  border-[#DADADA] rounded-[60px] w-full h-[30vw] fadeUp hover:shadow-xl duration-300 overflow-hidden hover:bg-white ease-in mobile:flex-col mobile:h-full mobile:py-[15vw] mobile:rounded-[6vw] tablet:h-[50vw] tablet:rounded-[3vw]">
          <div className="w-[70%] relative  space-y-[3vw] px-[7vw] mobile:order-1 mobile:w-[90%] mobile:flex mobile:flex-col mobile:justify-center mobile:gap-[5vw] mobile:mt-[10vw]">
            <h2 data-para-anim className="title-2 aeonik mobile:text-center">
              <span className="">Discover Our R&D</span>
            </h2>
            <p className="content-p pb-[1vw] mobile:text-center">
              <span data-para-anim className="">
                Engineering the Next Generation of Medical Solutions
              </span>
            </p>
            <div className="fadeUp mobile:w-full mobile:flex mobile:justify-center">
              <PrimaryButton link={"/"} btnText={"Let's Meet"} />
            </div>
          </div>
          <div className="relative w-[32vw] h-[25vw] fadeUp mobile:w-[85vw] mobile:h-[85vw] mobile:-mr-[5%]">
            <Image
            className="group-hover:scale-[1.1] duration-300"
              fill
              src="/assets/manufacturing/discover.webp"
              alt="Discover"
            />
          </div>
        </div>

        </div>
      </section>
    </>
  );
}
