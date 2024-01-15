
export function OnclickButton({ name, onClick }) {
    return (
        <button onClick={onClick} className='py-4 px-12 bg-[#B08EAD] border-[2px] border-[#B08EAD] rounded-[5px] text-white text-base font-medium capitalize transition-all hover:bg-transparent hover:text-[#B08EAD] ease-in-out duration-[0.5s]'>{name}</button>
    )
}