import Link from "next/link";

export function NavLink ({ href, linkText, className="" }) {
    return (
        <Link href={href} prefetch={false} className={`text-[1.5vw] fade-in-0 leading-tight text-body tablet:text-[2.5vw] mobile:text-[10vw] overflow-hidden block relative group aeonik font-light ${className}`}>
            <span
                data-attr={linkText}
                className="block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
            >
                {linkText}
            </span>
        </Link>
    )
}

export function NavButton ({ linkText, onClick, className="" }) {
    return (
        <button onClick={onClick} className={`text-[1.5vw] fade-in-0 leading-tight text-body tablet:text-[2.5vw] mobile:text-[10vw] overflow-hidden block relative group aeonik font-light ${className}`}>
            <span
                data-attr={linkText}
                className="block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
            >
                {linkText}
            </span>
        </button>
    )
}