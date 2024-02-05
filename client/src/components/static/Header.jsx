import { useState } from "react";
import { RxAvatar, logoDark, IoMdMenu } from "../../assets/Assets";
import { BsCart } from "../../assets/Assets";
import HeaderItem from "./HeaderItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
    const productData = useSelector((state) => state.filar.productData);
    const userInfo = useSelector((state) => state.filar.userInfo);
    const iconsColor = { color: "rgb(87, 83, 78)" };
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="w-full z-30 bg-white border-b-[1px] border-b-stone-600 flex-wrap items-center justify-between font-titleFont sticky top-6">
            <div className="max-w-screen-xl mx-auto px-4 h-20 flex flex-shrink-0 items-center justify-between text-stone-600">
                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-3xl focus:outline-none"
                    >
                        <IoMdMenu />
                    </button>
                </div>
                {/* Logo */}
                <Link to="/">
                    <div className="px-10">
                        <img className="w-48 fill-current mr-4" src={logoDark} alt="logoDark" />
                    </div>
                </Link>
                {/* Pages, Cart, and Avatar */}
                <div className="hidden md:flex items-center gap-10 lg:gap-20">
                    <ul className="flex items-center gap-4 lg:gap-10">
                        <Link to="/new-in"><HeaderItem text="New in" /></Link>
                        <Link to="/shop"><HeaderItem text="Shop" /></Link>
                        <Link to="/about-us"><HeaderItem text="About us" /></Link>
                        <Link to="/contact"><HeaderItem text="Contact" /></Link>
                    </ul>

                    <div className="flex items-center gap-6 lg:gap-10">
                        <Link to="/cart">
                            <div className="relative">
                                <BsCart style={iconsColor} size={30} className="w-10" />
                                <span className="absolute w-6 top-1.5 left-2 text-xs flex items-center justify-center font-semibold">
                                    {productData.length}
                                </span>
                            </div>
                        </Link>
                        <Link to="/login">
                            { userInfo ? <img src={userInfo.image} alt="userLogo" className="w-8 h-8 rounded-full"/> : <RxAvatar style={iconsColor} size={30} className="w-10" /> }
                        </Link>
                    </div>

                </div>
                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-4 bg-white p-4 shadow-md text-stone-600 z-20">
                        {/* Mobile menu items go here */}
                        <Link to="/new-in" onClick={closeMobileMenu}><div className="mb-2">New In</div></Link>
                        <Link to="/shop" onClick={closeMobileMenu}><div className="mb-2">Shop</div></Link>
                        <Link to="/about-us" onClick={closeMobileMenu}><div className="mb-2">About us</div></Link>
                        <Link to="/contact" onClick={closeMobileMenu}><div className="mb-2">Contact</div></Link>
                    </div>
                )}
                {/* Cart and Avatar for Mobile */}
                <div className="md:hidden flex items-center gap-4">
                    <Link to="/cart">
                        <div className="relative">
                            <BsCart style={iconsColor} size={30} className="w-10" />
                            <span className="absolute w-6 top-1.5 left-2 text-xs flex items-center justify-center font-semibold">
                                {productData.length}
                            </span>
                        </div>
                    </Link>
                    <Link to="/login">
                        { userInfo ? <img src={userInfo.image} alt="userLogo" className="min-w-8 w-8 h-8 rounded-full"/> : <RxAvatar style={iconsColor} size={30} className="w-10" /> }
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;

