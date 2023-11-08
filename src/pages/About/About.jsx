import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

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

            <div>
                <h1 className="text-center text-4xl font-bold mb-16">Meet Our Team</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">

                    <div className='text-center w-[314px] space-y-3'>
                        <img className='h-[200px] rounded-xl' src="https://i.ibb.co/YbZrGb9/leadership-concept-ai-generated-image-268835-5687.jpg" alt="" />
                        <p className='font-bold text-2xl'>Robert Anderson</p>
                        <p>General Manager</p>
                        <div className='flex gap-4 justify-center'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>

                    <div className='text-center w-[314px] space-y-3'>
                        <img className='h-[200px] rounded-xl' src="https://i.ibb.co/bz3S3mH/confident-businesswoman-serious-businessman-office-generated-by-ai-188544-26828.jpg" alt="" />
                        <p className='font-bold text-2xl'>Sarah Johnson</p>
                        <p>Front Desk Manager</p>
                        <div className='flex gap-4 justify-center'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>

                    <div className='text-center w-[314px] space-y-3'>
                        <img className='h-[200px] rounded-xl' src="https://i.ibb.co/mGh8HCq/confident-businesswoman-standing-luxury-office-smiling-toothy-smile-generated-by-ai-188544-61328.jpg" alt="" />
                        <p className='font-bold text-2xl'>Sophia Martin</p>
                        <p>Guest Services Manager</p>
                        <div className='flex gap-4 justify-center'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>

                    <div className='text-center w-[314px] space-y-3'>
                        <img className='h-[200px] rounded-xl' src="https://i.ibb.co/cQQVRTz/close-up-businessman-smiling-23-2150771099.jpg" alt="" />
                        <p className='font-bold text-2xl'>Benjamin Carter</p>
                        <p>Sales and Marketing Manager</p>
                        <div className='flex gap-4 justify-center'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>

                    <div className='text-center w-[314px] space-y-3'>
                        <img className='h-[200px] rounded-xl' src="https://i.ibb.co/xj8G2Kk/confident-elegant-businessman-holds-champagne-flute-party-generated-by-artificial-intellingence-2503.jpg" alt="" />
                        <p className='font-bold text-2xl'>Mia Walker</p>
                        <p>Food and Beverage Manager</p>
                        <div className='flex gap-4 justify-center'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>

                    <div className='text-center w-[314px] space-y-3'>
                        <img className='h-[200px] rounded-xl' src="https://i.ibb.co/VVCTsWr/confident-businesswoman-suit-elegance-beauty-generated-by-ai-24640-81238.jpg" alt="" />
                        <p className='font-bold text-2xl'>Chloe Foster</p>
                        <p>Human Resources Manager</p>
                        <div className='flex gap-4 justify-center'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;