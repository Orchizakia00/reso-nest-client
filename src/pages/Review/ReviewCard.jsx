/* eslint-disable react/prop-types */

const ReviewCard = ({ review }) => {

    const { comment, rating, customerName } = review;

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <div className="card-body">
                <h2 className="card-title">{customerName}</h2>
                <p>{comment}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;