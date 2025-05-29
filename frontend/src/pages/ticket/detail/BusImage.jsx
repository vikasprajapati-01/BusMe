

function BusImage() {
    return(
        <div className="
            w-full 
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-3 sm:gap-4 lg:gap-5 
            items-center 
            border-t border-neutral-300 
            pt-5 sm:pt-6 lg:pt-7 
            pb-2
        ">
            <div className="w-full rounded-xl overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                    alt="Bus Image 1" 
                    className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15" 
                />
            </div>

            <div className="w-full rounded-xl overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Bus Image 2" 
                    className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15" 
                />
            </div>

            <div className="w-full rounded-xl overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Bus Image 3" 
                    className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15" 
                />
            </div>

            <div className="w-full rounded-xl overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Bus Image 4" 
                    className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15" 
                />
            </div>
        </div>
    );
}

export default BusImage