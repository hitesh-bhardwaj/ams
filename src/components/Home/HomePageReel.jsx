import LazyVideo from "@/components/layoutComponents/LazyVideo";

const HomePageReel = () => {
  return (
    <>
      <section className='h-full py-[10%] tablet:py-[15%] bg-white/50 mobile:py-[20%]' id='homepagereel'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='h-[45vw] w-[90vw] overflow-hidden rounded-[2.5vw] fadeUp'>
            <LazyVideo
              poster={"/assets/home/homepage-reel-poster.webp"}
              type="video/mp4"
              muted
              autoPlay
              loop
              videoSrc={"/assets/home/homepage-reel.mp4"}
              className='w-full h-full object-cover scale-[1.15]'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePageReel
