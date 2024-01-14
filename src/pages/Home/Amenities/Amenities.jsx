

const Amenities = () => {
    return (
        <section className="my-16 py-16">
            <h1 className="text-center text-4xl font-bold mb-10">Our Luxurious Amenities</h1>
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mx-auto w-full">
                    <div className="max-w-xs m-4">
                        <img src="https://i.ibb.co/LZ58Cvz/beautiful-outdoor-swimming-pool-hotel-resort-holiday-vacation-74190-9138.jpg" alt="Pool" className="mx-auto mb-4 rounded-xl h-[200px] w-full" />
                        <p className="text-gray-700 text-xl font-semibold">Sparkling Pool</p>
                    </div>
                    <div className="max-w-xs m-4">
                        <img src="https://i.ibb.co/kBPmXqF/beautiful-composition-spa-bath-concept-23-2148094290.jpg" alt="Spa" className="mx-auto mb-4 rounded-xl h-[200px] w-full" />
                        <p className="text-gray-700 text-xl font-semibold">Luxurious Spa</p>
                    </div>
                    <div className="max-w-xs m-4">
                        <img src="https://i.ibb.co/f82rtC7/close-up-mediterranean-food-23-2147772055.jpg" alt="Restaurant" className="mx-auto mb-4 rounded-xl h-[200px] w-full" />
                        <p className="text-gray-700 text-xl font-semibold">Fine Dining Restaurant</p>
                    </div>
                    <div className="max-w-xs m-4">
                        <img src="https://i.ibb.co/cC0H472/running-tracks-empty-health-club-637285-8442.jpg" alt="Gym" className="mx-auto mb-4 rounded-xl h-[200px] w-full" />
                        <p className="text-gray-700 text-xl font-semibold">State-of-the-Art Gym</p>
                    </div>
                    <div className="max-w-xs m-4">
                        <img src="https://i.ibb.co/qJ9YBNw/sign-that-says-free-wifi-zone-it-888684-724.jpg" alt="Wi-Fi" className="mx-auto mb-4 rounded-xl h-[200px] w-full" />
                        <p className="text-gray-700 text-xl font-semibold">Free Wi-Fi</p>
                    </div>
                    <div className="max-w-xs m-4">
                        <img src="https://i.ibb.co/kcqF5h9/interior-wooden-meeting-room-with-full-function-equipment-1258-84896.jpg" alt="Conference" className="mx-auto mb-4 rounded-xl h-[200px] w-full" />
                        <p className="text-gray-700 text-xl font-semibold">Conference Facilities</p>
                    </div>
                    {/* Add more amenities as needed */}
                </div>
            </div>
        </section>
    );
};

export default Amenities;