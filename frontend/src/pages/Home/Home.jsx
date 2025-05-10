
import RootLayout from '../../layout/RootLayout';

import Hero from './Hero';
import Services from '../services/Services';
import MostSearch from '../services/mostSearch/MostSearch';

function Home() {

    // Hero section logic

    const variants = {
        hidden: { opacity: 0, y: -800},
        visible: { opacity: 1, y: 0},
    }

    return (
        <div className="space-y-16 w-full min-h-screen pb-16" >
            {/* Hero */}
            <Hero />

            {/* Services */}
            <Services />

            {/* Most searched */}
            <MostSearch />

        </div>
    );
}

export default Home