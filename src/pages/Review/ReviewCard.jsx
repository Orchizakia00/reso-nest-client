/* eslint-disable react/prop-types */

const ReviewCard = ({ review }) => {

    const { comment, rating, customerName, timestamp } = review;

    return (
        <div className="card w-96 shadow-xl">
            <div className="card-body">

                <p>{comment}</p>
                <p> <span className="font-bold">Rating:</span> {rating} / 5</p>
                <div className="flex flex-col text-right">
                    <h2 className="text-right text-lg">--{customerName}</h2>
                    <p className="">{timestamp}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;