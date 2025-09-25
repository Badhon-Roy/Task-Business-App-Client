import Banner from "../components/home/banner/Banner";
import Faq from "../components/home/faq/Faq";
import Service from "../components/home/service/Service";
import Testimonial from "../components/home/testimonial/Testimonial";

 
const Home = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Testimonial/>
            <Faq/>
        </div>
    );
};

export default Home;