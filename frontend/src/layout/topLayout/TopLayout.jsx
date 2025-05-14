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
            <RootLayout className="absolute top-0 left-0 w-full h-full pb-10 pt-[9ch] bg-gradient-to-b from-neutral-200/90 via-neutral-500/60 to-neutral-900/70 flex items-center justify-end flex-col gap-3">
                <motion.h1
                    className='text-5xl text-neutral-800 py-3 font-bold capitalize text-center'
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.8, ease: "easeOut" }}
                    >
                        {title}
                </motion.h1>
            </RootLayout>
        </motion.div>
    );
}

export default TopLayout