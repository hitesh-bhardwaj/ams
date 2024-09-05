import Link from "next/link";

const PrimaryButton = ({link, btnText, className}) => {
    return(
        <>
        {/* <Link href={link} className={`btn ${className}`}>
            <div aria-hidden="true" className="button-gradient w-full h-full absolute top-0 left-0">
               
            </div>
            <span data-primary className="btn-text relative z-[4]">
                {btnText}
            </span>
            
        </Link> */}
        <Link href={link} className="min-w-[11vw] w-fit h-fit fadeUp group text-center relative py-[0.9vw] px-[3vw] rounded-full group bg-[#9E7BDF] overflow-hidden block">
                  <div className="h-full w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300">
                    <span className="block h-full w-full bg-gradient-to-r from-[#9E7BDF] via-[#ac26b0] to-blue-700 button-animate"/>
                  </div>
                    <span className="text-[1.15vw] aeonik text-center text-white block relative z-[1]">{btnText}</span>
                </Link>
        
        </>
        

    )
}

export default PrimaryButton;