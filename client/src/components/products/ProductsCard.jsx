import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/filarSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductsCard = ({ product }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const _id = product.title;

    const idString = (_id) => {
        return String(_id).toLowerCase().split(' ').join('-');
    }; 

    const rootId = idString(_id);
     
    const handleProdDetails = () => {
        navigate(`/product/${rootId}`, {
            state: { 
                item: product, 
            },
        })
    };

    const handleAddToCart = (e) => {
        e.stopPropagation(); // Prevents the click event from propagating to the parent container, meaning the image in this case
        dispatch(addToCart({
            _id: product._id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1,
            description: product.description,
        }));
        toast.success(`${product.title} added to your cart!`);
    };
    

    return (
        <div className='group relative text-stone-600'>
            <div onClick={handleProdDetails} className='w-full h-96 cursor-pointer overflow-hidden relative group-hover:opacity-100 transition-opacity duration-300'>
                <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-500" 
                    src={product.image} 
                    alt={product.title}
                />
                <div className='absolute inset-x-0 bottom-0 h-[40px] opacity-0 group-hover:opacity-90 transition-opacity'>
                    <button
                        onClick={handleAddToCart}
                        className='w-full h-full text-center bg-white hover:opacity-75 text-sm'>
                        add to cart
                    </button>
                </div>
            </div>
            {/* <div className='w-full border-[1px] px-2 py-4'> */}
            <div className='w-full px-2 py-4'>
                <div className=' flex justify-between items-center'>
                    <div>
                        <h2 className='font-titleFont text-base font-bold'>{product.title.substring(0, 15)}</h2>
                    </div>
                    <div className='flex gap-2 relative'>
                        <div className='text-sm relative w-28 flex gap-2 justify-end'>
                            <p className='line-through  text-stone-400'>
                                ${product.oldPrice}
                            </p>
                            <p className='font-semibold'>
                                ${product.price}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-sm text-stone-500'>
                        {product.category}
                    </p>
                </div>
                <div className='absolute top-4 right-0'>
                    {product.isNew && (
                        <p className='text-sm bg-stone-600 text-white font-semibold font-titleFont px-6 py-1'>
                            New in!
                        </p>
                    )}
                </div>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

ProductsCard.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductsCard;