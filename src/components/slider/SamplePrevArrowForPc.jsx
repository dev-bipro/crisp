import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

const SamplePrevArrowForPc = (props) => {
    const {className,onClick } = props;
    return (
        <div
            className={"w-10 h-10 bg-black text-white flex items-center justify-center absolute bottom-3 right-8 -translate-x-full z-20"}
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}

export default SamplePrevArrowForPc