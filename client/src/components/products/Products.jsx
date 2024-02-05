import ProductsCard from "./ProductsCard";
import PropTypes from 'prop-types';

const Products = ({ products, title, text }) => {

    return (
        <div className="py-10">
            <div className="flex flex-col font-titleFont items-center gap-4 px-6">
                <h1 className="text-xl border-stone-400 border-t-2 border-b-2 text-stone-600 py-2 w-80 text-center">
                    {title}
                </h1>
                <p className="max-w-[850px] font-bodyFont text-stone-600 text-center hidden md:block">
                    {text}
                </p>
            </div>
            {/* <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10"> */}
            <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {
                    products.map((item) => (
                        <ProductsCard key={item._id} product={item} />
                    ))
                }
            </div>
        </div>
    );
};


Products.propTypes = {
    products: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};


export default Products;