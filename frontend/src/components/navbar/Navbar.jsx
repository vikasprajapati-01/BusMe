import { useState } from "react";
import { NavbarMenu } from "../../dataFolder/data";
import { Link } from "react-router-dom";

import Sidebar from './Sidebar';

import { FaBus } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";

function Navbar() {

    const [menuBar, setMenuBar] = useState(false);

    return (
        <>
            <nav className="bg-gray-200 fixed top-0 left-0 right-0 z-50 shadow-md">
                <div className="container flex justify-between items-center py-3 px-4 md:py-4 md:px-6">
                    {/* Logo */}
                    <div className="text-xl md:text-2xl flex items-center gap-2 font-bold uppercase text-primary">
                        <FaBus className="text-lg md:text-xl" />
                        <p>BusMe</p>
                    </div>

                    {/* Menu */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 text-gray-800">
                            {
                                NavbarMenu.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <Link to={item.link} className="inline-block py-1 px-3 hover:bg-primary hover:text-white rounded-full p-2 duration-200 font-semibold">{item.title}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* Right side container */}
                    <div className="flex items-center gap-3">
                        {/* Login */}
                        <Link 
                            to={"/login"} 
                            className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-3 py-1.5 text-sm md:px-6 md:py-2 md:text-base duration-200 transition-all"
                        >
                            Login
                        </Link>

                        {/* Mobile Menu */}
                        <button 
                            className="md:hidden p-2 hover:bg-gray-300 rounded-lg transition-colors duration-200" 
                            onClick={() => setMenuBar(!menuBar)}
                            aria-label="Toggle menu"
                        >
                            <RiMenu2Fill className="text-2xl text-gray-700" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <Sidebar menuBar={menuBar} setMenuBar={setMenuBar} />
        </>
    );
}

export default Navbar