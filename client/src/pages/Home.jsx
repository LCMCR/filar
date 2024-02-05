import Carousel from "../components/Carousel";
import Products from "../components/products/ProductsBanner";
import { BannerImg1, BannerImg2, BannerImg3 } from "../assets/Assets";

const Home = () => {
    return (
        <div className="flex-grow relative">
            <Carousel 
                slides={[
                    {
                        image: BannerImg1,
                        title: "Welcome to FILAR", 
                        text: "Explore our curated collection of the latest trends, timeless classics, and must-have essentials."
                    },
                    {
                        image: BannerImg2,
                        title: "Quality Craftsmanship, Unmatched Style",
                        text: "Each piece in our collection combines superior craftsmanship with on-trend style."
                    },
                    {
                        image: BannerImg3,
                        title:"Effortless Elegance for Every Occasion",
                        text: "From casual brunch dates to formal evenings out, we've got the perfect outfit for every occasion."
                    }
                ]}   
                transitionDuration={1000} 
                arrowStyles={{ color: "rgb(87, 83, 78)" }}
            />
            <Products />
        </div>
    );
};

export default Home;