import PaypalButton from "../components/cart/PayPalButton";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const Checkout = () => {
    const productData = useSelector((state) => state.filar.productData);
    const productDescription = productData.map(item => `${item.title} $ ${item.price} ${item.quantity}`).join(', ');
    const totalAmt = productData.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)+"";
    console.log(productDescription);
    console.log(totalAmt);

    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className='max-w-md w-full p-6'>
                <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
                    <h1 className='text-2xl font-titleFont text-stone-600 font-bold mb-4'>Checkout</h1>
                    <div>
                        <PaypalButton description={productDescription} total={totalAmt}/>
                    </div>
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






