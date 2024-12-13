import PrimaryButton from "../Button/PrimaryButton";
import LazyVideo from "../layoutComponents/LazyVideo";

export default function Career() {
    return (
        <>
            <section className="p-y-sm" id="career">
                <div className="container-lg relative px-[8%] py-[6%] overflow-hidden rounded-[2.5vw] mobile:rounded-[7vw] mobile:py-[15%] fadeUp">
                <LazyVideo
                    poster={"/assets/home/career-poster.webp"}
                    type="video/mp4"
                    autoPlay="true"
                    loop="true"
                    videoSrc={"/assets/home/career.mp4"}
                    className='w-full h-full object-cover left-0 top-0 absolute'
                    />
                    <div className="w-[58%] h-[35vw] relative z-10 space-y-[1vw] tablet:w-[70%] mobile:w-[100%] mobile:space-y-[5vw] mobile:text-center mobile:flex-col " >
                        <h2 className="title-2 aeonik mobile:w-full">
                            <span data-para-anim className="text-shadow1">
                            Join Our Mission to
                            </span>
                            <span data-para-anim className="text-shadow1">
                                Create a Healthier World
                            </span>
                        </h2>
                        <p data-para-anim className="content-p w-[70%] text-shadow1 mobile:w-[100%] tablet:text-[1.8vw] tablet:w-full mobile:py-[5vw] ">
                        To achieve the extraordinary, we need an exceptional team. At AMS, diversity and inclusiveness are the foundation for our dynamic and thriving culture. Unleash your potential and achieve the extraordinary in your career. Our unwavering commitment to revolutionizing healthcare is fuelled by our desire to make a difference in people&apos;s lives.
                        </p>
                        <div className="w-full flex mobile:justify-center pt-[3vw] fadeUp">
                        <PrimaryButton className={""} link={"/career"} text={"Career"}/>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}
