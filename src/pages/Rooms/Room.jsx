/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Room = ({ room }) => {

    const { title, img, _id } = room;

    return (
        <div data-aos="fade-up" className="card card-compact w-96 bg-base-100 shadow-xl hover:bg-base-200">
            <figure><img src={img} alt={title} className="w-[400px] h-[200px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/roomDetails/${_id}`}>
                        <button className="btn text-orange-500 bg-orange-200 hover:bg-orange-300">
                            <FaArrowRightLong />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Room;