
const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="carousel w-screen lg:w-full mt-16">

                {/* 1st slider */}
                <div id="slide1" className="carousel-item relative w-full lg:min-h-[calc(100vh-30vh)]">
                    <div className="hero"
                        style={{ backgroundImage: `url(https://i.ibb.co/8NqXg7J/luxury-bedroom-hotel-1150-10836.jpg)`, borderRadius: '12px' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div>
                                <h1 data-aos="fade-up" className="text-4xl font-bold text-white">Discover Your Perfect Stay, <br /> Where Comfort Meets Luxury.</h1>
                                <p data-aos="fade-up" className="text-sm font-medium mt-4 text-white">
                                    Book Now, Experience Hospitality Like Never Before, Memorable Getaways Await.
                                </p>
                                <button data-aos="fade-up" className="btn btn-accent normal-case mt-5 border-none">Book Us</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* 2nd slider */}
                <div id="slide2" className="carousel-item relative w-full lg:min-h-[calc(100vh-30vh)]">
                    <div className="hero"
                        style={{ backgroundImage: `url(https://i.ibb.co/C6x8q9v/interior-modern-comfortable-hotel-room-1232-1822.jpg)`, borderRadius: '12px' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div>
                                <h1 className="text-4xl font-bold text-white">Discover Your Perfect Stay, <br /> Where Comfort Meets Luxury.</h1>
                                <p className="text-sm font-medium mt-4 text-white">
                                    Book Now, Experience Hospitality Like Never Before, Memorable Getaways Await.
                                </p>
                                <button className="btn btn-accent normal-case mt-5 border-none">Book Us</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* 3rd slider */}
                <div id="slide3" className="carousel-item relative w-full lg:min-h-[calc(100vh-30vh)]">
                    <div className="hero"
                        style={{ backgroundImage: `url(https://i.ibb.co/n79YC0t/modern-luxury-hotel-office-reception-lounge-with-meeting-room-105762-1772.jpg)`, borderRadius: '12px' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div>
                                <h1 className="text-4xl font-bold text-white">Discover Your Perfect Stay, <br /> Where Comfort Meets Luxury.</h1>
                                <p className="text-sm font-medium mt-4 text-white">
                                    Book Now, Experience Hospitality Like Never Before, Memorable Getaways Await.
                                </p>
                                <button className="btn btn-accent normal-case mt-5 border-none">Book Us</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* 4th slider */}
                <div id="slide4" className="carousel-item relative w-full lg:min-h-[calc(100vh-30vh)]">
                    <div className="hero"
                        style={{ backgroundImage: `url(https://i.ibb.co/z8w9Fj1/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling-140725-8504.jpg)`, borderRadius: '12px' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div>
                                <h1 className="text-4xl font-bold text-white">Discover Your Perfect Stay, <br /> Where Comfort Meets Luxury.</h1>
                                <p className="text-sm font-medium mt-4 text-white">
                                    Book Now, Experience Hospitality Like Never Before, Memorable Getaways Await.
                                </p>
                                <button className="btn btn-accent normal-case mt-5 border-none">Book Us</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* 5th slider */}
                <div id="slide5" className="carousel-item relative w-full lg:min-h-[calc(100vh-30vh)]">
                    <div className="hero"
                        style={{ borderRadius: '12px' }}>
                        <iframe
                            title="YouTube Video"
                            className="w-full h-full object-cover"
                            src="https://www.youtube.com/embed/eEY50BOF0wM?autoplay=1&mute=1&loop=1&controls=0&playlist=eEY50BOF0wM"
                            frameBorder="0"
                            allow="autoplay"
                            allowfullscreen
                        ></iframe>
                        <div className="hero-overlay bg-opacity-10 rounded-xl"></div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;