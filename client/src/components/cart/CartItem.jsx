import { useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { incrementQuantity, decreaseQuantity, deleteItemFromCart, emptyCart } from "../../redux/filarSlice";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

const CartItem = () => {
    const productData = useSelector((state) => state.filar.productData);
    // console.log(productData);
    const dispatch = useDispatch();
    const showButton = productData.length > 0 ? true : false;

    return (
        <div className="lg:w-2/3 py-6 px-4">
            <div className="w-full text-center md:text-start">
                <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
            </div>
            <div>
                {productData.map((item) => {
                    return (
                        <div 
                            key={item._id}
                            className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 border-stone-300 border-t-2 border-b-2">
                            <div className="flex items-center gap-2">
                                <img
                                    className="w-32 h-32 rounded-lg object-cover mt-2 mb-2"
                                    src={item.image}
                                    alt="productImg"
                                />
                            </div>
                            <div className="flex flex-col gap-4 lg:gap-10 md:flex-row">
                                <h2 className="w-auto lg:min-w-56">
                                    {item.title}
                                </h2>
                                {/* <p className="w-10">
                                    ${item.price}
                                </p> */}
                                <div className="w-auto flex flex-col items-center justify-between gap-4 p-3 text-stone-600">
                                    <p className="text-sm hidden lg:block">Quantity</p>
                                    <div className="flex items-center gap-4 text-sm font-semibold">
                                        <button 
                                            onClick={() => 
                                                dispatch(
                                                    decreaseQuantity({
                                                        _id: item._id,
                                                        title: item.title,
                                                        image: item.image,
                                                        price: item.price,
                                                        quantity: item.quantity,
                                                    })
                                                )
                                            }
                                            className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-stone-600 hover:text-white cursor-pointer duration-300 active:bg-stone-600">
                                            -
                                        </button>
                                        <span>
                                            {item.quantity}
                                        </span>
                                        <button 
                                            onClick={()=>  
                                                dispatch(
                                                    incrementQuantity({
                                                        _id: item._id,
                                                        title: item.title,
                                                        image: item.image,
                                                        price: item.price,
                                                        quantity: item.quantity,
                                                    })
                                                )
                                            }
                                            className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-stone-600 hover:text-white cursor-pointer duration-300 active:bg-stone-600">
                                            +
                                        </button>
                                    </div> 
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <p className="w-14">${item.quantity * item.price}</p>
                                <IoMdCloseCircle 
                                        onClick={() =>
                                            dispatch(deleteItemFromCart({_id: item._id,}))
                                            & toast.success(`${item.title} removed from your cart!`)
                                        }
                                        className="text-xl text-stone-400 hover:text-stone-600 cursor-pointer duration-300 items-end md:block"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            {showButton && <button 
                    onClick={() =>
                        dispatch(emptyCart())
                        & toast(`Your cart is empty!`)
                    }
                    className="bg-stone-600 text-white mt-8 ml-7 py-1 px-6 rounded-lg hover:bg-white hover:text-stone-600 hover:border hover:border-stone-600 cursor-pointer duration-300 hidden lg:block">
                    empty cart
                </button>
            }
            <Link to="/shop" className="hidden lg:block">
                <button className="mt-8 ml-7 flex items-center gap-1  text-stone-400 hover:text-stone-600 duration-300">
                    <span>
                        <HiOutlineArrowLeft />
                    </span>
                    back to shopping
                </button>
            </Link>
            
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

export default CartItem;

