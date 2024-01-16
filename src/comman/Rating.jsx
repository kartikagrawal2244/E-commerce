import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ Rate, Count }) {

    const rating = Array.from({ length: 5 }, (_, index) => {
        let decimal = index + 0.5;

        return (
            <span className="inline-block">
                {
                    Rate >= index + 1 ? <FaStar /> : Rate >= decimal ? <FaStarHalfAlt /> : <FaRegStar />
                }
            </span>
        )
    })


    return (
        <div className="flex items-center">
            <p className='text-xl font-medium text-[#795376]'>{Rate}&nbsp;{rating}&nbsp;({Count})</p>
        </div>
    )
}

export default Rating