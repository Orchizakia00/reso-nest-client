
const Testimonials = () => {
    return (
        <div className="mb-16">
            <h1 className="text-center text-4xl font-bold mb-16">Testimonials</h1>
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex-1">
                                <img src="https:i.ibb.co/2YDzJkn/woman-looking-orange-tablet-1157-2103.jpg" alt="" />
                            </div>
                            <div className="flex-1 p-12 items-center flex">
                                <div>
                                    <p className="text-lg font-serif">My stay at ResoNest was exceptional. The staff was warm and attentive, the rooms were luxurious, and the dining experience was exquisite. A perfect blend of comfort and class.</p>
                                    <p className="text-center mt-4 font-mono">-- Sarah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex-1">
                                <img src="https://i.ibb.co/5vQs0JV/happy-woman-her-husband-standing-reception-desk-while-checking-hotel-637285-7448.jpg" alt="" />
                            </div>
                            <div className="flex-1 p-12 items-center flex">
                                <div>
                                    <p className="text-lg font-serif">Our stay at ResoNest was absolutely delightful. The staffs warmth, elegant rooms, and delicious dining made our vacation perfect. We highly recommend it!</p>
                                    <p className="text-center mt-4 font-mono">-- Emma and David</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex-1">
                                <img src="https://i.ibb.co/gzdyv4V/medium-shot-man-holding-smartphone-23-2149963943.jpg" alt="" />
                            </div>
                            <div className="flex-1 p-12 items-center flex">
                                <div>
                                    <p className="text-lg font-serif">ResoNest left me in awe. The attention to detail, breathtaking views, and exceptional service created an unforgettable stay. I am already planning my return!</p>
                                    <p className="text-center mt-4 font-mono">-- Nathan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex-1">
                                <img src="https://i.ibb.co/0QrgKgV/happy-couple-making-order-cafe-while-waiter-is-showing-them-menu-digital-table-637285-529.jpg" alt="" />
                            </div>
                            <div className="flex-1 p-12 items-center flex">
                                <div>
                                    <p className="text-lg font-serif">ResoNest provided us with a magical experience. The serene atmosphere, delightful cuisine, and friendly staff made our holiday truly special. We are grateful for these memories.</p>
                                    <p className="text-center mt-4 font-mono">-- Stephanie and Mark</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;