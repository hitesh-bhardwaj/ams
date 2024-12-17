import LazyVideo from "@/components/layoutComponents/LazyVideo";

const HomePageReel = () => {
  return (
    <>
      <section className='w-screen h-full py-[8%] bg-white/50 mobile:h-[50vh]' id='homepagereel'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='h-[40vw] w-[90vw] overflow-hidden rounded-[2.5vw]'>
            <LazyVideo
              poster={"/assets/home/homepage-reel-poster.webp"}
              type="video/mp4"
              autoPlay
              loop
              videoSrc={"/assets/home/homepage-reel.mp4"}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePageReel
