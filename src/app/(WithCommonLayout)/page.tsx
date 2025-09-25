import Banner from "../components/home/banner/Banner";
import Faq from "../components/home/faq/Faq";
import Service from "../components/home/service/Service";
import Testimonial from "../components/home/testimonial/Testimonial";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

 
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Service/>
            <Testimonial/>
            <Faq/>
            <Footer/>
        </div>
    );
};

export default Home;