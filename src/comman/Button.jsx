import { Link } from "react-router-dom";

export function OutlineButton({ name, to }) {
    return (
        <Link to={to} className='py-4 px-12 hover:bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] hover:text-white text-base font-medium uppercase transition-all bg-transparent text-[#B08EAD] ease-in-out duration-[0.5s]'>{name}</Link>
    )
}

export function CommanButton({ name, to }) {
    return (
        <Link to={to} className='py-4 px-12 bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] text-white text-base font-medium capitalize transition-all hover:bg-transparent hover:text-[#B08EAD] ease-in-out duration-[0.5s]'>{name}</Link>
    )
}