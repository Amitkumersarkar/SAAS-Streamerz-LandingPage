import { useState } from "react";
import logo from "../../assets/logo.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div className="fixed top-4 left-0 right-0 z-50 m-2">
                <div className="text-neutral-500 bg-black/60 backdrop:backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;