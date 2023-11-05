/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";

const Room = ({ room }) => {

    const { title, img } = room;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={title} className="w-[400px] h-[200px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn text-orange-500">
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Room;