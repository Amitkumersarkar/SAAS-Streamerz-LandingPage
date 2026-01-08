import { useState } from "react";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-4 left-0 right-0 z-50 m-2">
            <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">

                <img src={logo} alt="logo" width={120} height={24} />

                {/* center links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#works" className="hover:text-neutral-200">How it Works</a>
                    <a href="#pricing" className="hover:text-neutral-200">Pricing</a>
                    <a href="#testimonials" className="hover:text-neutral-200">Testimonials</a>
                </div>

                {/* buttons */}
                <div className="hidden md:flex space-x-4 items-center">
                    <a href="#" className="hover:text-neutral-200">Login</a>
                    <a href="#" className="border border-neutral-700 text-white py-2 rounded-lg px-4 hover:bg-neutral-700 transition">
                        Get a Demo
                    </a>
                    <a href="#" className="bg-blue-600 text-white py-2 rounded-lg px-4 hover:bg-blue-500 transition">
                        Start Free Trial Now !
                    </a>
                </div>

                {/* mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isOpen ? <RiCloseFill size={24} /> : <RiMenu3Line size={24} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
