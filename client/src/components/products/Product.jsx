import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/filarSlice";
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
    const dispatch = useDispatch();

    const [details, setDetails] = useState({});

    let [baseQuantity, setBaseQuantity] = useState(1);

    const location = useLocation();

    useEffect(() => {
        setDetails(location.state.item);
    }, []);

    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
                <div className="w-2/5 relative">
                    <img 
                        className="w-full h-[550px] object-cover"
                        src={details.image}
                        alt={details.title}
                    />
                    <div className='absolute top-4 right-0'>
                        {details.isNew && (
                            <p className='text-sm bg-stone-600 text-white font-semibold font-titleFont px-8 py-1'>
                                New in!
                            </p>
                        )}
                    </div>
                </div>
                <div className="w-3/5 flex flex-col text-stone-600 justify-center gap-12">
                    <div className="">
                        <h2 className="text-2x uppercase">{details.title}</h2>
                        <div className='flex items-center gap-4 mt-3'>
                            <p className='line-through font-base text-stone-400'>
                                ${details.oldPrice}
                            </p>
                            <p className='font-medium'>
                                ${details.price}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                        <div className="flex">
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                        </div>
                        <p className="text-xs text-stone-400">(1 Customer Review)</p>
                    </div>
                    <p className="text-base text-stone-600 -mt-3">{details.description}</p>
                    <div className="flex gap-4">
                        <div className="w-52 flex items-center justify-between gap-4 border p-3 text-stone-600">
                            <p className="text-sm ">Quantity</p>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <button 
                                    onClick={() => 
                                        setBaseQuantity(baseQuantity===1 ? (baseQuantity=1) : baseQuantity-1) 
                                    } 
                                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-stone-600 hover:text-white cursor-pointer duration-300 active:bg-stone-600">
                                    -
                                </button>
                                <span>{baseQuantity}</span>
                                <button onClick={()=> setBaseQuantity(baseQuantity+1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-stone-600 hover:text-white cursor-pointer duration-300 active:bg-stone-600">
                                    +
                                </button>
                            </div>
                        </div>
                        <button 
                            onClick={()=>dispatch(addToCart({
                                _id: details._id,
                                title: details.title,
                                image: details.image,
                                price: details.price,
                                quantity: baseQuantity,
                                description: details.description,
                                })
                                ) & toast.success(`${details.title} added to your cart!`) //`` functional parameter
                            }
                            className="bg-stone-600 text-white py-3 px-6 border hover:bg-white hover:text-stone-600 cursor-pointer duration-300 active:bg-white">
                            add to cart
                        </button>
                    </div>
                    <p className="text-base text-stone-400">Category: <span className="font-medium capitalize">{details.category}</span></p>
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

export default Product;