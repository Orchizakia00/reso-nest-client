
const Membership = () => {
    return (
        <section className=" py-16">
            <h1 className="text-center text-4xl font-bold mb-10">Exclusive Membership</h1>
            <div className="bg-base-200 p-7 container mx-auto text-center rounded-xl">
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-md mx-4 mb-8">
                        <img src="https://i.ibb.co/9qVDYmY/golden-vip-retro-badge-background-23-2147657955.jpg" alt="Gold Membership" className="mx-auto mb-4 rounded-full" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Gold Membership</h3>
                        <p className="text-gray-700">Enjoy premium benefits, discounts, and exclusive offers as a Gold Member.</p>
                    </div>
                    <div className="max-w-md mx-4 mb-8">
                        <img src="https://i.ibb.co/VL8jZZZ/ornamental-card-with-silver-details-23-2147649635.jpg" alt="Silver Membership" className="mx-auto mb-4 rounded-full" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Silver Membership</h3>
                        <p className="text-gray-700">Unlock special privileges and savings with our Silver Membership program.</p>
                    </div>
                    <div className="max-w-md mx-4 mb-8">
                        <img src="https://i.ibb.co/Jx1JNZC/elegant-brown-gradient-business-card-templates-line-style-716334-155.jpg" alt="Bronze Membership" className="mx-auto mb-4 rounded-full" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Bronze Membership</h3>
                        <p className="text-gray-700">Experience a range of benefits and rewards with our Bronze Membership package.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;