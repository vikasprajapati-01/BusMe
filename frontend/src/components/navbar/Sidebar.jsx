
import {motion, AnimatePresence} from "framer-motion";
import { Link } from "react-router-dom";
import { NavbarMenu } from "../../dataFolder/data";

function Sidebar({menuBar, setMenuBar}) {
    return (
        <AnimatePresence mode="wait">
            {
                menuBar && (
                    <>
                        {/* Backdrop/Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }} 
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
                            onClick={() => setMenuBar(false)}
                        />
                        
                        {/* Sidebar */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: -20 }} 
                            animate={{ opacity: 1, scale: 1, y: 0 }} 
                            exit={{ opacity: 0, scale: 0.95, y: -20 }} 
                            transition={{ duration: 0.2, ease: "easeOut" }} 
                            className="fixed top-20 left-4 right-4 z-50"
                        >
                            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                                {/* Header */}
                                <div className="bg-gradient-to-r from-primary to-blue-600 px-4 py-3">
                                    <h3 className="text-white font-semibold text-center">Menu</h3>
                                </div>
                                
                                {/* Menu Items */}
                                <div className="py-2">
                                    <ul className="space-y-1">
                                        {
                                            NavbarMenu.map((item, index) => {
                                                return (
                                                    <motion.li 
                                                        key={item.id}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                        className="px-2"
                                                    >
                                                        <Link 
                                                            to={item.link} 
                                                            className="block py-3 px-4 text-gray-700 font-medium hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-200 text-center"
                                                            onClick={() => setMenuBar(false)}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </motion.li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )
            }
        </AnimatePresence>
    );
}

export default Sidebar