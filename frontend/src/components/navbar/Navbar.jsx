import { useState } from "react";
import { NavbarMenu } from "../../dataFolder/data";

import Sidebar from './Sidebar';

import { FaBus } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";

function Navbar() {

    const [menuBar, setMenuBar] = useState(false);

    return (
        <>
            <nav className="bg-gray-200">
                <div className="container flex justify-between items-center py-4 pl-4 md:pl-1">
                    {/* Logo */}
                    <div className="text-2xl flex items-center gap-2 font-bold uppercase text-primary">
                        <FaBus />
                        <p>BusMe</p>
                    </div>

                    {/* Menu */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 text-gray-800">
                            {
                                NavbarMenu.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.link} className="inline-block py-1 px-3 hover:bg-primary hover:text-white rounded-full p-2 duration-200 font-semibold">{item.title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* Login */}
                    <div className="flex items-center ">
                        {/* <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 md:block">Login</button> */}
                        <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-4 py-1.5 text-sm md:px-6 md:py-2 md:text-base duration-200 ml-20 md:ml-4">
                            Login
                        </button>
                    </div>

                    {/* Moblie Menu */}
                    <div className="md:hidden" onClick={() => setMenuBar(!menuBar)}>
                        <RiMenu2Fill className="text-3xl" />
                    </div>

                </div>
            </nav>

            {/* Mobile Sidebar */}
            <Sidebar menuBar={menuBar} />
        </>
    );
}

export default Navbar