import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductsCategories = ({ productName, text, to }) => {    
    return (
        <div className="relative flex-1">
            <Link to={`${to}?category=${text.toLowerCase()}`} className="flex-1">
                <div className="relative group h-full max-h-screen">
                    <img 
                        className="w-full h-full object-cover group-hover:blur-lg transition duration-50" 
                        src={productName} 
                        alt={productName}
                        loading="priority"    
                    />
                    <div 
                        className="
                            opacity-0
                            group-hover:opacity-100 
                            duration-300 
                            absolute 
                            py-2 
                            inset-0
                            flex 
                            justify-center 
                            items-center 
                        ">
                        <button 
                            className="
                                text-3xl
                                text-white 
                                font-semibold 
                                font-titleFont
                                cursor-pointer 
                                relative 
                                inline-block
                                transition-all
                                duration-300
                                before:content-['']
                                before:absolute
                                before:bottom-0
                                before:left-1/2
                                before:-translate-x-1/2
                                before:w-0
                                before:h-0.5
                                before:opacity-0
                                before:transition-all
                                before:duration-300
                                before:bg-white
                                hover:before:w-full
                                hover:before:opacity-100
                            ">
                            {text}
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

ProductsCategories.propTypes = {
    productName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default ProductsCategories;
