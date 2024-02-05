import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from "react";

const Carousel = ({ slides, autoScrollInterval = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1) % slides.length);
    };
    

        // Reset slide when slides change
        useEffect(() => {
            setCurrentSlide(0);
        }, [slides]);
    
        // Function to start automatic scrolling
        const startAutoScroll = () => {
            intervalRef.current = setInterval(() => {
                nextSlide();
            }, autoScrollInterval);
        };
    
        // Function to stop automatic scrolling
        const stopAutoScroll = () => {
            clearInterval(intervalRef.current);
        };
    
        // Start automatic scrolling when component mounts
        useEffect(() => {
            startAutoScroll();
            // Cleanup function to stop automatic scrolling when component unmounts
            return () => {
                stopAutoScroll();
            };
        }, []);
    
        // Restart automatic scrolling when the current slide changes
        useEffect(() => {
            stopAutoScroll(); // Stop previous interval
            startAutoScroll(); // Start a new interval with the updated current slide
        }, [currentSlide]);

    return (
        <div className="max-h-[85vh] overflow-hidden relative" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
                <div className="flex nowrap relative" style={{ width: `${slides.length * 100}%`, left: `-${currentSlide * 100}%` }}>
                    {slides.map((slide, index) => (
                        <div className="relative flex w-full" key={index}>
                            <img
                                className={`w-full object-fit ${currentSlide === index ? 'animate-fade' : ''}`}
                                src={slide.image}
                                alt={`BannerImg${index + 1}`}
                                loading="priority"
                            />
                            <div className="absolute top-1/2 lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <p className="text-white text-xl md:text-3xl lg:text-7xl font-bold">{slide.title}</p>
                                <p className="text-white text-md md:text-xl lg:text-3xl font-bold mt-4">{slide.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            <div className="absolute inset-0 top-0 h-full w-full justify-between items-center flex text-stone-200 px-10 text-3xl">
                <button onClick={prevSlide}>
                    <IoIosArrowBack/>
                </button>
                <button onClick={nextSlide}>
                    <IoIosArrowForward/>
                </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                    {slides.map((image, index) => {
                        return (
                            <div 
                                onClick={() => setCurrentSlide(index)}
                                key={ "circle" + index }
                                className={`rounded-full w-2.5 h-2.5 cursor-pointer ${ index == currentSlide ? "bg-white" : "bg-stone-300" }`}>
                            </div>  
                        );  
                    })}
                    
            </div>
        </div>
    );
};

Carousel.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired,
    transitionDuration: PropTypes.number,
    autoScrollInterval: PropTypes.number,
};

export default Carousel;
