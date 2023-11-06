import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReviewCard from "../Review/ReviewCard";

const RoomDetails = () => {

    const room = useLoaderData();
    const [reviews, setReviews] = useState([]);

    const { title, img, description, room_size, room_no, price, availability, special_offer, facilities, _id } = room;
    console.log(_id);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);

            })
    }, [_id])

    return (
        <div>
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

            <div>
                <h1 className="text-center text-3xl font-bold mb-16">Reviews</h1>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        reviews.filter(review => review.roomId === _id)
                            .map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                    }
                </div> */}
                {reviews.length === 0 ? (
                    <p className="text-center text-3xl">No reviews available for this room.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            reviews.filter(review => review.roomId === _id)
                                .map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoomDetails;