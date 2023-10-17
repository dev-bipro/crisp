import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const SampleNextArrowForPc = (props) => {
    const { className, style, onClick } = props
    // console.log(props);
    return (
        <div
            className={"w-10 h-10 bg-black text-white flex items-center justify-center absolute bottom-3 right-3"}
            onClick={onClick}
        >
            <FaAngleRight />
        </div>
    );
}

export default SampleNextArrowForPc