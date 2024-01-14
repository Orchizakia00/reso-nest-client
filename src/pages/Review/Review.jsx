import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const Review = () => {

    const room = useLoaderData();

    const { roomTitle, roomImg, roomId } = room;

    const handleReview = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const comment = form.comment.value;

        const timestamp = new Date().toISOString();

        const newReview = {
            roomId,
            customerName: name,
            rating,
            comment,
            timestamp
        }
        console.log(newReview);

        fetch('https://reso-nest-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
           .then(res => res.json())
           .then(data => {
                console.log(data);
                toast.success('Your Review is Successfully Submitted!');
            });
    }

    return (
        <div className="mb-16">
            <h1 className="text-center text-3xl font-bold mb-16">Feel Free To Share Your Experience </h1>
            <div className="flex flex-col gap-3 lg:flex-row items-center">
                <div className="flex-1">
                    <img src={roomImg} alt="" className="rounded-xl mt-4 px-3" />
                    <p className="text-2xl my-4 font-bold text-center">{roomTitle}</p>
                </div>
                <div className="flex-1 w-full">
                    <h1 className="text-center text-2xl font-bold mt-4">Write a Review</h1>
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