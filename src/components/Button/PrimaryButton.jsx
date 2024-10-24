import Link from "next/link";

const PrimaryButton = ({link, btnText, className}) => {
    return(
        <>
      
        <Link href={link} className={`min-w-[11vw] w-fit h-fit group text-center relative py-[0.9vw] px-[3vw] rounded-full group bg-[#7f6aaf] overflow-hidden block mobile:min-w-[40vw] mobile:py-[3vw] ${className}`}>
                  <div className="h-full w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300">
                    <span className="block h-full w-full bg-gradient-to-r from-[#9E7BDF] via-[#ac26b0] to-blue-700 button-animate"/>
                  </div>
                    <span className="text-[1.15vw] aeonik text-center text-white block relative z-[1] tablet:text-[2vw] mobile:text-[4.5vw] mobile:font-light">{btnText}</span>
                </Link>
        
        </>
        

    )
}

export default PrimaryButton;