import {motion, AnimatePresence} from "framer-motion";

import { NavbarMenu } from "../../dataFolder/data";

function Sidebar({menuBar}) {
    return (
        <AnimatePresence mode="wait" >
            {
                menuBar && (
                    <motion.div initial={{ opacity: 0, y: -100 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                exit={{ opacity: 0, y: -100 }} 
                                transition={{ duration: 0.3 }} 
                                className="absolute top-20 left-0 w-full h-screen z-20" >
                        <div className="text-xl font-semibold bg-primary text-white py-10 m-4 rounded-xl">
                            <ul className="flex flex-col justify-center items-center gap-8">
                                {
                                    NavbarMenu.map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.link} >{item.title}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </ motion.div>
                )
            }
        </ AnimatePresence>
    );
}

export default Sidebar