import { useState, useEffect } from "react";
import { CartImg } from "../assets/Assets";
import CartItem from "../components/cart/CartItem";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    
    const productData = useSelector((state) => state.filar.productData);
    const userInfo = useSelector((state) => state.filar.userInfo);
    const navigate = useNavigate();
    var [totalAmt, setTotalAmt] = useState("");

    useEffect(() => {
        const totalPrice = productData.reduce((total, item) => total + (item.price * item.quantity), 0);
        setTotalAmt(totalPrice.toFixed(2));
    }, [productData]);
    

    const handleCheckOut = () => {
        userInfo ? navigate('/checkout') : toast.error("please login to proceed");
    };

    return (
        <div className="text-stone-600">
            <img 
                className="w-full h-60 object-cover"
                src={CartImg}
                alt="cartImg"
            />
            <div className="mx-auto max-w-7xl m-6 flex flex-col lg:flex-row gap-4">
                <CartItem />
                <div className="lg:w-1/3 bg-stone-100 m-6 flex flex-col items-center h-fit">
                    <div className="flex flex-col gap-6 border-b-[1px] border-b-stone-600 pb-6 m-6">
                        <h2 className="text-2xl font-titleFont text-center lg:text-start">Cart Totals</h2>
                        <p className="flex items-center gap-4 text-base">
                            Subtotal{" "}
                            <span className="font-titleFont font-bold text-lg">
                                $ {totalAmt}
                            </span>
                        </p>
                        <p className="flex items-start gap-4 text-base">
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                            </span>
                        </p>
                    </div>
                    <p className="font-titleFont text-lg font-semibold flex justify-between mt-6 m-4 gap-4">
                        Total <span className="text-xl font-bold">$ {totalAmt}</span>
                    </p>
                    <button onClick={handleCheckOut} className="text-base rounded-lg bg-stone-600 text-white w-2/3 py-3 mt-6 mb-6 hover:bg-white hover:text-stone-600 hover:border hover:border-stone-600 cursor-pointer duration-300">
                        proceed to checkout
                    </button>
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

export default Cart;
