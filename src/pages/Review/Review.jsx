import { useLoaderData } from "react-router-dom";


const Review = () => {

    const room = useLoaderData();

    const { roomTitle, roomImg } = room;

    const handleReview = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const comment = form.comment.value;

        const review = {
            customerName: name,
            rating,
            comment,
        }
        console.log(review);
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-16">Feel Free To Share Your Experience </h1>
            <div className="flex">
                <div className="flex-1">
                    <p className="text-2xl mb-4 font-semibold text-center">{roomTitle}</p>
                    <img src={roomImg} alt="" />
                </div>
                <div className="flex-1">
                    <form onSubmit={handleReview} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Your Rating" name="rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Comment</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name="comment" placeholder="Write Your Comment"></textarea>
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn btn-accent normal-case">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;