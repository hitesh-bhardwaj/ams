import PrimaryButton from "../Button/PrimaryButton";

export default function Career() {
    return (
        <>
            <section className="p-y-sm">
                <div className="container-lg relative px-[8%] py-[8%]">
                    <video 
                        loading="lazy"
                        autoPlay 
                        loop
                        muted 
                        playsInline 
                        className="h-full w-full object-cover left-0 top-0 rounded-[3vw] absolute"
                        src="/assets/home/career.mp4">
                    </video>
                    <div className="w-1/2 relative z-10 space-y-[3.5vw]">
                        <h2 className="title-2 aeonik text-shadow text-anim">
                            <span className="">
                                Passion Meets
                            </span>
                            <span>
                                Purpose
                            </span>
                        </h2>
                        <p className="content-p mr-[6vw] text-shadow text-anim-2">
                            <span className="">
                                Join our misstext-whiteion to push the boundaries of healthcare and achieve the extraordinary.
                            </span>
                        </p>
                        <PrimaryButton className={"fadeUp"} link={"/"} btnText={"Career"}/>
                    </div>
                </div>
            </section>
        </>
    )
}