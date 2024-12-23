import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function NavLink ({ href, linkText, className="" }) {
    return (
        <Link href={href} prefetch={false} className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light ${className}`}>
            <span
                data-attr={linkText}
                className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
            >
                {linkText}
            </span>
            <ArrowRight className="inline-block w-[1.5vw] tablet:w-[2.5vw] mobile:w-[5vw] text-current mb-[1%] group-hover:scale-100 stroke-[1.2px] opacity-0 group-hover:opacity-100 translate-x-[-50%] group-hover:translate-x-0 duration-300" />
        </Link>
    )
}

export function NavButton ({ linkText, onClick, className="" }) {
    return (
        <button onClick={onClick} className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light ${className}`}>
            <span
                data-attr={linkText}
                className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
            >
                {linkText}
            </span>
            <ArrowRight className="inline-block w-[1.5vw] tablet:w-[2.5vw] mobile:w-[5vw] text-current mb-[1%] group-hover:scale-100 stroke-[1.2px] opacity-0 group-hover:opacity-100 translate-x-[-50%] group-hover:translate-x-0 duration-300" />
        </button>
    )
}