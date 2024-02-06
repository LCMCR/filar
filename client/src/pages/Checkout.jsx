import PaypalButton from "../components/cart/PayPalButton";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const productData = useSelector((state) => state.filar.productData);
    const productDescription = productData.map(item => `${item.title} $ ${item.price} ${item.quantity}`).join(', ');
    const totalAmt = productData.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)+"";
    // console.log(productDescription);
    // console.log(totalAmt);
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    };

    return (
        <div className='w-screen flex justify-center items-center h-auto min-h-[80vh]'>
            <div className='max-w-md w-full p-6'>
                <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
                    <h2 className='text-2xl font-titleFont text-stone-600 font-bold mb-4'>Checkout</h2>
                    <div>
                        <PaypalButton description={productDescription} total={totalAmt}/>
                    </div>
                    <button onClick={handleOnClick} className="flex flex-row items-center gap-2 text-stone-600">
                        <span>
                            <HiOutlineArrowLeft />
                        </span>
                        back to Filar
                    </button>
                </div>
            </div>
        </div>
    );
};

Checkout.propTypes = {
    productDescription: PropTypes.string.isRequired,
    totalAmt: PropTypes.string.isRequired,
};

export default Checkout; 






