import { Link, useLoaderData } from "react-router-dom";

const RoomDetails = () => {

    const room = useLoaderData();

    const { title, img, description, room_size, room_no, price, availability, special_offer, facilities, _id } = room;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-10">
            <figure><img src={img} alt="Album" className="h-full" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <p>{description}</p>
                <p> <span className="font-bold">Facilities: </span> {facilities}</p>
                <p> <span className="font-bold">Price Per Night: </span> ${price}</p>
                <p> <span className="font-bold">Room No: </span> {room_no}</p>
                <p> <span className="font-bold">Room Size: </span> {room_size}</p>
                <p> <span className="font-bold">Availability: </span>
                    {
                        availability === true ? "Available" : "Not Available"
                    }
                </p>
                <p> <span className="font-bold">Special Offer: </span>
                    {special_offer !== null ? special_offer : "No special offer available"}
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-accent">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;