import { Helmet } from "react-helmet-async";

const Faq = () => {
    return (
        <div className="mb-16">
            <Helmet>
                <title>ResoNest | FAQ</title>
            </Helmet>
            <div className="hero h-[50vh] rounded-xl mb-24" style={{ backgroundImage: 'url(https://i.ibb.co/xzQ7QTh/modern-lamp-illuminates-elegant-living-room-decor-generated-by-ai-188544-31714.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">FAQ</h1>
                    </div>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 w-3/4 mx-auto">
                <div className="collapse collapse-arrow border border-base-300">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What services does ResoNest provide?
                    </div>
                    <div className="collapse-content">
                        <p>At ResoNest, we offer a comprehensive range of hotel management services, including operations management, revenue optimization, marketing and branding, guest experience enhancement, and sustainable practices implementation. We tailor our services to meet the unique needs of each property, ensuring maximum profitability and guest satisfaction.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How can I inquire about partnering with ResoNest?
                    </div>
                    <div className="collapse-content">
                        <p>To inquire about partnering with us, simply visit our Contact Us page on our website. You can fill out the inquiry form, and our dedicated team will get back to you promptly to discuss your hotel management needs and explore potential collaborations.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can ResoNest work with different types of hotels?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we have experience working with various types of hotels, including boutique hotels, luxury resorts, business hotels, and more. Our team is adaptable and skilled in tailoring our services to suit the unique requirements of different hotel properties.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How does ResoNest approach sustainability?
                    </div>
                    <div className="collapse-content">
                        <p>We are committed to environmental responsibility. Our approach to sustainability includes implementing eco-friendly practices, energy conservation, waste reduction, and community engagement initiatives. We work closely with our clients to develop and implement sustainable strategies that benefit both the environment and the local community.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What sets ResoNest apart from other hotel management companies?
                    </div>
                    <div className="collapse-content">
                        <p>ResoNest stands out due to our guest-centric approach, innovative strategies, transparency, and dedicated team of professionals. We prioritize exceptional guest experiences, stay updated with industry trends, operate with integrity, and empower our teams to deliver outstanding results for our clients.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How does ResoNest handle staff training and development?
                    </div>
                    <div className="collapse-content">
                        <p>We invest in the training and development of our staff to ensure they have the skills and knowledge required to provide exceptional service. Our training programs cover various aspects of hospitality management, including customer service, technical skills, and leadership development, fostering a culture of excellence within our team.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can ResoNest help with hotel renovations and upgrades?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we can assist with hotel renovations and upgrades. Our experienced team can provide valuable insights and project management support to ensure that renovations and upgrades are executed efficiently, within budget, and in alignment with the hotels brand identity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;