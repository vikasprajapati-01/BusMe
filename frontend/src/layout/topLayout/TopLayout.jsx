// import { motion } from 'framer-motion';

// import RootLayout from '../RootLayout';

// function TopLayout({ img, title, className }) {

//     const variants = {
//         hidden: { opacity: 0, y: -100},
//         visible: { opacity: 1, y: 0},
//     }

//     return(
//         <motion.div
//             className={`w-full h-[30vh] bg-cover bg-no-repeat bg-center relative ${className}`}
//             style={{ backgroundImage: `url(${img})` }}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={variants}
//             transition={{ duration: 0.85, ease: "easeInOut" }}
//         >
//             <RootLayout className="absolute top-0 left-0 w-full h-full pb-10 pt-[9ch] bg-gradient-to-b from-neutral-200/90 via-neutral-500/60 to-neutral-900/70 flex items-center justify-end flex-col gap-3">
//                 <motion.h1
//                     className='text-5xl text-neutral-800 py-3 font-bold capitalize text-center'
//                     initial={{ opacity: 0, y: -30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.85, delay: 0.8, ease: "easeOut" }}
//                     >
//                         {title}
//                 </motion.h1>
//             </RootLayout>
//         </motion.div>
//     );
// }

// export default TopLayout

import { motion } from 'framer-motion';

import RootLayout from '../RootLayout';

function TopLayout({ img, title, className }) {

    const variants = {
        hidden: { opacity: 0, y: -100},
        visible: { opacity: 1, y: 0},
    }

    return(
        <motion.div
            className={`w-full h-[30vh] bg-cover bg-no-repeat bg-center relative ${className}`}
            style={{ backgroundImage: `url(${img})` }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.85, ease: "easeInOut" }}
        >
            {/* Improved gradient overlay with better color depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-neutral-900/50 to-primary/70"></div>
            
            {/* Secondary overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            
            <RootLayout className="absolute top-0 left-0 w-full h-full pb-10 pt-[9ch] flex items-center justify-end flex-col gap-3 relative z-10">
                <motion.h1
                    className='text-4xl sm:text-5xl lg:text-6xl text-white py-3 font-bold capitalize text-center drop-shadow-2xl'
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.8, ease: "easeOut" }}
                    >
                        {title}
                </motion.h1>
                
                {/* Optional: Add a subtle accent line under the title */}
                {/* <motion.div 
                    className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                ></motion.div> */}
            </RootLayout>
        </motion.div>
    );
}

export default TopLayout