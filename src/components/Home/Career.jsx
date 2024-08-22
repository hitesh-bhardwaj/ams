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
                    <div className="w-[60%] relative z-10 space-y-[3.5vw]">
                        <h2 data-para-anim className="title-2 aeonik text-shadow ">
                            <span className="">
                                Join Our Mission to
                            </span>
                            <span>
                                Create a Healthier World
                            </span>
                        </h2>
                        <p data-para-anim className="content-p w-[70%] text-shadow ">
                            <span className="">
                                To achieve the extraordinary, we need an exceptional team. At AMS, diversity and inclusiveness are the foundation for our dynamic and thriving culture. Unleash your potential and achieve the extraordinary in your career. Our unwavering commitment to revolutionizing healthcare is fuelled by our desire to make a difference and a meaningful impact in people’s lives.
                            </span>
                        </p>
                        <PrimaryButton className={"fadeUp"} link={"/"} btnText={"Career"}/>
                    </div>
                </div>
            </section>
        </>
    )
}