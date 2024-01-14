

const Attractions = () => {
    const attractions = [
        { name: 'City Park', description: 'Beautiful park for leisure walks', image: 'https://i.ibb.co/64wQB9j/umbrella-chair-74190-3726.jpg' },
        { name: 'Historical Museum', description: 'Explore the rich history of the region', image: 'https://i.ibb.co/TL3k4Kj/london-sep-4-2019-people-visit-natural-history-museum-london-1339-84360.jpg' },
        { name: 'Shopping District', description: 'A variety of shops for your convenience', image: 'https://i.ibb.co/HNyKnNt/city-centre-mirdif-dubai-shopping-mall-has-400-stores-food-entertainment-facilities-mall-opened-2010.jpg' },
    ];

    return (
        <section className="py-16">
            <h1 className="text-center text-4xl font-bold mb-10">Our Attractions</h1>
            <div className="container mx-auto text-center my-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-0 mx-auto w-full">
                    {attractions.map((attraction, index) => (
                        <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl rounded-xl">
                            <figure><img src={attraction.image} alt={attraction.name} /></figure>
                            <div className="card-body items-center text-center my-2">
                                <h2 className="card-title">{attraction.name}</h2>
                                <p>{attraction.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Attractions;