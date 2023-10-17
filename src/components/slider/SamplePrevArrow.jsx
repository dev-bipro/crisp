import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

function SamplePrevArrow(props) {
    const {className,onClick } = props;
    return (
        <div
            className="w-10 h-10 bg-black text-white flex items-center justify-center absolute left-3 bottom-3 z-10"
            style={{}}
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}
export default SamplePrevArrow