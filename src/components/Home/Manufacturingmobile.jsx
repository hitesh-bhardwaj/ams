/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../Button/PrimaryButton";
import { paraAnim } from "../gsapAnimations";
import Image from "next/image";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Manufacturingmobile() {
  paraAnim();
  return (
    <>
      <section className="pb-[12%]" id="manufacturingmobile">
        <div className="container-lg">
          <div className="flex flex-col items-center justify-center mobile:flex-col mobile:gap-[10vw]">
            {/* Video and First Text */}
            <div className="w-full h-auto mb-[5%] mobile:mb-[10%] flex flex-col items-center justify-center">
              <div className="relative w-full h-[60vh] mb-[4vw] mobile:w-[90vw] mobile:h-[110vw] mobile:rounded-[8vw] overflow-hidden fadeUp mobile:object-cover">
                <video
                autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover"
                  src="/assets/home/ams-manufacturing-video.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-full flex flex-col justify-center items-center text-center mobile:flex-col  mobile:h-auto mb-[4vw] mobile:mb-[20vw] mobile:w-[90%] mobile:my-[5vw] mobile:gap-[5vw] ">
                <h2 data-para-anim className="title-2 aeonik text-center">
                  Ushering in the Next Generation of Medical Technology
                </h2>
                <p data-para-anim className="content-p my-[4vw] text-center">
                  AMS leverages strategic global partnerships to procure
                  state-of-the-art manufacturing technology, ensuring
                  uncompromising quality, innovation, and agility in our
                  processes. Our adherence to LEAN principles and
                  implementation of a robust quality management system
                  guarantees compliance with the most stringent global
                  regulatory standards.
                </p>
                <PrimaryButton
                  className={"fadeUp"}
                  btnText={"Manufacturing"}
                  link={"/"}
                />
              </div>
            </div>

            {/* Second Image and Text */}
            <div className="w-full h-auto mb-[5%] flex flex-col items-center justify-center">
              <div className="relative w-full h-[60vh] mb-[4vw] mobile:w-[70%] mobile:h-[80vw] mobile:mb-[20vw] fadeUp">
                <Image
                  fill
                  className="w-full h-full object-cover scale-[1.4] mobile:rounded-[8vw]"
                  src="/assets/home/manufacturing-2.webp"
                  alt="image"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center text-center mobile:flex-col mobile:h-auto mb-[4vw] mobile:mb-[20vw] mobile:w-[90%] mobile:my-[5vw] mobile:gap-[5vw]">
                <h2 data-para-anim className="title-2 aeonik">
                  Building World Class Capability
                </h2>
                <p data-para-anim className="content-p my-[4vw]">
                  Designed by renowned Spanish architect Ricardo Bofill, the AMS
                  facility meets the Gold standard on Green building principles
                  for sustainability and conforms to ISO 14001 safety and
                  environmental specifications. Approx. 150,000 sq. ft.
                  completed in Phase I and 180,000 sq.ft expansion in phase II.
                </p>
                <PrimaryButton btnText={"Manufacturing"} link={"/"} className={"fadeUp"} />
              </div>
            </div>

            {/* Third Image and Text */}
            <div className="w-full h-auto flex flex-col items-center justify-center mobile:h-[100%]">
              <div className="relative w-full h-[60vh] mb-[4vw] mobile:w-[70%] mobile:h-[80vw] mobile:mb-[20vw] fadeUp">
                <Image
                  fill
                  className="w-full h-full object-cover scale-[1.4] mobile:rounded-[8vw]"
                  src="/assets/home/manufacturing-3.webp"
                  alt="image"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center text-center mobile:flex-col mobile:h-auto mb-[4vw] mobile:w-[90%] mobile:my-[5vw] mobile:gap-[5vw]">
                <h2 data-para-anim className="title-2 aeonik">
                  Robust Manufacturing Processes
                </h2>
                <p data-para-anim className="content-p my-[4vw]">
                  The AMS plant design is based on LEAN concepts, Schedule M
                  compliance, and Class C clean room principles. The Testing and
                  Microbiological Laboratories are outfitted with best-in-class
                  equipment. All under the supervision of experienced
                  Manufacturing and Quality teams.
                </p>
                <PrimaryButton btnText={"Manufacturing"} link={"/"} className={"fadeUp"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
