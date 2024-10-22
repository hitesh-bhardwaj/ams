import Image from "next/image";


export default function Innovation() {
  return (
    <>
      <section className="pt-[0] pb-[7%] mobile:pb-[15%]" id="Innovation">
        <div className="w-full border h-[30vw] border-black rounded-[3vw] flex">
            <div className="w-1/3 h-full relative px-[4vw] flex justify-center items-center">
            <Image src="/assets/rnd/innovation-left.webp" alt="innovation-left" fill className="object-contain absolute top-0 left-0"/>
            <h4 className="text-white text-[2vw] text-center">Knotless tissue control device</h4>
            

            </div>

        </div>
      </section>
    </>
  );
}