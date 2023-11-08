import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>ResoNest | About Us</title>
            </Helmet>
            <div className="hero h-[50vh] rounded-xl mb-24" style={{ backgroundImage: 'url(https://i.ibb.co/xzQ7QTh/modern-lamp-illuminates-elegant-living-room-decor-generated-by-ai-188544-31714.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">Welcome to ResoNest</h1>
                        <p>At ResoNest, we specialize in providing exceptional hotel management services tailored to meet the unique needs of each property we manage. With a passion for hospitality and a commitment to excellence, we have earned a reputation for delivering outstanding results in the hotel industry.</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-8 mb-16">
                <div className="flex flex-col flex-1 items-center justify-center">
                    <h2 className="mb-5 text-3xl text-left font-bold">Our Mission</h2>
                    <p>At ResoNest, our mission is to redefine hospitality management by fostering unforgettable guest experiences, driving operational excellence, and maximizing profitability for our clients. We are dedicated to creating a harmonious balance between exceptional service, sustainable practices, and financial success, ensuring that every hotel under our management thrives and stands out in the competitive hospitality landscape.</p>
                </div>
                <div className="flex-1">
                    <img className="w-full" src="https://i.ibb.co/VDTB0Ws/travelers-reception-1098-14597.jpg" alt="hotel management services" />
                </div>
            </div>

            <div className="mb-16">
                {/* <h1 className="mb-5 text-4xl text-center font-bold">Why Choose Us</h1> */}

                {/* <div className="flex w-3/5 mx-auto">
                    <div className="text-left flex-1">
                        <li>Our portfolio showcases successful partnerships with a diverse range of hotels, from boutique establishments to luxury resorts.</li>
                        
                        <li>The hospitality industry is ever-evolving. We stay ahead of the curve, embracing innovation and adapting to emerging trends to keep your hotel competitive.</li>
                        
                    
                        <li>Our passionate and skilled team is committed to your hotels success. We work tirelessly to exceed your expectations and deliver outstanding results.</li>
                        
                        <li>We understand that each hotel is unique. That is why we customize our services to meet the specific needs and goals of your property.</li>
                        
                    </div>
                </div> */}

                <div className="flex gap-8 mb-16 bg-base-200 pr-6">
                    <div className="flex-1">
                        <img className="w-full" src="https://i.ibb.co/6PDCbNj/rendering-building-with-word-top-it-878402-2656.jpg" alt="hotel management services" />
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center">
                        <h2 className="mb-5 text-3xl text-left font-bold">Our Story</h2>
                        <p>Established with a vision to redefine the standards of hotel management, ResoNest has been a trusted partner for hotel owners and investors. Our journey began with the belief that every hotel has a distinct personality and potential waiting to be unlocked. With this conviction, we embarked on a mission to enhance guest experiences, maximize revenue, and optimize operational efficiency for our clients.

                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;